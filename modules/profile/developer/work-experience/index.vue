<script>
  import Form from "./Form.vue"
  import Card from "./Card.vue"
  import Modal from "@/components/modal/index.vue"

  export default {
    components: {
      Form,
      Modal,
      Card
    }
  }
</script>

<script setup>
  const supabase = useSupabaseClient()
  const user = supabase.auth.user()

  let workExperiences = ref([])
  let skills = ref([])
  let showForm = ref(false)
  let showDelete = ref(false)
  let activeExperience = ref({})
  let activeIndex = ref(null)
  let deleteIndex = ref(null)

  let hasExperience = workExperiences.length !== 0

  async function getUser() {
    const { data } = await supabase
      .from('profile')
      .select('*')
      .eq('email', user?.email)

    if (data?.[0]?.work_experience) {      
      workExperiences.value.push(...data?.[0]?.work_experience)
    }
  }

  const submitHandler = async (value) => {
    const item = {
      "period": {
        "dateTo": value?.dateTo,
        "dateFrom": value?.dateFrom,
      },
      "skills": skills?._rawValue,
      "summary": value?.summary,
      "position": value?.position,
      "companyName": value?.companyName,
      "country": value?.country
    }

    if (activeIndex?.value === null) {
      const items = [
        ...workExperiences?._rawValue,
        item
      ]
      workExperiences.value = items

      await supabase
        .from('profile')
        .update({
          work_experience: items
        })
        .eq('email', user?.email)
    } else {
      workExperiences.value[activeIndex?.value] = item
      const { data } = await supabase
        .from('profile')
        .update({
          work_experience: [
            ...workExperiences?._rawValue,
          ]
        })
        .eq('email', user?.email)

      workExperiences.value = [...workExperiences?._rawValue]
    }

    activeIndex.value = null
    activeExperience.value = {}
    skills.value = []
    showForm.value = false
  }

  const submitDeleteHandler = async (index) => {
    workExperiences.value.splice(index, 1)    
    const { data, error } = await supabase
      .from('profile')
      .update({
        work_experience: [
          ...workExperiences?._rawValue,
        ]
      })
      .eq('email', user?.email)

    deleteIndex.value = null
  }

  const selectExperience = (item, index) => {
    activeIndex.value = index
    activeExperience.value = item
    skills.value.push(...activeExperience.value.skills)
  }

  const handleDelete = (value, index) => {
    deleteIndex.value = index
    showDelete.value = value
  }

  const handleAddSkill = (skill) => {
    skills.value.push(skill)
  }

  watch(showForm, () => {
    if (!showForm.value) {
      activeIndex.value = null
      activeExperience.value = {}
      skills.value = []
    }
  })

  watch(activeIndex, () => {
    if (activeIndex.value !== null) {
      showForm.value = true
    } else {
      showForm.value = false
    }
  })

  getUser()
</script>


<template>
  <div class='w-full max-w-2xl m-auto flex flex-col justify-center items-start gap-4'>
    <div class="w-full flex flex-row justify-between">
      <div class='flex flex-col items-start gap-1'>
        <h4 class='font-bold text-2xl'>Work Experience</h4>
        <span class='text-body-dark text-md'>Add or update your work experience.</span>
      </div>

      <div v-if="!showForm">
        <button class='bg-blue-500 text-white px-4 rounded flex items-center justify-center h-[40px]' @click="showForm = true">Add</button>
      </div>
      <div v-else>
        <button class='bg-blue-500 text-white px-4 rounded flex items-center justify-center h-[40px]' @click="showForm = false">Close</button>
      </div>
    </div>

    <div class="w-full">
      <Form
        :isOpen="showForm"
        :submitHandler="submitHandler"
        :activeExperience="activeExperience"
        :handleAddSkill="handleAddSkill"
        :submitSkills="handleSubmitSkills"
        :skills="skills"
      />
    </div>

    <div v-if="!hasExperience" class="w-full flex justify-center border rounded p-6">
      <h4>Please add your work experience.</h4>
    </div>
    <div v-else class="w-full flex flex-col gap-6 justify-between border rounded p-6">
      <div v-for="(item, index) in workExperiences" :key="index" class="w-full flex flex-col">
        <Card
          :index="index"
          :deleteIndex="deleteIndex"
          :item="item"
          :select="selectExperience"
          :handleDelete="handleDelete"
          :submitDeleteHandler="submitDeleteHandler"
        />
      </div>
    </div>
  </div>
</template>
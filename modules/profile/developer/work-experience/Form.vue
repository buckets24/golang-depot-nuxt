<script setup>
  import Countries from "@/utils/countries"
  const props = defineProps({
    isOpen: Boolean,
    submitHandler: Function,
    handleAddSkill: Function,
    submitSkills: Function,
    activeExperience: Object,
    skills: Array
  })

  let skillItem = ref("")
  let skillsList = ref(props.skills)

  const handleSkillsList = (skill) => {
    skillsList.value.push(skill)
  }

   const handleRemoveSkill = (index) => {
    skillsList.value.splice(index, 1)
  }


</script>


<template>
  <div v-show="isOpen" class='w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
    <FormKit
      type="form"
      id="registration-example"
      submit-label="Save"
      @submit="submitHandler"
      v-model="activeExperience"
    >
      <div class="flex flex-col">
        <div class="flex-1">
          <FormKit
            id="companyName"
            type="text"
            label="Company"
            name="companyName"
            validation="required"
            
          />
        </div>
        <div class="flex-1">
          <FormKit
            type="select"
            label="Country"
            name="country"
            :options="Countries"
          />
        </div>
        <div class="flex-1">
          <FormKit
            type="text"
            label="Role"
            name="position"
            validation="required"
          />
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex-1">
            <FormKit
              type="date"
              name="dateFrom"
              label="Date From"
              validation="required"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="date"
              name="dateTo"
              label="Date to"
              validation="required"
            />
            <div class="mb-4">
              <FormKit
                name="present"
                type="checkbox"
                label="Present"
              />
            </div>
          </div>
        </div>
        <div>
          Skills
          <div class="flex gap-2">
            <div
              v-for="(skill, index) in skills"
              :key="skill"
              class="flex gap-2"
            >
              <div class="flex gap-2 border rounded px-2 my-2">
                <div>{{ skill }}</div>
                <div @click="handleRemoveSkill(index)" class="cursor-pointer">X</div>
              </div>
            </div>
          </div>

          <div class="flex gap-2">
            <FormKit
              type="text"
              name="skill"
              v-model="skillItem"
            />
            <div
              @click="handleSkillsList(skillItem)"
              class='bg-blue-500 rounded flex items-center justify-center h-[40px] px-2 text-white cursor-pointer'
            >
              Add skill
            </div>
          </div>
        </div>
        <div>
          <FormKit
            type="textarea"
            name="summary"
            label="Job Scope"
            validation="required"
            rows="10"
          />
        </div>
      </div>
    </FormKit>
  </div>
</template>
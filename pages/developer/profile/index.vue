<script setup>
  const supabase = useSupabaseClient()
  const user = supabase.auth.user()

  let profile = ref({})

  const { data } = await supabase
      .from('profile')
      .select('*')
      .eq('email', user?.email)

  profile.value = data?.[0]

</script>

<template>
  <div>
    <div class='container mx-auto'>

      <div class='container max-w-3xl mx-auto flex flex-col gap-6'>
        <div class='flex items-center justify-between'>
          <div class="flex items-center justify-start gap-4 w-full">
            <div>
              <div class='h-[150px] w-[150px] rounded-full bg-bg-light flex items-center justify-center'>
                Avatar
              </div>
            </div>
            <div>
              <div>
                <h5 class='font-bold text-2xl'>{{ profile?.full_name }}</h5>
              </div>
              <div>
                <h5 class='font-bold'>{{ profile?.mobile_no }}</h5>
              </div>
              <div>
                <h5 class='font-bold'>{{ profile?.email }}</h5>
              </div>
            </div>
          </div>
          <div>
            <button @click="navigateTo('/developer/profile/edit')">
              Edit
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class='font-bold text-lg'>Summary</h4>
           <div class="card w-full bg-base-100 shadow">
            <div class="card-body">
              <p class='font-light'>{{profile?.summary}}</p>
            </div>
          </div>
        </div>
        <!-- <div dangerouslySetInnerHTML={{ __html: introVideo }} /> -->

        <div class='flex flex-col gap-12 mt-6'>
          <div class="flex flex-col gap-2">
            <div class="flex flex-row justify-between items-center">
              <h4 class='font-bold text-lg'>Work Experience</h4>
              <button @click="navigateTo('/developer/profile/work-experience')">Edit</button>
            </div>
            <div class="w-full flex flex-col gap-6 justify-between">
              <div v-for="(item, index) in profile?.work_experience" :key="index" class="w-full flex flex-col">
                <div class="card w-full bg-base-100 shadow">
                  <div class="card-body">
                    <div class="flex flex-row justify-between items-centers">
                      <div>
                        <h4 class="card-title">{{ item?.companyName }}</h4>
                        <p class="font-light">{{ item?.position }}</p>
                      </div>
                      <div class="font-light text-sm">{{ item?.period?.dateFrom }} - {{ item?.period?.dateTo }}</div>
                    </div>

                    <div>
                      <div>{{ item?.summary }}</div>
                    </div>

                    <div class="flex items-center">
                      <div
                        v-for="skill in item?.skills"
                        :key="skill"
                      >
                        <div class="badge badge-primary">{{ skill }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- <TechnicalAssessment /> -->
        </div>
      </div>
    </div>
  </div>
</template>
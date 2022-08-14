<script setup>
  import Countries from "@/utils/countries"
  import CountriesCode from "@/utils/countriesCode"
  import useProfile from "@/composables/useProfile.ts"
  const config = useRuntimeConfig()
  const supabase = useSupabaseClient()
  const { profile, userEmail } = useProfile()

  let isSubmitting = ref(false)
  let profilePhoto = ref("")
  profilePhoto.value = profile?._rawValue?.profile_photo

  const submitHandler = async (value) => {
    isSubmitting.value = true
    let photo

    if (profile?._rawValue?.profile_photo) {
      const {data} = await supabase
        .storage
        .from('photos')
        .update(`${profile?._rawValue?.id}/`, profilePhoto.value, {
          cacheControl: '3600',
          upsert: false
        })
        photo = data?.Key
        profilePhoto.value = data?.Key

    } else {
      const {data} = await supabase.storage
        .from("photos")
        .upload(`${profile?._rawValue?.id}/` + profilePhoto.value?.name, profilePhoto.value)
      photo = data?.Key
      profilePhoto.value = data?.Key
    }

    const { error } = await supabase
      .from('profile')
      .update([{
        first_name: value?.first_name,
        last_name: value?.last_name,
        email: value?.email,
        profile_photo: photo,
        phone: {
          mobile: value?.phone,
          code: value?.countryCode
        },
        expected_salary: {
          amount: value?.expected_salary,
          currency: "USD"
        },
        availability: value?.availability,
        location: value?.country,
        github_url: value?.githubUrl,
        linkedin_url: value?.linkedinUrl,
        actively_looking: value?.actively_looking,
        summary: value?.summary
      }])
      .eq('email', userEmail)

    isSubmitting.value = false
  }

  const handleUpload = async (event) => {
    if (event.target.files) {
      profilePhoto.value = event.target.files[0]
    }
  }
</script>

<template>
  <div class='w-full max-w-2xl m-auto flex flex-col justify-center gap-4'>
    <pre>{{ profile.profile_photo }}</pre>
    <div class="w-full flex flex-row justify-between">
      <div class='flex flex-col items-start gap-1'>
        <h4 class='font-bold text-2xl'>Update your Profile</h4>
        <span class='text-body-dark text-md'>Fill in your details.</span>
      </div>

      <div v-if="!showForm">
        <button
          class='bg-blue-500 text-white px-4 rounded flex items-center justify-center h-[40px]'
          @click="navigateTo('/developer/profile/work-experience')"
        >
          Add Work Experience
        </button>
      </div>
    </div>

    <div>
      
      <!-- <img
        :src={config.SUPABASE_IMAGE_PATH}
        :width="100"
      /> -->
      <div class="flex justify-center">
        <div class="mb-3 w-96">
          <label for="profilePhoto" class="form-label inline-block mb-2 text-gray-700">Profile Photo</label>
          <input class="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="profilePhoto"
            @change="handleUpload"
          >
        </div>
      </div>
    </div>

    <div class='w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <FormKit
        type="form"
        @submit="submitHandler"
        submit-label="Submit"
        v-model="profile"
        :actions="false"
      >
        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="text"
              label="First Name"
              name="first_name"
              validation="required"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="text"
              label="Last Name"
              name="last_name"
              validation="required"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-2">
          <div>
            <FormKit
              type="select"
              label="Country Code"
              name="countryCode"
              :options="CountriesCode"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="text"
              label="Mobile Number"
              name="phone"
              validation="required"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="select"
              label="Country"
              name="location"
              :options="Countries"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="email"
              name="email"
              label="Email Address"
              validation="required|email"
              disabled
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="url"
              name="linkedin_url"
              label="Linkedin Url"
              validation="required|url"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="url"
              name="github_url"
              label="Github Url"
              validation="required|url"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="number"
              name="availability"
              label="Availability (weeks)"
              validation="required"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="text"
              name="expected_salary"
              label="Expected Salary (USD)"
              validation="required"
              :value="profile?.expected_salary?.amount"
            />
          </div>
        </div>

        <div>
          <FormKit
            type="textarea"
            name="summary"
            label="Executive Summary"
            validation="required"
            rows="10"
          />
        </div>

        <div class="mb-4">
          <FormKit
            name="actively_looking"
            type="checkbox"
            label="Open to Work"
          />
        </div>

         <div class="mb-4">
          <button
            :disabled="isSubmitting"
            type="submit"
            class="bg-blue-500 rounded flex items-center justify-center h-[40px] w-full text-white px-3"
          >
            {{ isSubmitting ? "Submitting..." : "Submit" }}
          </button>
        </div>
      </FormKit>
    </div>
  </div>
</template>
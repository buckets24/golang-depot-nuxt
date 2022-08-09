<script>
  import Countries from "@/utils/countries"
  import CountriesCode from "@/utils/countriesCode"
  
  export default {
    data () {
      return {
        emailAddress: '',
      }
    },
  }
</script>

<script setup>
  const supabase = useSupabaseClient()

  const submitHandler = async (value) => {
    const response = await supabase
      .from('profile')
      .insert([{
        full_name: `${value?.firstName} ${value.lastName}`,
        email: value?.email,
        mobile_no: `${value?.countryCode}${value?.mobile_no}`,
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

    console.log(response, 'response')
  }

</script>

<template>
  <div class='w-full max-w-2xl m-auto flex flex-col justify-center items-center gap-4'>
    <div class='flex flex-col items-center gap-1'>
      <h4 class='font-bold text-2xl'>Create your Profile</h4>
      <span class='text-body-dark text-md'>Fill in your details.</span>
    </div>

    <div class='w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <FormKit
        type="form"
        @submit="submitHandler"
        submit-label="Submit"
      >
        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="text"
              label="First Name"
              name="firstName"
              validation="required"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="text"
              label="Last Name"
              name="lastName"
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
              name="mobile_no"
              validation="required"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-4">
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
              type="email"
              name="email"
              label="Email Address"
              v-model="emailAddress"
              validation="required|email"
            />
          </div>
        </div>

        <div class="flex flex-row justify-between gap-4">
          <div class="flex-1">
            <FormKit
              type="url"
              name="linkedinUrl"
              label="Linkedin Url"
              validation="required|url"
            />
          </div>
          <div class="flex-1">
            <FormKit
              type="url"
              name="githubUrl"
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
          
       <!-- <pre wrap>{{ value }}</pre> -->

      </FormKit>
    </div>
  </div>
</template>
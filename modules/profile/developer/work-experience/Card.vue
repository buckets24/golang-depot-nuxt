<script>
  export default {
    props: {
      item: Object,
      index: Number,
      deleteIndex: Number,
      select: Function,
      handleDelete: Function,
      submitDeleteHandler: Function
    }
  }
</script>

<template>
  <div>
    <div class="flex justify-between w-full">
      <button
        @click="select({
          companyName: item?.companyName,
          dateTo: item?.period?.dateTo,
          dateFrom: item?.period?.dateFrom,
          position: item?.position,
          skills: item?.skills,
          summary: item?.summary,
          country: item?.country
        }, index)"
      >
        Edit
      </button>
      <div v-if="index === deleteIndex" class="flex gap-2">
        <button
          @click="submitDeleteHandler(index)"
        >
          Ok
        </button>
         <button
          @click="handleDelete(false, null)"
        >
          Cancel
        </button>
      </div>
      <div v-else>
        <button
          @click="handleDelete(true, index)"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div>{{ item?.companyName }}</div>
        <div>{{ item?.position }}</div>
      </div>
      <div>{{ item?.period?.dateFrom }} - {{ item?.period?.dateTo }}</div>
    </div>
    <div>
      {{ item?.summary }}
    </div>
    <div class="flex items-center">
      <div
        v-for="skill in item?.skills"
        :key="skill"
      >
        <div>{{ skill }}</div>
      </div>
    </div>
  </div>
</template>
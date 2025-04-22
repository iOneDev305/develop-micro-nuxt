<template>
  <div>
    <h1>Redirecting to Analytics...</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

onMounted(() => {
  navigateTo('/feature-a')
})
</script> 
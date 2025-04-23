<template>
    <div>
      <RemoteFeature feature="admin" />
    </div>
  </template>
  
  <script setup>
  import RemoteFeature from '~/components/RemoteFeature.vue'
  
  definePageMeta({
    layout: 'default'
  })
  </script> 
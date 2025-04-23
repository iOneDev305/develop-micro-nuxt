<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
    <div v-else-if="error" class="text-red-500 text-center p-4">
      {{ error }}
    </div>
    <div v-else>
      <component :is="remoteComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  feature: {
    type: String,
    required: true
  }
})

const loading = ref(true)
const error = ref(null)
const remoteComponent = ref(null)

onMounted(async () => {
  try {
    // Load the remote feature based on the feature prop
    if (props.feature === 'analytics') {
      // Import the analytics page directly from feature-analytics
      const module = await import('../../feature-analytics/pages/index.vue')
      remoteComponent.value = module.default
    }else if (props.feature === 'admin') {
      const module = await import('../../feature-admin/pages/index.vue')
      remoteComponent.value = module.default
    } else if (props.feature === 'user') {
      const module = await import('../../feature-user/pages/index.vue')
      remoteComponent.value = module.default
    }
    loading.value = false
  } catch (err) {
    console.error('Error loading feature:', err)
    error.value = `Failed to load ${props.feature}: ${err.message}`
    loading.value = false
  }
})
</script> 
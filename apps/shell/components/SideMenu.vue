<template>
  <div class="h-full w-64 bg-white dark:bg-gray-800 shadow-lg">
    <div class="p-4">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Dashboard</h2>
      <nav class="space-y-2">
        <NuxtLink 
          to="/analytics" 
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/analytics' }"
        >
          <Icon name="heroicons:chart-bar" class="h-5 w-5 mr-2" />
          Analytics
        </NuxtLink>
        <NuxtLink 
          to="/users" 
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === '/users' }"
        >
          <Icon name="heroicons:users" class="h-5 w-5 mr-2" />
          Users
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script> 
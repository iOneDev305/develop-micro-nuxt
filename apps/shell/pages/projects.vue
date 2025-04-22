<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
      <div class="flex items-center space-x-4">
        <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Project
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 6" :key="i" class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <Icon name="heroicons:folder" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Project {{ i }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Last updated 2 days ago</p>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">Progress</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">{{ Math.floor(Math.random() * 100) }}%</span>
            </div>
            <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div class="h-2 bg-indigo-600 rounded-full" :style="{ width: `${Math.floor(Math.random() * 100)}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 
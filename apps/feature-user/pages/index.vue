<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
      <div class="flex items-center space-x-4">
        <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add User
        </button>
      </div>
    </div>

    <!-- User List -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="flex items-center space-x-4">
              <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600"></div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">John Doe</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Icon name="heroicons:pencil-square" class="h-5 w-5" />
              </button>
              <button class="p-2 text-red-500 hover:text-red-700">
                <Icon name="heroicons:trash" class="h-5 w-5" />
              </button>
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
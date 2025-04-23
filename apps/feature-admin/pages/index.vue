<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
      <div class="flex items-center space-x-4">
        <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add User
        </button>
      </div>
    </div>

    <!-- Debug Info (Development Only) -->
    <div v-if="token" class="bg-gray-100 p-4 rounded-md">
      <p class="text-sm font-mono break-all">
        <strong>Current Token:</strong> {{ token }}
      </p>
    </div>

    <!-- User Table -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div class="p-6">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Admin User</td>
              <td class="px-6 py-4 whitespace-nowrap">admin@example.com</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <span class="sr-only">Edit</span>
                  ✏️
                </button>
                <button class="p-2 text-red-500 hover:text-red-700">
                  <span class="sr-only">Delete</span>
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuth } from '../../shell/composables/useAuth';

const { token, user } = useAuth();

onMounted(() => {
  console.log('Admin Feature - Current Token:', token.value);
  console.log('Admin Feature - Current User:', user.value);
});
</script>
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
            <tr v-for="user in paginatedUsers" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <Icon name="heroicons:pencil-square" class="h-5 w-5" />
                </button>
                <button class="p-2 text-red-500 hover:text-red-700">
                  <Icon name="heroicons:trash" class="h-5 w-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Pagination Controls -->
        <div class="flex justify-end mt-4 space-x-2">
          <button
            class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            Prev
          </button>
          <span class="px-3 py-1">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
definePageMeta({
  layout: 'default'
})

// Static user data
const users = ref([
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Williams', email: 'bob.williams@example.com' },
  { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com' },
  { id: 6, name: 'Diana Prince', email: 'diana.prince@example.com' },
  { id: 7, name: 'Ethan Hunt', email: 'ethan.hunt@example.com' },
  { id: 8, name: 'Fiona Gallagher', email: 'fiona.gallagher@example.com' },
  { id: 9, name: 'George Miller', email: 'george.miller@example.com' },
  { id: 10, name: 'Hannah Lee', email: 'hannah.lee@example.com' }
])

const pageSize = 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(users.value.length / pageSize))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return users.value.slice(start, start + pageSize)
})
</script>
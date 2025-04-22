<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="hidden md:flex md:w-64">
        <Sidebar />
      </div>

      <!-- Mobile sidebar toggle -->
      <div
        class="md:hidden fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between h-16 px-4">
          <button @click="isSidebarOpen = !isSidebarOpen"
            class="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            <Icon :name="isSidebarOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
          </button>
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">Micro Dashboard</h1>
          <ColorModeButton />
        </div>
      </div>

      <!-- Mobile sidebar overlay -->
      <div v-if="isSidebarOpen" class="md:hidden fixed inset-0 z-40 bg-gray-600 bg-opacity-75"
        @click="isSidebarOpen = false"></div>

      <!-- Mobile sidebar -->
      <div v-if="isSidebarOpen"
        class="md:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out">
        <Sidebar />
      </div>

      <!-- Main content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Desktop Header -->
        <header
          class="hidden md:flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">Micro Dashboard</h1>
          <ColorModeButton />
        </header>

        <main class="flex-1 overflow-y-auto p-4 md:p-6">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import ColorModeButton from '~/components/ColorModeButton.vue'
import SideMenu from '~/components/SideMenu.vue'

const isSidebarOpen = ref(false)
</script>

<style>
/* Add smooth transitions for mobile sidebar */
.md\:hidden {
  transition: transform 0.3s ease-in-out;
}

.md\:hidden[style*="transform"] {
  transition: transform 0.3s ease-in-out;
}
</style>
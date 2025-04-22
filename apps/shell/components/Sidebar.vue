<template>
  <div class="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
    <div class="flex flex-col h-full">
      <!-- Logo Section -->
      <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Icon name="heroicons:chart-bar" class="h-5 w-5 text-white" />
          </div>
          <h1 class="text-lg font-bold text-gray-900 dark:text-white">Micro Dashboard</h1>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div class="px-3 mb-2">
          <h2 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Main Menu
          </h2>
        </div>
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
          :class="[
            isActive(item.href)
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 shadow-sm'
              : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
          ]"
        >
          <Icon
            :name="item.icon"
            class="mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200"
            :class="[
              isActive(item.href)
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
            ]"
          />
          {{ item.name }}
          <span
            v-if="item.badge"
            class="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
            :class="[
              isActive(item.href)
                ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            ]"
          >
            {{ item.badge }}
          </span>
        </NuxtLink>

        <div class="px-3 mt-6 mb-2">
          <h2 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Settings
          </h2>
        </div>
        <NuxtLink
          v-for="item in settings"
          :key="item.name"
          :to="item.href"
          class="group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
          :class="[
            isActive(item.href)
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 shadow-sm'
              : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
          ]"
        >
          <Icon
            :name="item.icon"
            class="mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200"
            :class="[
              isActive(item.href)
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
            ]"
          />
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- User Profile -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex items-center">
          <div class="relative">
            <img
              class="h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-700"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
            <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-700"></span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
          <button class="ml-auto p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
            <Icon name="heroicons:ellipsis-horizontal" class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Analytics', href: '/analytics', icon: 'heroicons:chart-bar', badge: 'New' },
  { name: 'Users', href: '/users', icon: 'heroicons:users' },
  { name: 'Projects', href: '/projects', icon: 'heroicons:folder' },
  { name: 'Calendar', href: '/calendar', icon: 'heroicons:calendar' },
]

const settings = [
  { name: 'Settings', href: '/settings', icon: 'heroicons:cog-6-tooth' },
  { name: 'Help', href: '/help', icon: 'heroicons:question-mark-circle' },
]

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
.router-link-active {
  @apply bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 shadow-sm;
}

.router-link-active .icon {
  @apply text-indigo-600 dark:text-indigo-400;
}

/* Custom scrollbar for the navigation */
nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.5);
}

.dark nav::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.3);
}

.dark nav::-webkit-scrollbar-thumb:hover {
  background: rgba(75, 85, 99, 0.5);
}
</style> 
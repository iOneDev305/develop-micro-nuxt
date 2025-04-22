<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400"
    :title="colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon
      :name="colorMode === 'dark' ? 'heroicons:sun' : 'heroicons:moon'"
      class="h-5 w-5"
    />
  </button>
</template>

<script setup>
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 
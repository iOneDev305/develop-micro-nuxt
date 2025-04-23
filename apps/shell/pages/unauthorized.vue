<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
    <div class="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg text-center">
      <div class="mb-8">
        <div class="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 class="text-center text-3xl font-bold text-gray-900">
          Unauthorized Access
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          You don't have permission to access this page.
        </p>
      </div>
      
      <div class="flex justify-center space-x-4">
        <button
          @click="goBack"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Go Back
        </button>
        <router-link
          to="/"
          class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go to Home
        </router-link>
      </div>
    </div>
  </div>
</template> 
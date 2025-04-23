<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">User Dashboard</h1>
    </div>

    <!-- Debug Info (Development Only) -->
    <div v-if="token" class="bg-gray-100 p-4 rounded-md">
      <p class="text-sm font-mono break-all">
        <strong>Current Token:</strong> {{ token }}
      </p>
    </div>

    <!-- User Content -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="bg-indigo-100 rounded-full p-3">
              👤
            </div>
            <div>
              <h3 class="text-lg font-medium">Welcome, {{ user?.username }}</h3>
              <p class="text-sm text-gray-500">Role: {{ user?.role }}</p>
            </div>
          </div>
          
          <div class="border-t pt-4">
            <h4 class="font-medium mb-2">Your Permissions:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li v-for="permission in user?.permissions" :key="permission" class="text-sm text-gray-600">
                {{ permission }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuth } from '../../shell/composables/useAuth';

const { token, user } = useAuth();

onMounted(() => {
  console.log('User Feature - Current Token:', token.value);
  console.log('User Feature - Current User:', user.value);
});
</script> 
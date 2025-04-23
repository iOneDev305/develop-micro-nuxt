<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
      <div class="flex space-x-4">
        <select
          v-model="selectedTimeRange"
          class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <!-- <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option> -->
        </select>
        <button
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Icon name="heroicons:arrow-down-tray" class="h-4 w-4 mr-2" />
          Export
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Stats Cards -->
      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="heroicons:users" class="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Total Users
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                    {{ formatNumber(stats.totalUsers) }}
                  </div>
                  <div class="ml-2 flex items-baseline text-sm font-semibold" :class="stats.userGrowth >= 0 ? 'text-green-600' : 'text-red-600'">
                    <Icon :name="stats.userGrowth >= 0 ? 'heroicons:arrow-trending-up' : 'heroicons:arrow-trending-down'" class="h-4 w-4" />
                    <span class="ml-1">{{ Math.abs(stats.userGrowth) }}%</span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="heroicons:chart-bar" class="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Revenue
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                    ${{ formatNumber(stats.revenue) }}
                  </div>
                  <div class="ml-2 flex items-baseline text-sm font-semibold" :class="stats.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'">
                    <Icon :name="stats.revenueGrowth >= 0 ? 'heroicons:arrow-trending-up' : 'heroicons:arrow-trending-down'" class="h-4 w-4" />
                    <span class="ml-1">{{ Math.abs(stats.revenueGrowth) }}%</span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="heroicons:clock" class="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Avg. Session
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                    {{ stats.avgSession }}
                  </div>
                  <div class="ml-2 flex items-baseline text-sm font-semibold" :class="stats.sessionGrowth >= 0 ? 'text-green-600' : 'text-red-600'">
                    <Icon :name="stats.sessionGrowth >= 0 ? 'heroicons:arrow-trending-up' : 'heroicons:arrow-trending-down'" class="h-4 w-4" />
                    <span class="ml-1">{{ Math.abs(stats.sessionGrowth) }}%</span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Icon name="heroicons:shopping-cart" class="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  Conversion Rate
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-2xl font-semibold text-gray-900 dark:text-white">
                    {{ stats.conversionRate }}%
                  </div>
                  <div class="ml-2 flex items-baseline text-sm font-semibold" :class="stats.conversionGrowth >= 0 ? 'text-green-600' : 'text-red-600'">
                    <Icon :name="stats.conversionGrowth >= 0 ? 'heroicons:arrow-trending-up' : 'heroicons:arrow-trending-down'" class="h-4 w-4" />
                    <span class="ml-1">{{ Math.abs(stats.conversionGrowth) }}%</span>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Traffic Chart -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Traffic Overview</h2>
          <div class="flex space-x-2">
            <button
              v-for="type in ['visitors', 'pageviews']"
              :key="type"
              @click="selectedTrafficType = type"
              class="px-3 py-1 text-sm rounded-md"
              :class="selectedTrafficType === type ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              {{ type === 'visitors' ? 'Visitors' : 'Pageviews' }}
            </button>
          </div>
        </div>
        <div class="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
        </div>
      </div>

      <!-- Revenue Chart -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Revenue Overview</h2>
          <div class="flex space-x-2">
            <button
              v-for="type in ['daily', 'monthly']"
              :key="type"
              @click="selectedRevenueType = type"
              class="px-3 py-1 text-sm rounded-md"
              :class="selectedRevenueType === type ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              {{ type === 'daily' ? 'Daily' : 'Monthly' }}
            </button>
          </div>
        </div>
        <div class="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Chart will be displayed here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuth } from '../../shell/composables/useAuth';
const selectedTimeRange = ref('week')
const selectedTrafficType = ref('visitors')
const selectedRevenueType = ref('daily')

const stats = ref({
  totalUsers: 12345,
  userGrowth: 12,
  revenue: 45231,
  revenueGrowth: 8,
  avgSession: '4m 32s',
  sessionGrowth: -2,
  conversionRate: 2.4,
  conversionGrowth: 0.8
})

const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

onMounted(() => {
  console.log('User Feature - Current Token:', token.value);
  console.log('User Feature - Current User:', user.value);
});
</script> 
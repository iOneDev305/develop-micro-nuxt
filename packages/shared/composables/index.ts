import { ref } from 'vue'

export const useLoading = () => {
  const isLoading = ref(false)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  }
}

export const useNotification = () => {
  const showNotification = ref(false)
  const notificationMessage = ref('')
  const notificationType = ref<'success' | 'error' | 'warning' | 'info'>('info')

  const notify = (
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info'
  ) => {
    notificationMessage.value = message
    notificationType.value = type
    showNotification.value = true

    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  }

  return {
    showNotification,
    notificationMessage,
    notificationType,
    notify,
  }
} 
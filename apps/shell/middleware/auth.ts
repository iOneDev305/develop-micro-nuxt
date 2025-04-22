export default defineNuxtRouteMiddleware((to) => {
  // This is a placeholder for your actual authentication logic
  // You should replace this with your real authentication check
  const isAuthenticated = true // Replace with your actual auth check

  if (!isAuthenticated) {
    return navigateTo('/')
  }
}) 
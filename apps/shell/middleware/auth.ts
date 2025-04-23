import { useAuth } from '../composables/useAuth';

export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth();
  
  // Don't check token on login page
  if (to.path === '/login') {
    return;
  }

  // If no token found, redirect to login
  if (!token.value) {
    return navigateTo('/login');
  }
}); 
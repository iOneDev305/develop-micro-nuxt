import { useAuth } from '../composables/useAuth';

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  // Public routes that don't require authentication
  const publicRoutes = ['/login', '/register', '/forgot-password'];
  
  if (!isAuthenticated.value && !publicRoutes.includes(to.path)) {
    // Save the intended destination for redirect after login
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`);
  }

  // Role-based route protection
  if (to.meta.requiresRole) {
    const { hasRole } = useAuth();
    const requiredRole = to.meta.requiresRole as 'admin' | 'user' | 'analyst';
    
    if (!hasRole(requiredRole)) {
      return navigateTo('/unauthorized');
    }
  }
}); 
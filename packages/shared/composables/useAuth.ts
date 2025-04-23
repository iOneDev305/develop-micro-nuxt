import { ref, computed } from 'vue';

interface User {
  id: string;
  username: string;
  role: 'admin' | 'user' | 'analyst';
  permissions: string[];
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const TOKEN_KEY = 'auth_token';

const saveToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(TOKEN_KEY, token);
  }
};

const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};

const authState = ref<AuthState>({
  user: null,
  token: getToken(),
  isAuthenticated: false,
});

export const useAuth = () => {
  const setUser = (user: User | null) => {
    authState.value.user = user;
    authState.value.isAuthenticated = !!user;
  };

  const setToken = (token: string) => {
    saveToken(token);
    authState.value.token = token;
  };

  const logout = () => {
    authState.value.user = null;
    authState.value.token = null;
    authState.value.isAuthenticated = false;
    removeToken();
  };

  const hasPermission = (permission: string) => {
    return authState.value.user?.permissions.includes(permission) ?? false;
  };

  const hasRole = (role: 'admin' | 'user' | 'analyst') => {
    return authState.value.user?.role === role;
  };

  const isAdmin = computed(() => hasRole('admin'));
  const isUser = computed(() => hasRole('user'));
  const isAnalyst = computed(() => hasRole('analyst'));

  return {
    user: computed(() => authState.value.user),
    token: computed(() => authState.value.token),
    isAuthenticated: computed(() => authState.value.isAuthenticated),
    setUser,
    setToken,
    logout,
    hasPermission,
    hasRole,
    isAdmin,
    isUser,
    isAnalyst,
  };
}; 
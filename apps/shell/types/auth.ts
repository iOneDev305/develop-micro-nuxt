export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user' | 'analyst';
  permissions: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  username: string;
  password: string;
} 
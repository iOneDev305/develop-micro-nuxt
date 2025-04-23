import { saveToken } from './tokenManager';
import { config, getApiUrl } from './config';
import type { LoginResponse, LoginCredentials, User } from '../types/auth';

// Mock user data for demonstration (replace with actual API integration)
const MOCK_USERS: Record<string, User> = {
  admin: {
    id: '1',
    username: 'admin',
    role: 'admin',
    permissions: ['manage_users', 'view_analytics', 'manage_content'],
  },
  user: {
    id: '2',
    username: 'user',
    role: 'user',
    permissions: ['view_content'],
  },
  analyst: {
    id: '3',
    username: 'analyst',
    role: 'analyst',
    permissions: ['view_analytics', 'export_data'],
  },
};

// Static admin user
const ADMIN_USER: User = {
  id: '1',
  username: 'admin',
  role: 'admin',
  permissions: ['manage_users', 'view_analytics', 'manage_content'],
};

// Static token - this would normally come from your backend
const STATIC_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ';

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Check static credentials
  if (credentials.username === 'admin' && credentials.password === '1234') {
    return {
      token: STATIC_TOKEN,
      user: ADMIN_USER,
    };
  }

  throw new Error('Invalid username or password. Use admin/1234');
}; 
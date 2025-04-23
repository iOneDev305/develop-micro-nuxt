import { saveToken } from './tokenManager';
import { config, getApiUrl } from './config';

interface LoginResponse {
  token: string;
  // Add other response fields if your API returns additional data
}

interface LoginCredentials {
  username: string;
  password: string;
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Create FormData
  const formData = new FormData();
  formData.append('username', credentials.username);
  formData.append('password', credentials.password);

  // Log the request details
  console.log('🚀 Login Request:', {
    url: getApiUrl('/backends/adminusers/login'),
    method: 'POST',
    formData: {
      username: formData.get('username'),
      password: '********' // Hide password in logs
    },
    timestamp: new Date().toISOString()
  });

  try {
    // Make sure we're not sending any Content-Type header - let the browser set it with boundary
    const response = await fetch(getApiUrl('/backends/adminusers/login'), {
      method: 'POST',
      headers: {
        'X-API-KEY': config.apiKey,
        // Remove Content-Type header to let browser handle it for FormData
      },
      body: formData,
    });

    // Log the raw response for debugging
    console.log('🔍 Raw Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      url: response.url
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Login Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        url: response.url,
        timestamp: new Date().toISOString()
      });
      throw new ApiError(response.status, errorText || 'Login failed');
    }

    const data = await response.json();
    
    // Log successful response
    console.log('✅ Login Success:', {
      status: response.status,
      tokenReceived: !!data.token,
      timestamp: new Date().toISOString(),
      url: response.url,
      headers: {
        'content-type': response.headers.get('content-type'),
        'x-response-time': response.headers.get('x-response-time')
      }
    });

    // Log response data
    console.log('📝 Response Data:', {
      ...data,
      token: data.token ? `${data.token.substring(0, 10)}...` : undefined // Show only first 10 chars of token
    });
    
    if (!data.token) {
      throw new Error('No token received in response');
    }

    // Save token with default expiration (60 minutes)
    saveToken(data.token);
    
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    console.error('💥 Unexpected Error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
    throw new Error('Login failed. Please try again.');
  }
}; 
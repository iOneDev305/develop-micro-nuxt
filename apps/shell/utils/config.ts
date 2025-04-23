export const config = {
  baseURL: process.env.BASE_URL || 'http://192.168.89.69',
  apiKey: process.env.API_KEY || 'lksjju872dds1rfv5',
  apiPrefix: '/api'
} as const;

export const getApiUrl = (endpoint: string): string => {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${config.baseURL}${config.apiPrefix}${path}`;
}; 
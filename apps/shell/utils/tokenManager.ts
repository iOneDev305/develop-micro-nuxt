/**
 * Token manager utility for handling authentication tokens with expiration time
 */

const TOKEN_KEY = 'auth_token';

/**
 * Save token with expiration time to localStorage
 * @param token - The token to save
 * @param expirationInMinutes - Token expiration time in minutes (default: 60 minutes)
 */
export const saveToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(TOKEN_KEY, token);
  }
};

/**
 * Get token if it exists and hasn't expired
 * @returns The token if valid, null otherwise
 */
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

/**
 * Check if token exists and is still valid
 * @returns boolean indicating if token is valid
 */
export const isTokenValid = (): boolean => {
  return getToken() !== null;
};

/**
 * Remove token from localStorage
 */
export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};

/**
 * Get token expiration time in milliseconds
 * @returns number of milliseconds until token expires, or null if no token exists
 */
export const getTokenExpirationTime = (): number | null => {
  const tokenData = localStorage.getItem('authToken');
  if (!tokenData) return null;

  try {
    const { expiresAt } = JSON.parse(tokenData) as TokenData;
    const timeLeft = expiresAt - Date.now();
    return timeLeft > 0 ? timeLeft : null;
  } catch (error) {
    return null;
  }
}; 
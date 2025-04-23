/**
 * Token manager utility for handling authentication tokens with expiration time
 */

interface TokenData {
  token: string;
  expiresAt: number;
}

/**
 * Save token with expiration time to localStorage
 * @param token - The token to save
 * @param expirationInMinutes - Token expiration time in minutes (default: 60 minutes)
 */
export const saveToken = (token: string, expirationInMinutes: number = 60): void => {
  const expiresAt = Date.now() + expirationInMinutes * 60 * 1000;
  const tokenData: TokenData = {
    token,
    expiresAt,
  };
  localStorage.setItem('authToken', JSON.stringify(tokenData));
};

/**
 * Get token if it exists and hasn't expired
 * @returns The token if valid, null otherwise
 */
export const getToken = (): string | null => {
  const tokenData = localStorage.getItem('authToken');
  if (!tokenData) return null;

  try {
    const { token, expiresAt } = JSON.parse(tokenData) as TokenData;
    if (Date.now() > expiresAt) {
      removeToken();
      return null;
    }
    return token;
  } catch (error) {
    removeToken();
    return null;
  }
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
  localStorage.removeItem('authToken');
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
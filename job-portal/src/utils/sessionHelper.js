// Session storage helper functions

/**
 * Set a value in session storage
 * @param {string} key - The key to store the value under
 * @param {any} value - The value to store
 */
export const setSessionItem = (key, value) => {
    try {
      const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting session storage item:', error);
    }
  };
  
  /**
   * Get a value from session storage
   * @param {string} key - The key to retrieve the value for
   * @param {boolean} parseJson - Whether to parse the value as JSON
   * @returns {any} The stored value or null if not found
   */
  export const getSessionItem = (key, parseJson = true) => {
    try {
      const item = sessionStorage.getItem(key);
      
      if (item === null) {
        return null;
      }
      
      if (parseJson) {
        try {
          return JSON.parse(item);
        } catch (e) {
          // If it's not valid JSON, return as is
          return item;
        }
      }
      
      return item;
    } catch (error) {
      console.error('Error getting session storage item:', error);
      return null;
    }
  };
  
  /**
   * Remove an item from session storage
   * @param {string} key - The key to remove
   */
  export const removeSessionItem = (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing session storage item:', error);
    }
  };
  
  /**
   * Clear all items from session storage
   */
  export const clearSession = () => {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing session storage:', error);
    }
  };
  
  /**
   * Check if the user session is valid
   * @returns {boolean} Whether the session is valid
   */
  export const isSessionValid = () => {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        return false;
      }
      
      // In a real application, you would also check token expiration
      // For demo purposes, we'll just check if it exists
      return true;
    } catch (error) {
      console.error('Error checking session validity:', error);
      return false;
    }
  };
  
  export default {
    setSessionItem,
    getSessionItem,
    removeSessionItem,
    clearSession,
    isSessionValid,
  };
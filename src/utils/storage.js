// Constants
const COOKIE_EXPIRY_DAYS = 180;

// Save data to cookies with improved handling
export const saveToCookies = (key, data, daysToExpire = COOKIE_EXPIRY_DAYS) => {
  try {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + daysToExpire);

    document.cookie = `${key}=${encodeURIComponent(
      JSON.stringify(data)
    )};expires=${expiryDate.toUTCString()};path=/;SameSite=Strict`;
  } catch (error) {
    console.error(`Error saving ${key} to cookies:`, error);
  }
};

// Load data from cookies with robust parsing
export const loadFromCookies = (key) => {
  try {
    const cookieMatch = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${key}=`));

    if (cookieMatch) {
      return JSON.parse(
        decodeURIComponent(cookieMatch.substring(key.length + 1))
      );
    }
    return null;
  } catch (error) {
    console.error(`Error loading ${key} from cookies:`, error);
    return null;
  }
};

// Save data to localStorage
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Load data from localStorage
export const loadFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return null;
  }
};

// Comprehensive storage solution that tries localStorage first, then cookies
export const saveData = (key, data, daysToExpire = COOKIE_EXPIRY_DAYS) => {
  saveToLocalStorage(key, data);
  saveToCookies(key, data, daysToExpire);
};

// Load data from any available source
export const loadData = (key) => {
  return loadFromLocalStorage(key) || loadFromCookies(key);
};

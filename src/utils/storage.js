// Save data to cookies
export const saveToCookies = (key, data, daysToExpire = 180) => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + daysToExpire);

  document.cookie = `${key}=${encodeURIComponent(
    JSON.stringify(data)
  )};expires=${expiryDate.toUTCString()};path=/`;
};

// Load data from cookies
export const loadFromCookies = (key) => {
  try {
    const storedData = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${key}=`));

    if (storedData) {
      return JSON.parse(decodeURIComponent(storedData.split("=")[1]));
    }
    return null;
  } catch (error) {
    console.error(`Error loading ${key} from cookies:`, error);
    return null;
  }
};

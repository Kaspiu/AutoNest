import { useState, useEffect } from "react";
import { saveToCookies, loadFromCookies } from "../utils/storage.js";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return loadFromCookies(key) || initialValue;
  });

  useEffect(() => {
    saveToCookies(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

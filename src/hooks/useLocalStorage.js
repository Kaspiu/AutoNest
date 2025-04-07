import { useState, useEffect } from "react";
import { saveData, loadData } from "../utils/storage";

export function useLocalStorage(key, initialValue) {
  // Initialize state with persisted data or initial value
  const [storedValue, setStoredValue] = useState(() => {
    return loadData(key) || initialValue;
  });

  // Update storage whenever value changes
  useEffect(() => {
    saveData(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

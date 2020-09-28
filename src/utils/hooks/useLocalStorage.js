import { useState } from 'react';
import { LOG_STYLES } from '../constants';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      console.log(
        '%c[INFO] Value successfully retrieved from local storage.',
        LOG_STYLES.info
      );
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      console.log('%c[INFO] Value successfully saved to local storage.', LOG_STYLES.info);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`%c[ERROR] ${error}`, LOG_STYLES.error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

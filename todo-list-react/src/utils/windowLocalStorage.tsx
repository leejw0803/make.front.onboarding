export const setStorageItem = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  const getData = JSON.parse(localStorage.getItem(key) as string);
  return getData;
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

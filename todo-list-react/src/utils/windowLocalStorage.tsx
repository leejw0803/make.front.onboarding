export const setStorageItem = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  let data = JSON.parse(localStorage.getItem(key) as string);
  return data;
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

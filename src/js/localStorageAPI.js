const LOCAL_STORAGE_KEY = 'LS_KEY';

function add(data) {
  const array = getAll();
  array.push(data);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
}

function getAll() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export const localStorageAPI = { add, getAll };

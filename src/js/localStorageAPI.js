function add(data) {
    const array = JSON.parse(localStorage.getItem("LS_KEY")) || [];
    array.push(data);
    localStorage.setItem("LS_KEY", JSON.stringify(array));
} 
export const localStorageAPI = {add};
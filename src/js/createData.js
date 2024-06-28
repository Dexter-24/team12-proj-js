export function createData(evt) {
const data = {};
    new FormData(evt.target).forEach((value, key) => {
        data[key] = value;
    });
    return data;
}
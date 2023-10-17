import Cookies from "js-cookie";

export function storeInCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: 1 });
}

export function mapData(data: any) {
  const mappedData = new Map();
  const mappedDataArray = [];
  for (let i of data) {
    const keys = Object.keys(i);
    keys.forEach((key) => {
      mappedData.set(key, i[key]);
    });
    mappedDataArray.push(mappedData);
  }
  return mappedDataArray;
}

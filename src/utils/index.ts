import Cookies from "js-cookie";

export function storeInCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: 1 });
}

export function mapData(data: any) {
  const mappedData = new Map();
  const keys = Object.keys(data);
  keys.forEach((key) => {
    mappedData.set(key, data[key]);
  });
  console.log(mappedData);
  return mappedData;
}

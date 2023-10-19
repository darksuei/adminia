import Cookies from "js-cookie";

export function storeInCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: 1 });
}

export function logOut() {
  Cookies.remove("token");
  Cookies.remove("tableName");
}

export function getInitValues(obj: any) {
  let arr: any = {};
  Object.keys(obj).forEach((key) => {
    arr[key] = "";
  });
  return arr;
}

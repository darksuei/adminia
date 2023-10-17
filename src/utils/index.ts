import Cookies from "js-cookie";

export function storeInCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: 1 });
}

export function logOut() {
  Cookies.remove("token");
}

import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  //función para borrar el token
  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }

  hasExpired(token) {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000; //expiración
    const currentDate = new Date().getTime(); //Fecha
    //función que devuelve true si el token caduca
    if (currentDate > expireDate) {
      return true;
    }
    return false;
  }
}

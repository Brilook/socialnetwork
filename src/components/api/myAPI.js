import {instans} from "./common-instans";

export const myAPI = {
  getMy() {
    return instans.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMy = false) {
    return instans.post('auth/login', {email, password, rememberMy}).then(response => response.data);
  },
  logOut() {
    return instans.delete('auth/login').then(response => response.data);
  },
}


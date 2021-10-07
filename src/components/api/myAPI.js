import {instans} from "./common-instans";

export const myAPI = {
  getMy() {
    return instans.get(`auth/me`).then(response => response.data);
  }
}


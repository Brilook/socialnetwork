import {instans} from "./common-instans";

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`)
      .then(response => response.data);
  },

}


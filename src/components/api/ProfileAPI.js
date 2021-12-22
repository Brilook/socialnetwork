import {instans} from "./common-instans";

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`)
  },

  getStatus(userId) {
    return instans.get(`profile/status/${userId}`)
      .then(response => response.data);
  },

  updateStatus(status) {
    return instans.put(`profile/status`, {status})
      .then(response => response.data);
  }

}


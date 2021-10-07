import {instans} from "./common-instans";

export const subscriptionAPI = {
  unsubscribe(userId) {
    return instans.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  subscribe(userId) {
    return instans.post(`follow/${userId}`)
      .then(response => {
        return  response.data
      })
  },

}
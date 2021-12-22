import {instans} from "./common-instans";

export const usersAPI = {
  requestUsers(currentPage = 1, pageSize = 10) {
    return instans.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}
import axios from "axios";

export const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '7d512205-7dcf-4362-9774-26ec76988813'},


});


export default instans;
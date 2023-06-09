import api from "../http";

export default class AuthService {
  static async login(email, password) {
    return api.post('/signin', {email, password})
  }

  static async registration(email, password) {
    return api.post('/signup', {email, password})
  }

  static async logout() {
    return api.post('/logout')
  }
}
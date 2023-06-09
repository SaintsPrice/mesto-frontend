import api from "../http";

export default class ProfileService {
  static async editProfile(id) {
    return api.get(`/api/user/me/${id}`)
  }

  static async updateProfile(name, about) {
    return api.patch('/api/user/me', {name, about})
  }

  static async updateAvatar(avatar) {
    return api.patch('/api/user/me/avatar', {avatar})
  }
}
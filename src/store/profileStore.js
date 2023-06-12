import {makeAutoObservable} from 'mobx';
import ProfileService from '../services/ProfileService';

class ProfileStore {
  userProfile = '';

  constructor() {
    makeAutoObservable(this)
  }

  setUserProfile(profile) {
    this.userProfile = profile
  }

  async getUser(userId) {
    try {
      const response = await ProfileService.editProfile(userId)

      this.setUserProfile(response.data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async updateUser(name, about) {
    try {
      const response = await ProfileService.updateProfile(name, about)

      this.setUserProfile(response.data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async updateAvatar(avatar) {
    try {
      const response = await ProfileService.updateAvatar(avatar)

      this.setUserProfile(response.data)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }
}

export default new ProfileStore()
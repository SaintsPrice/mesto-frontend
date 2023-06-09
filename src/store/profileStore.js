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
      console.log(response)

      this.setUserProfile(response.data)
      console.log(this.userProfile)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async updateUser(name, about) {
    try {
      const response = await ProfileService.updateProfile(name, about)
      console.log(response)

      this.setUserProfile(response.data)
      console.log(this.userProfile)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }

  async updateAvatar(avatar) {
    try {
      const response = await ProfileService.updateAvatar(avatar)
      console.log(response)

      this.setUserProfile(response.data)
      console.log(this.userProfile)
    }
    catch(e) {
      console.log(e.response.data.message)
    }
  }
}

export default new ProfileStore()
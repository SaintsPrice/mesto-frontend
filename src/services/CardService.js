import api from "../http";

export default class CardService {
  static async addCard(name, link) {
    return api.post('/api/card', {name, link})
  }

  static async getUsersCard() {
    return api.get('/api/card')
  }

  static async likeCard(cardId) {
    return api.put(`/api/card/${cardId}/likes`)
  }

  static async dislikeCard(cardId) {
    return api.delete(`/api/card/${cardId}/likes`)
  }

  static async deleteCard(cardId) {
    return api.delete(`/api/card/${cardId}`)
  }
}
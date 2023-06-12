import {makeAutoObservable} from 'mobx';
import CardService from '../services/CardService';

class CardStore {
  cards = []

  constructor() {
    makeAutoObservable(this)
  }

  setCards(card) {
    this.cards = []
    this.cards.push(...card)
    this.cards.reverse()
  }

  setNewCard(newCard) {
    this.cards.unshift(newCard)
  }

  async createCard(name, link) {
    const response = await CardService.addCard(name, link)

    this.setNewCard(response.data)
  }

  async getCards() {
    const response = await CardService.getUsersCard()

    this.setCards(response.data)
  }

  async likeCard(cardId) {
    const response = await CardService.likeCard(cardId)

    this.setCards(this.cards
      .map((card) => {
      return card._id === response.data._id ? response.data : card
    })
    .reverse())

  }

  async dislikeCard(cardId) {
    const response = await CardService.dislikeCard(cardId)

    this.setCards(this.cards
      .map((card) => {
      return card._id === response.data._id ? response.data : card
    })
    .reverse())

  }

  async deleteCard(cardId) {
    await CardService.deleteCard(cardId)

    const response = await CardService.getUsersCard()

    this.setCards(response.data)
  }
}

export default new CardStore()
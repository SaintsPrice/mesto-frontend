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

    console.log(response)

    this.setNewCard(response.data)

    console.log(this.cards)
  }

  async getCards() {
    const response = await CardService.getUsersCard()

    console.log(response)

    this.setCards(response.data)

    console.log(this.cards)
  }

  async likeCard(cardId) {
    const response = await CardService.likeCard(cardId)

    this.setCards(this.cards
      .map((card) => {
      return card._id === response.data._id ? response.data : card
    })
    .reverse())

    console.log(response)

  }

  async dislikeCard(cardId) {
    const response = await CardService.dislikeCard(cardId)

    this.setCards(this.cards
      .map((card) => {
      return card._id === response.data._id ? response.data : card
    })
    .reverse())

    console.log(response)

  }

  async deleteCard(cardId) {
    await CardService.deleteCard(cardId)

    const response = await CardService.getUsersCard()

    this.setCards(response.data)
  }
}

export default new CardStore()
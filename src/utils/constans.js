//Поиск переменных для попапа профиля:
export const editPopup = document.querySelector('.profile__edit');
export const formProfileElement = document.querySelector('.popup__form__profile');
export const nameProfile = document.querySelector('.profile__name');
export const captionProfile = document.querySelector('.profile__description');
export const nameInput = document.querySelector('.popup__input__name');
export const captionInput = document.querySelector('.popup__input__caption');

//Поиск переменных для попапа карточек:
export const addPopup = document.querySelector('.profile__add');
export const formCardsElement = document.querySelector('.popup__form__cards');
export const titleInput = document.querySelector('.popup__input__title');
export const linkInput = document.querySelector('.popup__input__link');

export const avatarProfile = document.querySelector('.profile__avatar');
export const formAvatarElement = document.querySelector('.popup__form__avatar');
export const editAvatar = document.querySelector('.profile__avatar__edit');
export const avatarLinkInput = document.querySelector('.popup-avatar__input__link')

export const popupImage = document.querySelector('.popup__image__opened');

import firstImage from '../images/arkhyz.jpg';
import secondImage from '../images/chelyabinsk-oblast.jpg';
import thirdImage from '../images/ivanovo.jpg';
import fouthImage from '../images/kamchatka.jpg';
import fifthImage from '../images/kholmogorsky-rayon.jpg';
import sixImage from '../images/baikal.jpg';
import avatarImage from '../images/image.jpg'

export const user = {
  name: 'Жак-Ив Кусто',
  description: 'Исследователь океана',
  avatar: avatarImage
}

export const data = [
  {
    name: 'Архыз',
    link: firstImage,
    likes: 0
  },
  {
    name: 'Челябинская область',
    link: secondImage,
    likes: 0
  },
  {
    name: 'Иваново',
    link: thirdImage,
    likes: 0
  },
  {
    name: 'Камчатка',
    link: fouthImage,
    likes: 0
  },
  {
    name: 'Холмогорский район',
    link: fifthImage,
    likes: 0
  },
  {
    name: 'Байкал',
    link: sixImage,
    likes: 0
  }
];
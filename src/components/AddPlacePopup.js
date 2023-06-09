import React from "react";
import { useStores } from "../contexts/rootStoreContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const {card} = useStores()

  const[titleValue, setTitleValue] = React.useState('')
  const[linkValue, setLinkValue] = React.useState('')
  function handleTitle(e) {
    setTitleValue(e.target.value)
  }

  function handleLink(e) {
    setLinkValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    card.createCard(titleValue, linkValue)

    props.onClose()
  }

  return (
    <PopupWithForm name="cards" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Новое место">
    <label className="popup__field">
      <input name="popup__title" type="text" placeholder="Название" id="title__input" className="popup__input popup__input__title" minLength="2" maxLength="30" value={titleValue} onChange={handleTitle} required />
       <span className="form__input-error title__input-error"></span>
    </label>
    <label className="popup__field">
     <input name="popup__link" type="url" placeholder="Ссылка на картинку" id="link__input" className="popup__input popup__input__link" value={linkValue} onChange={handleLink} required />
      <span className="form__input-error link__input-error"></span>
    </label>
          </PopupWithForm>
  )
}

export default AddPlacePopup;
import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { useStores } from "../contexts/rootStoreContext";

function EditAvatarPopup(props) {

  const{profile} = useStores()

  const [avatar, setAvatar] = useState('')

  function handleAvatar(e) {
    setAvatar(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    profile.updateAvatar(avatar)
    props.onClose()
  }

  return (
    <PopupWithForm name="avatar" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Обновить аватар">
    <label className="popup__field">
      <input name="popup__link" type="url" placeholder="Ссылка на картинку" id="link__input" className="popup__input popup-avatar__input__link" onChange={handleAvatar} defaultValue="" autoComplete="off" required />
       <span className="form__input-error link__input-error"></span>
    </label>
  </PopupWithForm>
  )
};

export default EditAvatarPopup;
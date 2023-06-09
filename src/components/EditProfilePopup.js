import React from 'react'
import { useStores } from '../contexts/rootStoreContext';
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const {profile} = useStores()

  function handleName(e) {
    setName(e.target.value)
  };

  function handleDescription(e) {
    setDescription(e.target.value)
  };

  function handleSubmit(e) {
    e.preventDefault()
    profile.updateUser(name, description)
    props.onClose()
  }

  return (
    <PopupWithForm name="profile" isOpen={props.isOpen} onClose={props.onClose} title="Редактировать профиль" onSubmit={handleSubmit}>
    <label className="popup__field">
      <input name="popup__name" type="text" placeholder="Имя" id="name__input" className="popup__input popup__input__name" minLength="2" maxLength="40" value={name} onChange={handleName} required />
        <span className="form__input-error name__input-error"></span>
    </label>
    <label className="popup__field">
      <input name="popup__caption" type="text" placeholder="О себе" id="caption__input" className="popup__input popup__input__caption" minLength="2" maxLength="200" value={description} onChange={handleDescription} required />
        <span className="form__input-error caption__input-error"></span>
   </label>
              </PopupWithForm>
  )
};

export default EditProfilePopup;
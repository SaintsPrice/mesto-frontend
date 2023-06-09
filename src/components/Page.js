import React from 'react';
import {observer} from 'mobx-react-lite';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import Card from './Card';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import CardDeletePopup from './CardDeletePopup'
import { useStores } from '../contexts/rootStoreContext';

function Page() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const [selectDeleteCard, setSelectDeleteCard] = React.useState(undefined);
  const {card} = useStores()

  React.useEffect(() => {
    card.getCards()
  }, [])

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true)
}

  function handleEditProfileClick() {
    setProfilePopupOpen(true)
}

  function handleAddPlaceClick() {
    setPlacePopupOpen(true)
}

  function handleDeleteCardClick() {
  setDeleteCardPopupOpen(true)
}

  function closeAllPopups() {
    setAvatarPopupOpen(false)
    setProfilePopupOpen(false)
    setPlacePopupOpen(false)
    setDeleteCardPopupOpen(false)
    setSelectedCard(undefined)
  }

  function handleAddPlaceSubmit(newCard) {
    setCards([newCard, ...cards])
  }

  console.log(card.cards)

  return (
    <>
      
      <Header />

      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick}>
        {
          card.cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={setSelectedCard} onCardDeleteClick={setSelectDeleteCard} onDeleteCard={handleDeleteCardClick}/>
            )
          })
        }
        </Main>
      <Footer />

      <EditProfilePopup  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} addCard={handleAddPlaceSubmit} />


      <PopupWithForm name="delete" onClose={closeAllPopups} title="Вы уверены?">
        
      </PopupWithForm>

      <PopupWithImage card={selectedCard} onClose={closeAllPopups} />

      <CardDeletePopup isOpen={isDeleteCardPopupOpen} card={selectDeleteCard} onClose={closeAllPopups}/>
</>
  );
}

export default observer(Page);

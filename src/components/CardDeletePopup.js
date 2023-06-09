import { useStores } from "../contexts/rootStoreContext"

function CardDeletePopup(props) {

  const {card} = useStores()

  function handleDeleteClick(e) {
    e.preventDefault()
    card.deleteCard(props.card._id)
    props.onClose()
    console.log(props.card)
  }

  return (
    <div className={`popup popup__delete ${props.isOpen && "popup__opened"}`}>
    <div className="popup__container">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <button type="submit" className="popup__save popup__save-delete" onClick={handleDeleteClick}>Да</button>
    </div>
  </div>
  )
}

export default CardDeletePopup
function PopupWithImage(props) {
  return (
    <div className={`popup popup__image ${props.card && "popup__image__opened" && "popup__opened" }`}>
      <div className="popup__image__container">
        <button className="popup__close popup__close__image" type="button" onClick={props.onClose}></button>
        <img className="popup__image__opened" src={props.card && props.card.link} alt="Картинка" />
        <h2 className="popup__image__title">{props.card && props.card.name}</h2>
      </div>
    </div>
  )
};

export default PopupWithImage;
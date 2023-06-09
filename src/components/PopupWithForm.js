function PopupWithForm(props) {
  return (
    <div className={`popup popup__${props.name} ${props.isOpen && "popup__opened"}`}>
    <div className="popup__container">
        <button className="popup__close" onClick={props.onClose} type="button"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name="popup" className={`popup__form popup__form__${props.name}`} onSubmit={props.onSubmit} noValidate>
          {props.children}
            <button type="submit" className="popup__save">Сохранить</button>
        </form>
    </div>
</div>
  )
};

export default PopupWithForm;
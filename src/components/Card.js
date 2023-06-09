import React from "react";
import {observer} from 'mobx-react-lite';
import { useStores } from "../contexts/rootStoreContext";

function Card(props) {

const {auth, card} = useStores()

const isOwn = props.card.owner === auth.user.id

const likesArray = [...props.card.likes]

const isLiked = likesArray.some(i => i === auth.user.id)

  function handleClick() {

    props.onCardClick(props.card);
    console.log(auth.user.id)
  }

  function handleDeleteClickPopup() {
    props.onDeleteCard(props.card)
    props.onCardDeleteClick(props.card)
  }

  function handleLikeClick() {

    if(!isLiked) {
      card.likeCard(props.card._id)
    }

    else {
      card.dislikeCard(props.card._id)
    }
    
    console.log(props.card)
  }

  return (
    <div className="place">
    <button className="place__delete" type="button" onClick={handleDeleteClickPopup}></button>
      <img className="place__image" src={props.card.link} onClick={handleClick} alt="Картинка" />
      <h2 className="place__title">{props.card.name}</h2>
      <button className={`place__like ${isLiked ? "place__like_active" : ""}`} onClick={handleLikeClick} type="button"></button>
      <p className="place__card-like">{props.card.likes.length}</p>
  </div>
  )
};

export default observer(Card);
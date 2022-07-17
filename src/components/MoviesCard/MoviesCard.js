import React from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
  const nameRu = props.card.nameRU
  const poster = props.isOnlySaved ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`
  const trailerLink = props.card.trailerLink

  const duration = () => {
    if (props.card.duration > 60) {
      return (props.card.duration / 60 | 0) + "ч " + props.card.duration % 60 + "м"
    }
    if (props.card.duration === 60) {
      return (props.card.duration / 60) + "ч"
    } else {
      return props.card.duration + "м"
    }
  }

  function handleCardSave() {
    props.onCardSave(props.card)
  }

  function handleCardDelete() {
    props.onCardDelete(props.card)
  }

  return (
    <>
      <div className="movie">
        <a className="movie__trailer" href={trailerLink} rel="noreferrer" target="_blank">
          <img className="movie__image" src={poster} alt="Постер" />
        </a>
        {props.isOnlySaved ? <button className="movie__button_delete hover-button" onClick={handleCardDelete} type="button"></button> :
          (props.isSaved(props.card) ? <button className="movie__button movie__button_saved hover-button" onClick={handleCardDelete} type="button"></button> :
            <button className="movie__button movie__button_save hover-button" onClick={handleCardSave} type="button">Сохранить</button>)}
        <div className="movie__info">
          <p className="movie__name">{nameRu}</p>
          <p className="movie__duration">{duration()}</p>
        </div>
      </div>
    </>
  )
}

export default MoviesCard
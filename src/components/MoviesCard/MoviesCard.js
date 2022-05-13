import movie_image from '../../images/movie_image.png'
import './MoviesCard.css'

function MoviesCard() {
  return (
    <>
      <div className="movie">
        <img className="movie__image" src={movie_image} alt="Постер" />
        <button className="movie__button_save" type="button">Сохранить</button>
        <div className="movie__info">
          <p className="movie__name">33 слова о дизайне</p>
          <p className="movie__duration">1ч 17м</p>
        </div>
      </div>
      <div className="movie">
        <img className="movie__image" src={movie_image} alt="Постер" />
        <button className="movie__button_saved" type="button"></button>
        <div className="movie__info">
          <p className="movie__name">Gimme Danger: История Игги и The Stooges</p>
          <p className="movie__duration">1ч 17м</p>
        </div>
      </div>
    </>
  )
}

export default MoviesCard
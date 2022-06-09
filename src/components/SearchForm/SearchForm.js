import { useState, useEffect } from 'react'
import './SearchForm.css'

function SearchForm(props) {
  const [movieName, setMovieName] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  function handleChangeMovieName(e) {
    setMovieName(e.target.value)
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked
    setCheckbox(isShortFilms)
    props.handleSearch(movieName, isShortFilms)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleSearch(movieName, checkbox)
  }
  
  useEffect(() => {
    setMovieName(props.defaultValue)
    setCheckbox(JSON.parse(localStorage.getItem('shortFilms')) || false)
  }, [])

  return (
    <section className="search" onSubmit={handleSubmit}>
      <form className="search__form">
        <div className="search__field">
          <input className="search__input" value={movieName} onChange={handleChangeMovieName} type="text" name="movie" placeholder="Фильм" required />
          <button className="search__button hover-button" onSubmit={handleSubmit} type="submit">Найти</button>
        </div>
        <div className="search__checkbox-container">
          <input className="search__checkbox" checked={checkbox} onChange={handleChangeCheckbox} type="checkbox" name="shortFilms" />
          <label className="search__checkbox-label">Короткометражки</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
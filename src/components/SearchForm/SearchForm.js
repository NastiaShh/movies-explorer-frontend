import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search">
      <form className='search__form'>
        <div className='search__field'>
          <input className="search__input" type="text" name='movie' placeholder="Фильм" required />
          <button className='search__button hover-button' type='submit'>Найти</button>
        </div>
        <div className='search__checkbox-container'>
          <input className='search__checkbox' type='checkbox' name='shortFilms' />
          <label className='search__checkbox-label'>Короткометражки</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
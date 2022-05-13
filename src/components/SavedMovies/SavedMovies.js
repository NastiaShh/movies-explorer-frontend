import './SavedMovies.css'
// import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
// import Preloader from '../Preloader/Preloader'

function SavedMovies() {
  return (
    <main className="saved-movies">
      {/* <Header /> */}
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
      <button className="saved-movies__more-button" type="button">Ещё</button>
    </main>
  )
}

export default SavedMovies
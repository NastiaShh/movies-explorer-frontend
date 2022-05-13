import './Movies.css'
// import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
// import Preloader from '../Preloader/Preloader'

function Movies() {
  return (
    <main className="movies">
      {/* <Header /> */}
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
      <button className="movies__more-button" type="button">Ещё</button>
    </main>
  )
}

export default Movies
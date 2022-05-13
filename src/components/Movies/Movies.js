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
    </main>
  )
}

export default Movies
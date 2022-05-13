import './Movies.css'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

function Movies() {
  return (
    <main className="movies">
      {/* <Header /> */}
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies
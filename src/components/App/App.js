import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import mainApi from '../../utils/MainApi.js'
import * as moviesApi from '../../utils/MoviesApi.js'
import * as auth from '../../utils/Auth.js'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'
import '../../index.css'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [movies, setMovies] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [moreCards, setMoreCards] = useState(0)
  const [savedMovies, setSavedMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const location = useLocation()
  const history = useHistory()

  function getUserInfo() {
    const path = location.pathname
    mainApi.getUserInfo()
      .then((userData) => {
        setLoggedIn(true)
        history.push(path)
        setCurrentUser(userData)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }


  function searchMovie(movieName, isShortFilms) {
    setLoading(true)
    moviesApi.getApiMovies()
      .then((movies) => {
        const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
        const foundMovies = isShortFilms ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        localStorage.setItem('searchMovieName', movieName)
        localStorage.setItem('shortFilms', isShortFilms)
        setLoading(false)
        handleResize()
      })
      .catch((err) => {
        console.log(err.message)
        setLoading(false)
        setServerError(true)
      })
  }

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  function handleResize() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    if (foundMovies === null) {
      return
    }
    if (windowWidth >= 1280) {
      setMovies(foundMovies.slice(0, 12))
      setMoreCards(3)
    } else if (windowWidth > 480 && windowWidth < 1280) {
      setMovies(foundMovies.slice(0, 8))
      setMoreCards(2)
    } else if (windowWidth <= 480) {
      setMovies(foundMovies.slice(0, 5))
      setMoreCards(2)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    handleResize()
  }, [windowWidth])

  function handleShowMore() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    setMovies(foundMovies.slice(0, movies.length + moreCards))
  }

  function handleSearch(movieName, isShortFilms) {
    searchMovie(movieName, isShortFilms)
  }


  function getSavedMovies() {
    mainApi.getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    getUserInfo()
    getSavedMovies()
  }, [])


  function handleCardSave(movie) {
    mainApi.addMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function handleCardDelete(card) {
    const deleteCard = savedMovies.find(c => c.movieId === (card.id || card.movieId) && c.owner === currentUser._id)
    if (!deleteCard) return
    mainApi.deleteMovie(deleteCard._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(c => c._id !== deleteCard._id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function isSaved(card) {
    return savedMovies.some(item => item.movieId === card.id && item.owner === currentUser._id)
  }


  function handleEditProfile(name, email) {
    mainApi.setUserInfo({ name, email })
      .then(() => {
        setCurrentUser({ name, email })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch((err) => {
        setErrorMessage('Что-то пошло не так...')
        console.log(err.message)
      })
  }

  function handleLogin(email, password) {
    auth.login(email, password)
      .then(() => {
        setLoggedIn(true)
        getUserInfo()
        history.push('/movies')
      })
      .catch((err) => {
        setErrorMessage('Что-то пошло не так...')
        setLoggedIn(false)
        console.log(err.message)
      })
  }

  function handleSignOut() {
    auth.logout()
      .then(() => {
        setLoggedIn(false)
        history.push('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header loggedIn={loggedIn} />

      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          handleSearch={handleSearch}
          defaultSearchValue={localStorage.getItem('searchMovieName') || ""}
          cards={movies}
          handleShowMore={handleShowMore}
          isSaved={isSaved}
          onCardSave={handleCardSave}
          onCardDelete={handleCardDelete}
          serverError={serverError}
          loading={loading}
        />
        <ProtectedRoute path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          loading={loading}
          cards={savedMovies}
          isSaved={isSaved}
          onCardDelete={handleCardDelete}
          serverError={serverError}
        />
        <ProtectedRoute path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          handleEditProfile={handleEditProfile}
          handleSignOut={handleSignOut}
        />
        <Route path="/signup">
          <Register handleRegister={handleRegister} errorMessage={errorMessage} />
        </Route>
        <Route path="/signin">
          <Login handleLogin={handleLogin} errorMessage={errorMessage} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </CurrentUserContext.Provider>
  )
}

export default App
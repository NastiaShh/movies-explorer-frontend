import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
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
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute path="/movies">
          <Header />
          <Movies />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </ProtectedRoute>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
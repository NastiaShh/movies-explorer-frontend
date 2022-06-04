import { Route } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header(props) {
  const endpoints = [
    "/",
    "/profile",
    "/movies",
    "/saved-movies",
  ]

  return (
    <Route exact path={endpoints}>
      <header className="header">
        <Logo />
        <Navigation loggedIn={props.loggedIn} />
      </header>
    </Route>
  )
}

export default Header
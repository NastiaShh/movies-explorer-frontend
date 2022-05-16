import React from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  function handlePopupOpen() {
    setIsPopupOpen(true)
  }

  function handlePopupClose() {
    setIsPopupOpen(false)
  }

  return (
    <Switch>
      <Route exact path="/">
        <nav className="navigation">
          <Link to="/sign-up" className="navigation__link navigation__link_unlogged hover-link">Регистрация</Link>
          <Link to="/sign-in" className="navigation__link navigation__link_unlogged hover-button">Войти</Link>
        </nav>
      </Route>

      <Route exact path="/movies">
        <div className={`${isPopupOpen ? "overlay" : ""}`}>
          <nav className={`navigation ${isPopupOpen ? "navigation__popup_open" : ""}`}>
            <button className="navigation__popup-button navigation__popup-button_close hover-button" onClick={handlePopupClose}></button>
            <Link to="/" className="navigation__link navigation__link_loggedin navigation__link-main hover-link">Главная</Link>
            <NavLink to="/movies" className="navigation__link navigation__link_loggedin hover-link" activeClassName="navigation__link_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__link navigation__link_loggedin hover-link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
            <Link to="/profile" className="navigation__account-button hover-button">
              <div className="navigation__account-icon"></div>
              Аккаунт
            </Link>
          </nav>
        </div>
        <button className="navigation__popup-button navigation__popup-button_burger hover-button" onClick={handlePopupOpen}></button>
      </Route>
    </Switch>
  )
}

export default Navigation
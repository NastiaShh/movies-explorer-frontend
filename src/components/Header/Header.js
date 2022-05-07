import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <Navigation />
    </header>
  )
}

export default Header
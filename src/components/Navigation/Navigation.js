import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/sign-up" className="navigation__link">Регистрация</Link>
      <Link to="/sign-in" className="navigation__link">Войти</Link>
    </div>
  )
}

export default Navigation
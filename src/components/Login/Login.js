import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Логотип сайта" />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <div className="login__field">
          <label className="login__label">E-mail</label>
          <input className="login__input" type="email" name="email" placeholder="E-mail" required />
          <span className="login__input-error"></span>
        </div>
        <div className="login__field">
          <label className="login__label">Пароль</label>
          <input className="login__input" type="password" name="password" placeholder="Пароль" required minLength="6" />
          <span className="login__input-error"></span>
        </div>
        <button className="login__button hover-button" type="submit">Войти</button>
        <p className="login__sign">Ещё не зарегистрированы?&nbsp;
          <Link to="/sign-up" className="login__signup-link hover-link">Регистрация</Link>
        </p>
      </form>
    </section>
  )
}

export default Login
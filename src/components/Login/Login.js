import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import useFormValidation from '../../hooks/useFormValidation'
import './Login.css'

function Login(props) {
  const { handleChange, handleSubmit, values, errors, isValid } = useFormValidation(props.handleLogin)

  return (
    <section className="login">
      <Logo />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__field">
          <label className="login__label">E-mail</label>
          <input className="login__input" value={values?.email} onChange={handleChange} type="email" name="email" placeholder="E-mail" required />
          {errors?.email && <span className="login__input-error">{errors.email}</span>}
        </div>
        <div className="login__field">
          <label className="login__label">Пароль</label>
          <input className="login__input" value={values?.password} onChange={handleChange} type="password" name="password" placeholder="Пароль" required minLength="6" />
          {errors?.password && <span className="login__input-error">{errors.password}</span>}
        </div>
        <span className="login__input-error">{props.errorMessage}</span>
        <button className={isValid ? "login__button hover-button" : "login__button login__button_disabled"} disabled={!isValid} type="submit">Войти</button>
        <p className="login__sign">Ещё не зарегистрированы?&nbsp;
          <Link to="/signup" className="login__signup-link hover-link">Регистрация</Link>
        </p>
      </form>
    </section>
  )
}

export default Login
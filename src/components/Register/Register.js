import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import useFormValidation from '../../hooks/useFormValidation'
import './Register.css'

function Register(props) {
  const { handleChange, handleSubmit, values, errors, isValid } = useFormValidation(props.handleRegister)

  return (
    <section className="register">
      <Logo />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__field">
          <label className="register__label">Имя</label>
          <input className="register__input" value={values?.name} onChange={handleChange} type="text" name="name" placeholder="Имя" required />
          {errors?.name && <span className="register__input-error">{errors.name}</span>}
        </div>
        <div className="register__field">
          <label className="register__label">E-mail</label>
          <input className="register__input" value={values?.email} onChange={handleChange} type="email" name="email" placeholder="E-mail" required />
          {errors?.email && <span className="register__input-error">{errors.email}</span>}
        </div>
        <div className="register__field">
          <label className="register__label">Пароль</label>
          <input className="register__input" value={values?.password} onChange={handleChange} type="password" name="password" placeholder="Пароль" required minLength="6" />
          {errors?.password && <span className="register__input-error">{errors.password}</span>}
        </div>
        <span className="registration__input-error">{props.errorMessage}</span>
        <button className={isValid ? "register__button hover-button" : "register__button register__button_disabled"} disabled={!isValid} type="submit">Зарегистрироваться</button>
        <p className="register__login-sign">Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="register__login-link hover-link">Войти</Link>
        </p>
      </form>
    </section>
  )
}

export default Register
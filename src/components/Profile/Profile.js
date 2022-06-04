import { useContext, useState, useEffect } from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'
import useFormValidation from '../../hooks/useFormValidation'
import './Profile.css'

function Profile(props) {
  const currentUser = useContext(CurrentUserContext)
  const { handleChange, handleSubmit, values, errors, isValid, setValues } = useFormValidation(props.handleEditProfile)

  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    setValues(currentUser)
  }, [currentUser])

  function handleEditProfile() {
    setIsInputDisabled(false)
  }

  function handleSave() {
    setIsSuccess(true)
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__field">
          <label className="profile__label">Имя</label>
          <input className="profile__input" value={values?.name} onChange={handleChange} disabled={isInputDisabled} type="text" name="name" placeholder="Имя" required />
        </div>
        {errors?.name && <span className="profile__input-error">{errors.name}</span>}
        <div className="profile__field">
          <label className="profile__label">E-mail</label>
          <input className="profile__input" value={values?.email} onChange={handleChange} disabled={isInputDisabled} type="email" name="email" placeholder="E-mail" required />
        </div>
        {errors?.email && <span className="profile__input-error">{errors.email}</span>}

        {isSuccess ? <p className="profile__edit-status profile__edit-status_ok">Изменения сохранены</p> :
          <span className="profile__edit-status profile__edit-status_error">{errors?.email}</span>}

        {isInputDisabled ? (
          <>
            <button className="profile__button profile__button_edit hover-link" onClick={handleEditProfile} type="submit">Редактировать</button>
            <button className="profile__button profile__button_logout hover-link" onClick={props.handleSignOut} type="submit">Выйти из аккаунта</button>
          </>
        ) : (
          <button className={isValid ? "profile__save-button hover-button" :
            "profile__save-button profile__save-button_disabled"} onClick={handleSave} type="submit" disabled={!isValid}>Сохранить</button>
        )}
      </form>
    </section>
  )
}

export default Profile
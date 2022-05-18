import student_photo from '../../images/student_photo.png'
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Анастасия</h3>
          <h4 className="about-me__info">Фронтенд-разработчик, 25 лет</h4>
          <p className="about-me__description">Я из Санкт-Петербурга, у меня высшее экономическое образование. После осознания, что хочу работать 
            и развиваться в сфере IT, стала больше учиться и в итоге поступила на курс веб-разработки в Яндекс.Практикум. Сейчас я стараюсь большую 
            часть времени посвящать программированию, чтобы стать востребованным специалистом.</p>
          <ul className="about-me__social-networks">
            <li>
              <a className="about-me__social-network hover-link" href="https://vk.com/shamray_n" rel="noreferrer" target="_blank">ВКонтакте</a>
            </li>
            <li>
              <a className="about-me__social-network hover-link" href="https://github.com/NastiaShh" rel="noreferrer" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={student_photo} alt="Фотография студента" />
      </div>
    </section>
  )
}

export default AboutMe
import arrowAccent from '../../images/arrow_accent.svg'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a className="portfolio__link hover-link" href="https://nastiashh.github.io/how-to-learn" rel="noreferrer" target="_blank">Статичный сайт</a>
          <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link hover-link" href="https://nastiashh.github.io/russian-travel" rel="noreferrer" target="_blank">Адаптивный сайт</a>
          <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link hover-link" href="https://mesto.nsh.nomoredomains.work/sign-in" rel="noreferrer" target="_blank">Одностраничное приложение</a>
          <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
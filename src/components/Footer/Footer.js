import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>

        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/Yandex-Practicum" rel="noreferrer" target="_blank">GitHub</a>
          </li>
          <li>
            <a className="footer__link" href="https://www.facebook.com/yandex.practicum" rel="noreferrer" target="_blank">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
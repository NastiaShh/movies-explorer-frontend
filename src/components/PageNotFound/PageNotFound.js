import { Link } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {
  return (
    <section className="error404">
      <h3 className="error404__title">404</h3>
      <p className="error404__description">Страница не найдена</p>
      <Link to="/" className="error404__back-link hover-link">Назад</Link>
    </section>
  )
}

export default PageNotFound
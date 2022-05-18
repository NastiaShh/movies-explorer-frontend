import './NavTab.css'

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li>
          <a className="navtab__link hover-button" href="#about-project">О проекте</a>
        </li>
        <li>
          <a className="navtab__link hover-button" href="#techs">Технологии</a>
        </li>
        <li>
          <a className="navtab__link hover-button" href="#about-me">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab
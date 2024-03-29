
import { NavLink } from "react-router-dom"

const HeaderNav = () => {

  const usuario = 'christian fernandez'
  return (
    <header className="header">
      <div className="logo">
        <span>{usuario[0]}</span>
        <h3>{`${usuario} web`}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink  to='portafolio'>Portafolio</NavLink>
          </li>
          <li>
            <NavLink to='servicios'>Servicios</NavLink>
          </li>
          <li>
            <NavLink to='curriculum'>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to='contacto'>Contacto</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav

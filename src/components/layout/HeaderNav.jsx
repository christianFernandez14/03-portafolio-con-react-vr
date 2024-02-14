
import { NavLink } from "react-router-dom"

const HeaderNav = () => {
  return (
    <header>
      <h1>Nombre usuario Portafolio</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='portafolio'>Portafolio</NavLink>
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

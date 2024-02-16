import { Link } from "react-router-dom"

import { trabajos } from '../data/trabajos'

// Esta linea es para dejarlo por defecto la cantidad que se mostraria
// const ListadoTrabajos = ({ limites = 10 }) => {
const ListadoTrabajos = ({ limites }) => {
  return (
    <section className='works'>
      {
        trabajos.slice(0,limites).map(trabajo => (
          <article
            key={trabajo.id}
            className='work-item'
          >
            <div className='mask'>
              <img src={`/images/${trabajo.id}.jpg`} alt={`imagen de ${trabajo.id}`} />
            </div>
            <span>{trabajo.categorias}</span>
            <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
            <p>{trabajo.tecnologias}</p>
          </article>
        ))
      }
    </section>
  )
}

export default ListadoTrabajos
import { Link } from 'react-router-dom'

import { trabajos } from "../data/trabajos"

const Portafolio = () => {

  // const { id, nombre, url, tecnologias, categorias } = trabajos

  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      <section className='works'>
        {
          trabajos.map(trabajo => (
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

    </div>
  )
}

export default Portafolio
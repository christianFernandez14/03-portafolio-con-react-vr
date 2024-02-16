import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

const Proyecto = () => {

  const [proyecto, setProyecto] = useState({})
  const { id } = useParams()

  useEffect(() => {

    let trabajo = trabajos.filter(x => x.id === id)
    setProyecto(trabajo[0])
  }, [])

  const { nombre, url, tecnologias, categorias, descripcion } = proyecto

  return (
    <div className="page page-work">
      <div className='mask'>
        <img src={`/images/${id}.jpg`} alt={`imagen de ${id}`} />
      </div>
      <h1 className="heading">{nombre}</h1>
      <p>{tecnologias}</p>
      <p>{descripcion}</p>
      <div className='mask-link'>
        <a href={`https://${url}`} target='_blank'>Ir al proyecto</a>
        <Link to='/portafolio'>Regresar al portafolio</Link>
      </div>


    </div>
  )
}

export default Proyecto
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

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
      <a href={`https://${url}`} target='_blank'>Ir al proyecto</a>


    </div>
  )
}

export default Proyecto
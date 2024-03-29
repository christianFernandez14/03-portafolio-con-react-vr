import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola; soy <strong>Christian Fernández</strong> y soy Dev Web en Santiago,
        ofrezco mis servicios de <strong>programación</strong> y desarrollo en todo  tipo de proyectos Web.
      </h1>
      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className="lasts-works">
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <ListadoTrabajos limites={2} />

      </section>
    </div>
  )
}

export default Inicio
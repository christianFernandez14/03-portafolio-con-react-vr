import {Link} from 'react-router-dom'
 
const Inicio = () => {
  return (
    <div>
      <h1>
        Hola, soy Christian Fernández y soy Dev Web en Santiago,
        ofrezco mis servicios de programación y desarrollo en todo
        tipo de proyectos Web. 
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className="lasts-works">
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        
        <div className="works">

        </div>

      </section>
    </div>
  )
}

export default Inicio

const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>

      <form className="contact" action="mailto:christian14@gmail.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Motivo de contacto" />
        <input type="submit" value="enviar consulta" />
      </form>
    </div>
  )
}

export default Contacto
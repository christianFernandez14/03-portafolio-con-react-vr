
const Footer = () => {

  const year = new Date();
  const yearNow = year.getFullYear()

  return (
    <footer>
      Portafolio Christian Fernandez &copy; Máster en React - {yearNow}
    </footer>
  )
}

export default Footer
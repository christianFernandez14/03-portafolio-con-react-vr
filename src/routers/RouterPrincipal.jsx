import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import HeaderNav from '../components/layout/HeaderNav'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'
import Footer from '../components/layout/Footer'

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      <hr />
      {/* Contenedo central */}
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>

      <hr />
      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default RouterPrincipal
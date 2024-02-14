import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}

      {/* Contenedo central */}
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>

      {/* Footer */}
    </BrowserRouter>
  )
}

export default RouterPrincipal
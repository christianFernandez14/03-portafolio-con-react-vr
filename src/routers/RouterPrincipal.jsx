import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HeaderNav from '../components/layout/HeaderNav'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'
import ErrorPage from '../components/page/ErrorPage'
import Footer from '../components/layout/Footer'

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      {/* Contenedo central */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to={'/inicio'}/>} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}

export default RouterPrincipal
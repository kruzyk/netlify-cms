import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Karaoke Party w Trójmieście | Prowadzenie imprez w Gdańsku, Sopocie i Gdyni"
      meta={[
        { name: 'description', content: '>> Najlepsze karaoke w Trójmieście! << Zobacz gdzie jest impreza. Wiele lat doświadczenia w prowadzeniu imprez tanecznych i wesel.' },
        { name: 'keywords', content: 'karaoke, impreza, party, trójmiasto, gdańsk, sopot, gdynia' },
      ]}
    >
      <html lang="pl" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper

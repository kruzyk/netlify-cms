import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Karaoke Party w Trójmieście | Prowadzenie imprez w Gdańsku, Sopocie i Gdyni">
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129155228-1"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'UA-129155228-1');`}
    </script>
    </Helmet>
    <Navbar />

    <div>{children}</div>
  </div>
)

export default TemplateWrapper

import React from 'react'
import Testimonials from './testimonials'
import LandingPage from './landing-page'
import Projects from './projects'
import Expertise from './expertise'
import Process from './process'
import Summary from './summary'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = () => {
  return (
    <>
        <Navbar />
        <LandingPage />
        <Projects />
        <Process />
        <Expertise />
        <Testimonials />
        <Summary />
        <Footer />
    </>
  )
}

export default Layout
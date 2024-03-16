'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import LandingPage from '@/components/stock-button/landing-page'
import Footer from '@/components/footer'
import Introduction from '@/components/stock-button/introduction'
import Cta from '@/components/stock-button/cta'

const StockButton = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Introduction/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default StockButton
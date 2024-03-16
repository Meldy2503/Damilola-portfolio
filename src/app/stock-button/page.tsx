'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import LandingPage from '@/components/stock-button/landing-page'
import Footer from '@/components/footer'
import Introduction from '@/components/stock-button/introduction'

const StockButton = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Introduction/>
    <Footer/>
    </>
  )
}

export default StockButton
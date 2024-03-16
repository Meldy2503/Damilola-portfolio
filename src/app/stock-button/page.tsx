'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import LandingPage from '@/components/stock-button/landing-page'
import Footer from '@/components/footer'
import Introduction from '@/components/stock-button/introduction'
import Cta from '@/components/stock-button/cta'
import Achievements from '@/components/stock-button/achievements'

const StockButton = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Introduction/>
    <Achievements/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default StockButton
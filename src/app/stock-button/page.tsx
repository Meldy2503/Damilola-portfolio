'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import LandingPage from '@/components/stock-button/landing-page'
import Footer from '@/components/footer'
import Introduction from '@/components/stock-button/introduction'
import Cta from '@/components/stock-button/cta'
import Achievements from '@/components/stock-button/achievements'
import StyleGuide from '@/components/stock-button/style-guide'
import HifiDesigns from '@/components/stock-button/hifi-designs'
import PrincipalTask from '@/components/stock-button/principal-task'

const StockButton = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Introduction/>
    <PrincipalTask/>
    <HifiDesigns/>
    <Achievements/>
    <StyleGuide/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default StockButton
'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import LandingPage from '@/components/stock-button/landing-page'
import Footer from '@/components/footer'
import Problem from '@/components/stock-button/the-problem'
import Cta from '@/components/stock-button/cta'
import Achievements from '@/components/stock-button/achievements'
import StyleGuide from '@/components/stock-button/style-guide'
import HifiDesigns from '@/components/stock-button/hifi-designs'
import PrincipalTask from '@/components/stock-button/principal-task'
import Solution from '@/components/stock-button/the-solution'

const StockButton = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Problem/>
    <PrincipalTask/>
    <Solution/>
    <HifiDesigns/>
    <Achievements/>
    <StyleGuide/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default StockButton
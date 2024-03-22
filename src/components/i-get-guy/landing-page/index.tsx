'use client'

import React from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import MobileLandingPage from './mobile-hero';
import DesktopLandingPage from './desktop-hero';


const LandingPage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
    {isMobile ? <MobileLandingPage/> : <DesktopLandingPage/>}
    </>
  )
}

export default LandingPage
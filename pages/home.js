import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'

const home = () => {
  return (
    <div>
        <Head>
            <title>Brimco - Home</title>
            <meta name="description" content="Homepage for Brimco" />
        </Head>
        <Navbar />
        <HeroSection />
        <HomeCards />
        <Footer />
    </div>
  )
}

export default home
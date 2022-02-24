import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const home = () => {
  return (
    <div>
        <Head>
            <title>Brimco - Home</title>
            <meta name="description" content="Homepage for Brimco" />
        </Head>
        <Navbar />
        <h1>Brimco - Home</h1>
    </div>
  )
}

export default home
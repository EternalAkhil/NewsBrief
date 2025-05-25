import React from 'react'
import Navbar from '../components/Navbar'
import National from './National'
import Sports from './Sports'
import Technology from './Technology'
import Business from './Business'
import Science from './Science'
import Entertainment from './Entertainment'
import Health from './Health'
import Footer from './Footer'
import Search from './Search'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Search/>
    <National/>
    <Sports/>
    <Technology/>
    <Business/>
    <Science/>
    <Entertainment/>
    <Health/>
    <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import { Navbar } from './components'
import { Header, AboutUs, Menu, Chef, Intro, Laurels, Gallery, Findus, Footer } from './container'

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  )
}

export default App
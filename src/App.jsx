import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'

function App() {

  return (
    <div>
      <Header />

      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='services'>
          <Services />
        </div>
      </main>
    </div>
  )
}

export default App

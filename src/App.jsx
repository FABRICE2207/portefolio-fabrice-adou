import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'

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
      </main>
    </div>
  )
}

export default App

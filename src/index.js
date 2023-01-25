import React from 'react'
import "./index.css"
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.js'
import Intro from './components/Intro/Intro.js'
import Hero from './components/Hero/Hero.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Intro />
    <Hero />
  </div>
);

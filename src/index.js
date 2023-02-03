import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from './components/Header/Header.js';
import Intro from './components/Intro/Intro.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Intro />
        <Hero />
        <Footer />
    </div>
);

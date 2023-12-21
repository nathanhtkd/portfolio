// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
    return (
        <main className="text-gray-400 bg-cover bg-gray-800 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
        </main>
    );
}
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans antialiased selection:bg-purple-100 selection:text-[#7C3AED]">
      <CursorFollower />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
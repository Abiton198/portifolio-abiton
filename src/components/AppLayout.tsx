import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;


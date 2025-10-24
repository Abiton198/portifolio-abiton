import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <img 
            src="/abiton.jpg"
            alt="Abiton Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/30 shadow-2xl mb-6"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm Abiton
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-teal-200">
          Aspiring NLP Researcher & Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Building technology that connects language, learning, and sports. Currently pursuing a BA in Arabic Language & Linguistics while developing advanced skills in Machine Learning and NLP.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-teal-300 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

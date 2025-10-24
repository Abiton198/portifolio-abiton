import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abiton</h3>
            <p className="text-gray-400 text-sm">
              Aspiring NLP Researcher building technology that connects language, learning, and sports.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-teal-400 transition-colors">Courses</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Abiton198" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abiton-padera-232a6a9a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:abitonpadera@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Abiton. Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

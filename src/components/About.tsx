import React from 'react';
import { GraduationCap, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <GraduationCap className="text-teal-600" size={32} />
              Academic Background
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg">Bachelor of Arts in Arabic Language Studies</h4>
                <p className="text-sm text-gray-600">International Open University, Gambia — Expected completion: Feb 2026</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Focus on Arabic morphology, syntax, semantics, and sociolinguistics</li>
                <li>Bridging Studies: "Computer Languages, Web Development, Machine Learning, Deep Learning, Computational Lunguistics related studies from various online universities (Stanford, Michigan, Emperial London, etc)"</li>
              </ul>
            </div>
          </div>

           <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Target className="text-orange-500" size={32} />
              Current Activity
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="font-semibold text-teal-600">Voluntary Arabic Teaching at CLD Institute, UK</p>
              <ul className="list-disc list-inside space-y-2 ">
                <li>General class lessons for Arabic Medina Book Series via Zoom</li>
                <li>Recording of Youtube Arabic Medina Book series for the institution</li>
                <li>Preparation of Arabic Kahoot Assesments for students</li>
              </ul>
            </div>
          </div>
        </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Target className="text-orange-500" size={32} />
              Future Goals
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="font-semibold text-teal-600">🎯 Intended Program: M.Sc. in Natural Language Processing, MBZUAI (2026 Intake)</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Advance research in Arabic NLP and AI for Sports Analytics</li>
                <li>Pursue a PhD in NLP, focusing on predictive and assistive language models for real-time decision-making in sports</li>
                <li>Contribute to open-source Arabic NLP datasets and tools that empower innovation in the MENA region</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">Arabic NLP</h4>
            <p className="text-sm">Developing models for morphological analysis, dialect understanding, and educational tools</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">Sports Analytics</h4>
            <p className="text-sm">NLP and multimodal data for player safety, referee decision support, and injury prevention</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">AI for Education</h4>
            <p className="text-sm">NLP-powered tutoring systems for Arabic-speaking learners</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Globe className="text-blue-600" size={32} />
            Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">English — Fluent</span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-medium">Arabic — Reading, Writing, Conversational</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">Shona — Native</span>
          </div>
        </div>
    </section>
  );
};

export default About;

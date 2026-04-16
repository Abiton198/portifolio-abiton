import React from 'react';
import { GraduationCap, Target, Globe, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Academic Background */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <GraduationCap className="text-teal-600" size={32} />
              Academic Background
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-lg">Bachelor of Arts in Arabic Language Studies</h4>
                <p className="text-sm text-gray-600">International Open University, Gambia</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Focus on Arabic morphology, syntax, semantics, and sociolinguistics</li>
                <li>Bridging Studies: Computer Languages, Web Development, Machine Learning, Deep Learning, Computational Linguistics (Stanford, Michigan, Imperial College, etc)</li>
              </ul>
            </div>
          </div>

          {/* Current Activity */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Target className="text-orange-500" size={32} />
              Current Activity
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="font-semibold text-teal-600">Voluntary Arabic Teaching at CLD Institute, UK</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Teaching Arabic Medina Book Series via live Zoom sessions</li>
                <li>Recording structured YouTube lesson content</li>
                <li>Designing interactive Kahoot assessments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={32} />
              Work Experience
            </h3>

            <div className="space-y-6 text-gray-700 text-sm">
              
              {/* NextGen Skills */}
              <div>
                <h4 className="font-semibold text-lg text-teal-600">
                  Software Developer — NextGen Skills Development
                </h4>
                <p className="text-xs text-gray-500">2023 — Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Developing and maintaining customised web applications for education and training institutions</li>
                  <li>Building fullstack systems using React, Firebase, and Python-based backends</li>
                  <li>Designing and integrating REST APIs for data management and system communication</li>
                  <li>Implementing AI-powered features including intelligent tutoring systems and automation tools</li>
                  <li>Optimising performance, user experience, and system scalability</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  Skills: React, Firebase, Python, Flask, API Integration, System Design, AI Integration
                </p>
              </div>

              {/* Tutor */}
              <div>
                <h4 className="font-semibold text-lg text-teal-600">
                  Computer Science Tutor — Baetiluer Education (Part-Time)
                </h4>
                <p className="text-xs text-gray-500">2025 — Present</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Teaching foundational and advanced computer science concepts to students</li>
                  <li>Explaining programming, algorithms, and problem-solving techniques</li>
                  <li>Supporting students in exam preparation and practical assignments</li>
                  <li>Adapting teaching methods to different learning styles</li>
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  Skills: Teaching, Communication, Problem Solving, Algorithmic Thinking, Mentorship
                </p>
              </div>

            </div>
          </div>

          {/* Future Goals */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Target className="text-orange-500" size={32} />
              Future Goals
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="font-semibold text-teal-600">
                🎯 Intended Program: M.Sc. AI (Natural Language Processing)
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Advance research in Arabic NLP and build intelligent AI systems</li>
                <li>Design and develop <strong>agentic AI systems</strong> with tool-calling and memory</li>
                <li>Apply AI in education and sports analytics</li>
                <li>Pursue a PhD in NLP focusing on adaptive models</li>
                <li>Contribute to open-source AI and NLP tools</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Interests */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">Arabic NLP</h4>
            <p className="text-sm">Morphological analysis, dialect understanding, and educational tools</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">Sports Analytics</h4>
            <p className="text-sm">AI for decision support, player safety, and performance analysis</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 text-center">
            <h4 className="font-bold text-lg mb-2">AI for Education</h4>
            <p className="text-sm">Intelligent tutoring systems and personalised learning</p>
          </div>
        </div>

        {/* Languages */}
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

      </div>
    </section>
  );
};

export default About;
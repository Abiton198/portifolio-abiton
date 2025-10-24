import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
  const formalCourses = courses.filter(c => c.type === 'formal');
  const selfPacedCourses = courses.filter(c => c.type === 'self-paced');

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Certifications & Courses</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Continuous learning through formal certifications and self-directed study
        </p>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Formal Online Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formalCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Self-Paced & Documentation-Based Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfPacedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

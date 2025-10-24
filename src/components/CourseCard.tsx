import React from 'react';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-teal-500"></div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600">{course.institution}</p>
          {course.platform && (
            <p className="text-xs text-teal-600 mt-1">{course.platform}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-200">
      {skill}
    </span>
  );
};

export default SkillBadge;

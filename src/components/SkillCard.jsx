import React from 'react';
import SkillItem from './SkillItem';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20">

      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-center md:text-left">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
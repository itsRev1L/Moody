import React from 'react';

const SkillItem = ({ skill }) => {
  return (
    <div className="flex flex-col items-center group/icon">
      <div className="bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 mb-1 sm:mb-2 border border-white/10 group-hover/icon:bg-white/10 transition-all duration-200">
        <skill.icon
          size={24}
          className="sm:w-7 sm:h-7 md:w-9 md:h-9 text-white/40 transition-all duration-200 group-hover/icon:scale-110 group-hover/icon:drop-shadow-[0_0_10px_var(--color)]"
          style={{
            '--color': skill.color,
            color: 'rgba(255,255,255,0.8)'
          }}
        />
      </div>

      <span className="text-white/30 text-xs sm:text-sm transition-all duration-200 group-hover/icon:text-white/70">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillItem;
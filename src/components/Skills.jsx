import React from 'react';
import SkillCard from './SkillCard';
import {
  FaReact, FaJs, FaNodeJs, FaFigma, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiNextdotjs,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects,
  SiMongodb, SiExpress, SiFirebase, SiPostgresql
} from 'react-icons/si';


const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Nextjs", icon: SiNextdotjs, color: "#000000" },
  ];

  const designSkills = [
    { name: 'Figma', icon: FaFigma, color: '#A259FF' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'After Effects', icon: SiAdobeaftereffects, color: '#9999FF' },
  ];

  const backendSkills = [
    // { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    // { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    // { name: 'Express', icon: SiExpress, color: '#000000' },
    // { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    // { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    // { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  ];
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center py-12 md:py-16 lg:py-20 border-t border-neutral-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 md:mb-12 lg:mb-16">
          My <span className="text-white font-bold">Skills</span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">

          {/* کارت فرانت‌اند */}
          <div className="w-full">
            <SkillCard title="FRONT-END" skills={frontendSkills} />
          </div>


          <div className="w-full">
            <SkillCard title="DESIGN" skills={designSkills} />
          </div>

          <div className="w-full md:col-span-2 lg:col-span-1">
            <SkillCard title="BACKEND" skills={backendSkills} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
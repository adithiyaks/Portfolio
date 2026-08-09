import React from 'react';
import { Code, Smartphone, Eye } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, description: 'Data structures, AI/ML algorithms and OOPs' },
        { name: 'Dart', level: 85, description: 'Flutter app development & state management' },
        { name: 'Java', level: 65, description: 'Object oriented design & Unity 3D scripts' },
        { name: 'SQL', level: 80, description: 'Relational database queries and management' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 90, description: 'Cross-platform mobile apps for iOS & Android' },
        { name: 'React & Web', level: 85, description: 'Modern responsive web applications' },
        { name: 'Express.js & Node', level: 75, description: 'REST APIs & backend database integration' },
        { name: 'Arduino & IoT', level: 80, description: 'Embedded sensors & microcontrollers' },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: Eye,
      skills: [
        { name: 'Figma & UI/UX', level: 95, description: 'Professional interface & prototype design' },
        { name: 'AI & Computer Vision', level: 85, description: 'OpenCV, TensorFlow, object detection' },
        { name: 'Graphic Design', level: 80, description: 'Photoshop, Canva & brand visual design' },
        { name: '3D & Hardware', level: 60, description: 'Blender modeling & hardware prototypes' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-3">
            EXPERTISE & TOOLING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-[#7C3AED] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-3 rounded-2xl bg-purple-50 text-[#7C3AED]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-900 font-bold">{skill.name}</span>
                          <span className="text-[#7C3AED] font-semibold text-xs bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
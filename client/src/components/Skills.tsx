import React from 'react';
import { Code, Database, Smartphone, Gamepad2, Eye, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, description: 'UI design, backend logic, data handling' },
        { name: 'C#', level: 55, description: 'Unity 3D game development' },
        { name: 'Dart', level: 85, description: 'Flutter app development' },
        { name: 'SQL', level: 80, description: 'Database queries and management' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 85, description: 'Cross-platform app development' },
        { name: 'Unity 3D', level: 65, description: 'Basic game development' },
        { name: 'Express.js', level: 70, description: 'Database integration' },
        { name: 'Arduino', level: 75, description: 'IoT and hardware programming' },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: Eye,
      skills: [
        { name: 'AI & Machine Learning', level: 70, description: 'Computer vision fundamentals' },
        { name: 'Image Classification', level: 70, description: 'AI-powered recognition systems' },
        { name: 'Photoshop', level: 60, description: 'Basic graphic design skills' },
        { name: 'Canva', level: 100, description: 'Professional design proficiency' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  ))}
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
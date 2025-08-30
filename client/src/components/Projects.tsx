import React from 'react';
import { Shield, Zap, ShoppingCart, Car } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SheSecure',
      description: 'Real-time SOS and community safety app designed to help women connect and respond quickly to emergency situations.',
      icon: Shield,
      technologies: ['Flutter', 'Firebase', 'Real-time Database', 'GPS'],
      status: 'Award Winning',
      gradient: 'from-pink-500 to-red-500',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Crop Raiding Prevention System',
      description: 'Working prototype that detects animals using AI and emits species-specific sound deterrents to protect farmland.',
      icon: Zap,
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'IoT', 'Arduino'],
      status: 'Prototype',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Full-Stack E-Commerce App',
      description: 'Complete e-commerce solution built with Flutter, focusing on learning the entire app development lifecycle.',
      icon: ShoppingCart,
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Payment Gateway'],
      status: 'In Development',
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Obstacle-Avoiding Arduino Car',
      description: 'Autonomous vehicle prototype using ultrasonic sensors and Arduino programming for intelligent navigation.',
      icon: Car,
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Motor Control'],
      status: 'Completed',
      gradient: 'from-purple-500 to-violet-500',
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Award Winning': return 'bg-yellow-500';
      case 'In Development': return 'bg-blue-500';
      case 'Prototype': return 'bg-green-500';
      case 'Completed': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and passion for solving real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
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

export default Projects;
// import React from 'react';
import { Shield, Zap, ShoppingCart, Car, Bot, Leaf, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SheSecure',
      description: 'Real-time SOS and community safety app designed to help women connect and respond quickly to emergency situations.',
      technologies: ['Flutter', 'Firebase', 'Real-time Database', 'GPS'],
      status: 'Award Winning',
      gradient: 'from-pink-500 to-red-500',
      image: '/images/shesecure.png',
    },
    {
      title: 'VisionX',
      description: 'AI-powered smart glasses designed to assist visually impaired individuals with real-time navigation, obstacle detection, and environment awareness.',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'IoT', 'Raspberry Pi'],
      status: 'Award Winning',
      gradient: 'from-cyan-500 to-blue-600',
      image: '/images/visionx.jpg',
    },
    {
      title: 'Unmuted',
      description: 'Smart wearable tech that translates hand signs into real-time audio, bridging communication gaps for the deaf and mute community.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'Arduino', 'IoT'],
      status: 'Award Winning',
      gradient: 'from-violet-500 to-purple-600',
      image: '/images/unmuted.png',
    },
    {
      title: 'Crop Raiding Solutions',
      description: 'Working prototype that detects animals using AI and emits species-specific sound deterrents to protect farmland.',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'IoT', 'Arduino'],
      status: 'Prototype',
      gradient: 'from-green-500 to-emerald-500',
      image: '/images/crop-raiding.png',
      link: 'https://github.com/adithiyaks/Crop-Raiding-Soluions.git',
    },
    {
      title: 'Full-Stack E-Commerce App',
      description: 'Complete e-commerce solution built with Flutter, focusing on learning the entire app development lifecycle.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Payment Gateway'],
      status: 'In Development',
      gradient: 'from-blue-500 to-indigo-500',
      image: '/images/ecommerce.png',
    },
    {
      title: 'Obstacle-Avoiding Arduino Car',
      description: 'Autonomous vehicle prototype using ultrasonic sensors and Arduino programming for intelligent navigation.',
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Motor Control'],
      status: 'Completed',
      gradient: 'from-purple-500 to-violet-500',
      image: 'https://i0.wp.com/srituhobby.com/wp-content/uploads/2021/04/blogss.jpg?w=1280&ssl=1',
    },
    {
      title: 'Memora',
      description: 'Memora is a clean, minimal flashcards app that helps users quickly create, flip, and review cards for efficient learning and memory recall.',
      technologies: ['Flutter', 'Dart','Hive','GetX','Material Design'],
      status: 'Completed',
      gradient: 'from-blue-400 to-cyan-500',
      image: '/images/memora.png',
      link: 'https://github.com/adithiyaks/Memora.git',
    },
    {
      title: 'Ecoverse',
      description: 'A platform that provides the complete details of the hackathon ECOVERSE\'26 and allows participants to register and explore event tracks.',
      technologies: ['React', 'Typescript', 'TailwindCSS', 'Chart.js'],
      status: 'Completed',
      gradient: 'from-green-400 to-emerald-600',
      image: '/images/ecoverse.png',
      link: 'https://github.com/Ayush021-Dev/ecoverse.git',
    },
    {
      title: 'Mediculture',
      description: 'Mediculture is a smart healthcare app for instant medicine delivery, doctor consultations, and real-time emergency support.',
      technologies: ['Flutter', 'MongoDB','PostgreSQL', 'Node.js'],
      status: 'In Development',
      gradient: 'from-red-500 to-pink-500',
      image: '/images/mediculture.png',
      link: 'https://github.com/JCKawin/Mediculture.git',
    },
    {
      title: 'Who Un-followed Me!?',
      description: 'Privacy-first SPA that compares your Instagram followers vs following locally in the browser. No uploads, no servers.',
      technologies: ['React', 'Node.js', 'Backend logic', 'TailwindCSS'],
      status: 'Completed',
      gradient: 'from-purple-500 to-indigo-600',
      image: '/images/who-unfollowed-me.png',
      link: 'https://github.com/adithiyaks/who-unfollowed-me.git',
    },
    {
      title: 'VisionPay',
      description: 'VisionPay is a Flutter-based proof-of-concept app that enables seamless, hands-free payments using voice, gestures, and biometric security , assisting visually impaired users.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe API'],
      status: 'Completed',
      gradient: 'from-green-500 to-teal-500',
      image: '/images/visionpay.jpg',
      link: 'https://github.com/adithiyaks/visionpay.git',
    },
    {
      title: 'LeafSense',
      description: 'AI & ML hackathon project built fully within small range, capable of detecting plant health using leaf analysis.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'Image Classification'],
      status: 'Hackathon Project (Completed)',
      gradient: 'from-green-400 to-lime-500',
      image: '/images/leafsense.png',
      link: 'https://github.com/JCKawin/LeafSense.git',
    },
    {
      title: 'JEE Tracker',
      description: 'A vibe-coded website designed for academics, helping students track study progress, schedules, and resources.',
      technologies: ['React', 'Node.js', 'Firebase', 'TailwindCSS'],
      status: 'Completed',
      gradient: 'from-orange-500 to-yellow-500',
      image: '/images/jee-tracker.png',
      link: 'https://github.com/adithiyaks/jee-tracker27.git',
    },
    {
      title: 'SKANY Chatbot',
      description: 'Hackathon project focused on chatbot UI design. Not a complete version but demonstrates conversational flow and UI design.',
      technologies: ['React', 'Figma', 'Frontend UI'],
      status: 'Hackathon Project (UI Only)',
      gradient: 'from-teal-500 to-cyan-500',
      image: '/images/skanny-chatbot.png',
      link: 'https://github.com/adithiyaks/CHATBOT-SKANY.git',
    },
    {
      title: 'Expense Tracker',
      description: 'A school project built completely using Python with Tkinter for UI and Matplotlib for data visualization of expenses.',
      technologies: ['Python', 'Tkinter', 'Matplotlib'],
      status: 'Completed',
      gradient: 'from-pink-400 to-purple-500',
      image: '/images/expensetracker.png',
      link: 'https://github.com/adithiyaks/EXPENSE-TRACKER.git',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Award Winning': return 'bg-yellow-500';
      case 'In Development': return 'bg-blue-500';
      case 'Prototype': return 'bg-green-500';
      case 'Completed': return 'bg-purple-500';
      case 'Hackathon Project (UI Only)': return 'bg-teal-500';
      case 'Hackathon Project (Completed)': return 'bg-lime-500';
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Wrapper = project.link ? 'a' : 'div';
            const disabled = !project.link;

            return (
              <Wrapper
                key={index}
                href={project.link}
                target={project.link ? '_blank' : undefined}
                rel={project.link ? 'noreferrer' : undefined}
                className={`block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl ${disabled ? 'cursor-not-allowed' : ''}`}
              >
                <div className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 transform group h-full ${disabled ? 'cursor-not-allowed opacity-95' : 'hover:border-purple-500 hover:scale-105'}`}>
                  {/* Gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  {/* Project Image */}
                  <div className="relative h-56 md:h-64 bg-gray-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-4">
                      {project.title}
                    </h3>

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
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;

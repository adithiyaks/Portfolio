import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SheSecure',
      description: 'Real-time SOS and community safety app designed to help women connect and respond quickly to emergency situations.',
      technologies: ['Flutter', 'Firebase', 'Real-time DB', 'GPS'],
      status: 'AWARD WINNING',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      role: 'Mobile Dev',
      team: 'Team of 3',
      type: 'Flutter App',
      image: '/images/shesecure.png',
    },
    {
      title: 'VisionX AI Smart Glasses',
      description: 'AI-powered smart glasses designed to assist visually impaired individuals with real-time navigation and obstacle detection.',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'IoT'],
      status: 'AWARD WINNING',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      role: 'AI Researcher',
      team: 'Team of 4',
      type: 'IoT + AI',
      image: '/images/visionx.jpg',
    },
    {
      title: 'Unmuted',
      description: 'Smart wearable tech that translates hand signs into real-time audio, bridging communication gaps for the deaf community.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'Arduino'],
      status: 'AWARD WINNING',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      role: 'Hardware & ML',
      team: 'Team of 4',
      type: 'Wearable Tech',
      image: '/images/unmuted.png',
    },
    {
      title: 'Crop Raiding Solutions',
      description: 'Working prototype that detects animals using AI and emits species-specific sound deterrents to protect farmland.',
      technologies: ['Python', 'Computer Vision', 'AI/ML', 'Arduino'],
      status: 'PROTOTYPE',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      role: 'Lead Developer',
      team: 'Solo',
      type: 'AgriTech AI',
      image: '/images/crop-raiding.png',
      link: 'https://github.com/adithiyaks/Crop-Raiding-Soluions.git',
    },
    {
      title: 'Memora Flashcards',
      description: 'Clean, minimal flashcards app helping users create, flip, and review cards for efficient learning and memory recall.',
      technologies: ['Flutter', 'Dart', 'Hive', 'GetX'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Mobile Dev',
      team: 'Solo',
      type: 'Open Source',
      image: '/images/memora.png',
      link: 'https://github.com/adithiyaks/Memora.git',
    },
    {
      title: 'Ecoverse Hackathon',
      description: "Platform providing complete details of ECOVERSE'26 hackathon, allowing participants to register and explore tracks.",
      technologies: ['React', 'Typescript', 'TailwindCSS', 'Chart.js'],
      status: 'WENT LIVE',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      role: 'Frontend Dev',
      team: 'Team of 3',
      type: 'Web Platform',
      image: '/images/ecoverse.png',
      link: 'https://github.com/Ayush021-Dev/ecoverse.git',
    },
    {
      title: 'Mediculture Healthcare',
      description: 'Smart healthcare app for instant medicine delivery, doctor consultations, and real-time emergency support.',
      technologies: ['Flutter', 'MongoDB', 'PostgreSQL', 'Node.js'],
      status: 'IN DEVELOPMENT',
      statusColor: 'bg-rose-50 text-rose-700 border-rose-200',
      role: 'Full-Stack Dev',
      team: 'Team of 4',
      type: 'Health App',
      image: '/images/mediculture.png',
      link: 'https://github.com/JCKawin/Mediculture.git',
    },
    {
      title: 'Who Un-followed Me!?',
      description: 'Privacy-first SPA that compares your Instagram followers vs following locally in the browser. No servers.',
      technologies: ['React', 'Node.js', 'TailwindCSS'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Solo Creator',
      team: 'Solo',
      type: 'Web Utility',
      image: '/images/who-unfollowed-me.png',
      link: 'https://github.com/adithiyaks/who-unfollowed-me.git',
    },
    {
      title: 'VisionPay',
      description: 'Proof-of-concept app enabling hands-free payments using voice and biometric security for visually impaired users.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe API'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Lead Developer',
      team: 'Team of 3',
      type: 'FinTech App',
      image: '/images/visionpay.jpg',
      link: 'https://github.com/adithiyaks/visionpay.git',
    },
    {
      title: 'LeafSense Plant AI',
      description: 'AI & ML project built fully within small range, capable of detecting plant health using leaf image analysis.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'OpenCV'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'ML Developer',
      team: 'Team of 3',
      type: 'Agri AI',
      image: '/images/leafsense.png',
      link: 'https://github.com/JCKawin/LeafSense.git',
    },
    {
      title: 'JEE Tracker',
      description: 'A vibe-coded website designed for academics, helping students track study progress, schedules, and resources.',
      technologies: ['React', 'Node.js', 'Firebase', 'TailwindCSS'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Web Developer',
      team: 'Solo',
      type: 'EduTech',
      image: '/images/jee-tracker.png',
      link: 'https://github.com/adithiyaks/jee-tracker27.git',
    },
    {
      title: 'SKANY Chatbot UI',
      description: 'Hackathon project focused on chatbot UI design, demonstrating conversational flow and interactive chat components.',
      technologies: ['React', 'Figma', 'Frontend UI'],
      status: 'UI PROTOTYPE',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      role: 'UI Designer',
      team: 'Team of 3',
      type: 'Chat Interface',
      image: '/images/skanny-chatbot.png',
      link: 'https://github.com/adithiyaks/CHATBOT-SKANY.git',
    },
    {
      title: 'Obstacle-Avoiding Car',
      description: 'Autonomous vehicle prototype using ultrasonic sensors and Arduino programming for intelligent navigation.',
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensors'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Hardware Dev',
      team: 'Solo',
      type: 'Robotics',
      image: 'https://i0.wp.com/srituhobby.com/wp-content/uploads/2021/04/blogss.jpg?w=1280&ssl=1',
    },
    {
      title: 'Full-Stack E-Commerce',
      description: 'Complete e-commerce solution built with Flutter, focusing on learning the mobile shopping lifecycle.',
      technologies: ['Flutter', 'Node.js', 'MongoDB'],
      status: 'IN DEVELOPMENT',
      statusColor: 'bg-rose-50 text-rose-700 border-rose-200',
      role: 'Mobile Dev',
      team: 'Solo',
      type: 'Shopping App',
      image: '/images/ecommerce.png',
    },
    {
      title: 'Expense Tracker',
      description: 'Python desktop application built with Tkinter for UI and Matplotlib for data visualization of financial expenses.',
      technologies: ['Python', 'Tkinter', 'Matplotlib'],
      status: 'COMPLETED',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200',
      role: 'Python Dev',
      team: 'Solo',
      type: 'Desktop App',
      image: '/images/expensetracker.png',
      link: 'https://github.com/adithiyaks/EXPENSE-TRACKER.git',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-3">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#7C3AED] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Product Designer and Researcher, blending productivity, experience, and play through design & code.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200/90 p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Image Container: Full object-cover fit */}
                <div className="w-full h-48 sm:h-52 bg-purple-50/50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center mb-6 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider border flex items-center space-x-1 shadow-sm ${project.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 group-hover:text-[#7C3AED] transition-colors tracking-tight mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Compact 3-Column Metadata Grid */}
                <div className="w-full bg-[#FAFAFA] border border-gray-200/70 rounded-xl p-3 mb-4 grid grid-cols-3 text-center">
                  <div>
                    <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Role</div>
                    <div className="text-[11px] font-bold text-gray-900 truncate">{project.role}</div>
                  </div>
                  <div className="border-x border-gray-200 px-1">
                    <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Team</div>
                    <div className="text-[11px] font-bold text-gray-900 truncate">{project.team}</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Type</div>
                    <div className="text-[11px] font-bold text-gray-900 truncate">{project.type}</div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full pt-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#18181B] text-white text-xs font-semibold rounded-xl hover:bg-black shadow-sm transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </a>
                ) : (
                  <div className="w-full py-2.5 bg-gray-100 text-gray-400 text-xs font-semibold rounded-xl flex items-center justify-center space-x-2 cursor-not-allowed">
                    <span>Internal Showcase</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { User, Heart, Target, Download, Linkedin, Github, Mail, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Eyebrow - HELLO header */}
        <div className="text-center mb-8">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gray-500 uppercase">
            HELLO
          </span>
        </div>

        {/* Profile Image Container - Zoomed-in well-framed portrait photo */}
        <div className="flex justify-center mb-10 relative">
          <div className="relative group">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/Formal Pic.jpg"
                alt="Adithiaya"
                className="w-full h-full object-cover scale-150 origin-[50%_25%] grayscale contrast-125 hover:grayscale-0 hover:scale-160 transition-all duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('/images/Formal Pic.jpg')) {
                    target.src = '/images/formal_pic.jpg';
                  } else if (target.src.includes('/images/formal_pic.jpg')) {
                    target.src = '/images/formal_pic.png';
                  } else if (target.src.includes('/images/formal_pic.png')) {
                    target.src = '/formal_pic.jpg';
                  } else if (target.src.includes('/formal_pic.jpg')) {
                    target.src = '/formal_pic.png';
                  } else {
                    target.src = 'https://avatars.githubusercontent.com/u/108927891?v=4';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            <span className="text-[#7C3AED] font-bold">I'm Adithiaya</span>, a full-stack developer and AI researcher passionate about crafting impactful solutions. Currently focusing on <strong className="text-gray-900 font-bold">Flutter Mobile Apps</strong>, <strong className="text-gray-900 font-bold">Python AI/ML</strong>, and <strong className="text-gray-900 font-bold">Hardware Innovations</strong>.
          </p>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            I thrive with <strong className="text-gray-800 font-semibold">research</strong>, creating solutions for real-world impact, and love to hear "that's awesome!" when someone spots a <strong className="text-gray-800 font-semibold">micro-animation</strong> or feature I made.
          </p>
        </div>

        {/* Button Group - Downloadable Resume + social icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href="/resume.pdf"
            download="Adithiaya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#18181B] text-white font-semibold rounded-2xl shadow-md hover:bg-black transition-all flex items-center space-x-2.5 transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/adithiaya-murugan-k-s"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-300 rounded-2xl flex items-center justify-center text-gray-800 font-bold hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-md transition-all"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://github.com/adithiyaks"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-300 rounded-2xl flex items-center justify-center text-gray-800 font-bold hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-md transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:adithiayamuruganks@gmail.com"
            className="w-12 h-12 bg-white border border-gray-300 rounded-2xl flex items-center justify-center text-gray-800 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:shadow-md transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Soft Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:border-purple-300 transition-all">
            <Heart className="w-8 h-8 text-[#7C3AED] mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Passion</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Creating meaningful applications that solve real-world problems for safety and accessibility.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:border-purple-300 transition-all">
            <Target className="w-8 h-8 text-[#7C3AED] mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building innovative end-to-end solutions combining mobile development, computer vision, and AI.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-gray-200/80 shadow-sm hover:border-purple-300 transition-all">
            <Sparkles className="w-8 h-8 text-[#7C3AED] mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Stats</h3>
            <div className="space-y-1.5 text-xs text-gray-600 font-medium">
              <div className="flex justify-between">
                <span>Experience:</span>
                <span className="text-gray-900 font-bold">2+ Years</span>
              </div>
              <div className="flex justify-between">
                <span>Projects:</span>
                <span className="text-gray-900 font-bold">15+ Completed</span>
              </div>
              <div className="flex justify-between">
                <span>Awards:</span>
                <span className="text-gray-900 font-bold">6 Wins</span>
              </div>
              <div className="flex justify-between">
                <span>Focus:</span>
                <span className="text-gray-900 font-bold">Mobile, Web & AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
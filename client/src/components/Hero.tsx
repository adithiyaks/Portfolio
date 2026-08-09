import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-[#FAFAFA] relative overflow-hidden">
      {/* Neo-brutalist grid background dots */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Figma Bounding Box Container for Name Logo */}
        <div className="inline-block relative mb-8 group cursor-pointer">
          {/* Figma Selection Box Frame */}
          <div className="relative p-4 sm:p-6 md:p-8 border-2 border-[#18A0FB] select-none transition-all duration-200">
            {/* Corner Handles */}
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 -left-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 -right-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 -left-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 -right-1.5 z-20" />
            {/* Mid Edge Handles */}
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute top-1/2 -left-1.5 -translate-y-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute top-1/2 -right-1.5 -translate-y-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 left-1/2 -translate-x-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-20" />

            {/* Huge Logo Text: 'adithiaya' with purple teardrop shape inside 'a' */}
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-black leading-none uppercase">
              adithiaya
            </h1>
          </div>
        </div>

        {/* Hero Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black max-w-3xl mx-auto leading-snug mb-10 tracking-tight">
          Full-Stack Developer and AI Enthusiast, blending productivity, experience, and play, through design and code.
        </h2>

        {/* Action Buttons: About Me & Projects (No static 'You' badge) */}
        <div className="relative flex flex-wrap gap-4 sm:gap-6 justify-center items-center mb-12">
          {/* About Me Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3.5 bg-white border-2 border-black text-black font-black text-lg tracking-wider uppercase rounded-none shadow-none hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150"
          >
            About Me
          </button>

          {/* Projects Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 bg-[#7C3AED] border-2 border-black text-white font-black text-lg tracking-wider uppercase rounded-none shadow-none hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150"
          >
            Projects
          </button>
        </div>

        {/* Social Icons row */}
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/adithiaya-murugan-k-s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-black text-black hover:bg-[#7C3AED] hover:text-white hover:shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:adithiayamuruganks@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-black text-black hover:bg-[#7C3AED] hover:text-white hover:shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/adithiyaks"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-black text-black hover:bg-[#7C3AED] hover:text-white hover:shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Down scroll button */}
      <button
        onClick={() => scrollToSection('about')}
        className="mt-14 text-black hover:text-[#7C3AED] transition-colors animate-bounce focus:outline-none"
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
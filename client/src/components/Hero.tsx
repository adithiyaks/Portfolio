import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const LETTERS = ['a', 'd', 'i', 't', 'h', 'i', 'a', 'y', 'a'];

const COLORS = [
  '#7C3AED', // purple
  '#2563EB', // blue
  '#DB2777', // pink
  '#059669', // emerald
  '#D97706', // amber
  '#DC2626', // red
  '#7C3AED', // purple
  '#0891B2', // cyan
  '#9333EA', // violet
];

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [letterPositions, setLetterPositions] = useState<{ x: number; y: number; rotation: number; color: string }[]>(
    LETTERS.map(() => ({ x: 0, y: 0, rotation: 0, color: '#000000' }))
  );
  const [isShaking, setIsShaking] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsIntroVisible(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse repel effect — letters are "afraid" of the cursor inside the bounding box
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    setMousePos({ x: mx, y: my });
  };

  const handleLetterHover = (i: number) => {
    setHoveredIndex(i);
    setLetterPositions(prev =>
      prev.map((p, idx) =>
        idx === i
          ? {
              x: (Math.random() - 0.5) * 6,
              y: -(8 + Math.random() * 10),
              rotation: (Math.random() - 0.5) * 20,
              color: COLORS[i],
            }
          : p
      )
    );
  };

  const handleLetterLeave = (i: number) => {
    setHoveredIndex(null);
    setLetterPositions(prev =>
      prev.map((p, idx) =>
        idx === i ? { x: 0, y: 0, rotation: 0, color: '#000000' } : p
      )
    );
  };

  const handleLetterClick = (i: number) => {
    setClickedIndex(i);
    // Scatter all letters on click
    setLetterPositions(prev =>
      prev.map((p, idx) => ({
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 30 - 10,
        rotation: (Math.random() - 0.5) * 45,
        color: COLORS[idx],
      }))
    );
    // Reset after animation
    setTimeout(() => {
      setLetterPositions(LETTERS.map(() => ({ x: 0, y: 0, rotation: 0, color: '#000000' })));
      setClickedIndex(null);
    }, 800);
  };

  const handleContainerClick = () => {
    if (hoveredIndex !== null) return; // only trigger scatter from outside letters
    setIsShaking(true);
    setLetterPositions(LETTERS.map((_, i) => ({
      x: (Math.random() - 0.5) * 30,
      y: -(Math.random() * 20),
      rotation: (Math.random() - 0.5) * 30,
      color: COLORS[i],
    })));
    setTimeout(() => {
      setLetterPositions(LETTERS.map(() => ({ x: 0, y: 0, rotation: 0, color: '#000000' })));
      setIsShaking(false);
    }, 700);
  };

  return (
    <section className={`min-h-screen pt-28 pb-16 flex flex-col items-center justify-center bg-[#FAFAFA] relative overflow-hidden transition-all duration-700 ease-out ${isIntroVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Grid background dots */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Figma Bounding Box Container */}
        <div
          className={`inline-block relative mb-8 transition-all duration-700 ease-out ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ filter: isIntroVisible ? 'blur(0px)' : 'blur(10px)' }}
          onClick={handleContainerClick}
          onMouseMove={handleMouseMove}
        >
          <div className="relative p-4 sm:p-6 md:p-8 border-2 border-[#18A0FB] select-none">
            {/* Corner & Edge Handles */}
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 -left-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 -right-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 -left-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 -right-1.5 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute top-1/2 -left-1.5 -translate-y-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute top-1/2 -right-1.5 -translate-y-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -top-1.5 left-1/2 -translate-x-1/2 z-20" />
            <div className="w-3 h-3 bg-white border-2 border-[#18A0FB] absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-20" />

            {/* Interactive Letter-by-Letter H1 */}
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase flex items-end justify-center">
              {LETTERS.map((letter, i) => (
                <span
                  key={i}
                  onMouseEnter={() => handleLetterHover(i)}
                  onMouseLeave={() => handleLetterLeave(i)}
                  onClick={(e) => { e.stopPropagation(); handleLetterClick(i); }}
                  style={{
                    display: 'inline-block',
                    color: letterPositions[i].color,
                    opacity: isIntroVisible ? 1 : 0,
                    filter: isIntroVisible ? 'blur(0px)' : 'blur(10px)',
                    transform: `translate(${letterPositions[i].x}px, ${letterPositions[i].y + (isIntroVisible ? 0 : 24)}px) rotate(${letterPositions[i].rotation}deg)`,
                    transition: clickedIndex !== null || isShaking
                      ? 'transform 0.6s cubic-bezier(.36,.07,.19,.97), color 0.3s ease, opacity 0.6s ease, filter 0.6s ease'
                      : 'transform 0.25s cubic-bezier(.36,.07,.19,.97), color 0.2s ease, opacity 0.6s ease, filter 0.6s ease',
                    transitionDelay: `${i * 80}ms`,
                    willChange: 'transform, color',
                    textShadow: hoveredIndex === i
                      ? `0 0 0 transparent, 4px 4px 0px ${COLORS[i]}55`
                      : 'none',
                  }}
                  className="inline-block origin-bottom"
                >
                  {letter}
                </span>
              ))}
            </h1>


          </div>
        </div>

        {/* Hero Tagline */}
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-black max-w-3xl mx-auto leading-snug mb-10 tracking-tight transition-all duration-700 ease-out delay-200 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ filter: isIntroVisible ? 'blur(0px)' : 'blur(8px)' }}
        >
          Full-Stack Developer and AI Enthusiast, blending productivity, experience, and play, through design and code.
        </h2>

        {/* Action Buttons */}
        <div
          className={`flex flex-wrap gap-4 sm:gap-6 justify-center items-center mb-12 transition-all duration-700 ease-out delay-300 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ filter: isIntroVisible ? 'blur(0px)' : 'blur(8px)' }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3.5 bg-white border-2 border-black text-black font-black text-lg tracking-wider uppercase rounded-none shadow-none hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150"
          >
            About Me
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 bg-[#7C3AED] border-2 border-black text-white font-black text-lg tracking-wider uppercase rounded-none shadow-none hover:shadow-[5px_5px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-150"
          >
            Projects
          </button>
        </div>

        {/* Social Icons row */}
        <div
          className={`flex justify-center items-center space-x-4 transition-all duration-700 ease-out delay-400 ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ filter: isIntroVisible ? 'blur(0px)' : 'blur(8px)' }}
        >
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
        className={`mt-14 text-black hover:text-[#7C3AED] transition-all duration-700 ease-out delay-500 focus:outline-none ${isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        style={{ filter: isIntroVisible ? 'blur(0px)' : 'blur(8px)' }}
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
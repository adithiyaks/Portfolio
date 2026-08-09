import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoverKind, setHoverKind] = useState<'button' | 'link' | null>(null);

  useEffect(() => {
    // Hide custom cursor on mobile / touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isButton =
        !!target &&
        (target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.getAttribute('role') === 'button');
      const isLink = !!target && (target.tagName === 'A' || target.closest('a'));

      if (isButton) {
        setHoverKind('button');
      } else if (isLink) {
        setHoverKind('link');
      } else {
        setHoverKind(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(2px, 2px)',
      }}
    >
      <div className="relative flex flex-col items-start">
        {/* Mouse pointer arrow icon */}
        <svg
          className={`w-8 h-8 text-black drop-shadow-sm transition-transform duration-150 ${
            hoverKind === 'link' ? 'rotate-[-12deg]' : ''
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>

        {/* Purple "You" Badge - pushed down below pointer tip */}
        <div
          className={`ml-3 mt-1 px-2.5 py-1 bg-[#7C3AED] text-white text-xs font-bold rounded-md shadow-md flex items-center justify-center transition-all duration-150 ${
            hoverKind === 'link' ? 'bg-[#6D28D9] shadow-lg' : ''
          }`}
        >
          You
        </div>
      </div>
    </div>
  );
};

export default CursorFollower;

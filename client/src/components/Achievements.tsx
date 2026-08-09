import React from 'react';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '3rd Prize - Unmuted',
      event: 'THREX Hackathon 2026',
      organization: 'SRM Institute of Science and Technology',
      date: '2026',
      description: 'Awarded 3rd prize for developing Unmuted — a smart wearable tech translating hand signs into real-time audio for the deaf and mute community.',
      rank: '3rd Rank',
      rankBg: 'bg-purple-50 text-[#7C3AED] border-purple-200',
    },
    {
      title: '2nd Prize - VisionX AI Smart Glasses',
      event: 'Vvortex Hackathon 2026',
      organization: 'VIT Chennai',
      date: '2026',
      description: 'Secured 2nd place for building VisionX overnight — AI smart glasses assisting blind individuals with computer vision navigation.',
      rank: '2nd Rank',
      rankBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      title: '3rd Prize - SheSecure App',
      event: "St. Joseph's College Hackathon 2K25",
      organization: "St. Joseph's College of Engineering",
      date: '2025',
      description: 'Awarded for developing an innovative safety application addressing real-world women safety concerns with real-time SOS.',
      rank: '3rd Rank',
      rankBg: 'bg-purple-50 text-[#7C3AED] border-purple-200',
    },
    {
      title: '1st Prize - Idea Pitching',
      event: "Torq'25",
      organization: "Loyola-ICAM College of Engineering and Technology",
      date: '2025',
      description: 'Awarded 1st place for pitching an innovative tech framework for women safety and emergency response.',
      rank: '1st Rank',
      rankBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      title: '1st Prize - UI Design',
      event: 'Noctivus Tech Symposium',
      organization: 'Velammal Engineering College',
      date: '2025',
      description: 'Recognized with 1st rank for exceptional user interface design skills, micro-interactions, and visual UX polish.',
      rank: '1st Rank',
      rankBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      title: '3rd Prize - Coding Battle',
      event: "Xplore'25",
      organization: "Loyola-ICAM College of Engineering and Technology",
      date: '2025',
      description: 'Secured 3rd place in Head to Head Algorithmic Coding Challenge clearing multiple rounds of problem-solving.',
      rank: '3rd Rank',
      rankBg: 'bg-purple-50 text-[#7C3AED] border-purple-200',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-3">
            RECOGNITION & HONORS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Achievements & Awards
          </h2>
          <div className="w-16 h-1 bg-[#7C3AED] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Recognitions earned in hackathons, product design, and algorithmic coding challenges.
          </p>
        </div>

        {/* Grid of Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200/90 p-8 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row cleanly aligned without gap */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start space-x-3 flex-1 min-w-0">
                    <div className="p-3 bg-purple-50 rounded-2xl text-[#7C3AED] shrink-0 mt-0.5">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#7C3AED] font-semibold text-xs mt-0.5">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border shrink-0 ${item.rankBg}`}>
                    {item.rank}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1.5 truncate pr-2">
                  <MapPin className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                  <span className="truncate">{item.organization}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-semibold text-gray-700 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '6+', label: 'Hackathon Prizes' },
            { number: '15+', label: 'Projects Completed' },
            { number: '4+', label: 'Tech Stacks Mastered' },
            { number: '100%', label: 'Passion & Innovation' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl border border-gray-200/90 text-center shadow-sm hover:border-purple-300 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#7C3AED] mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
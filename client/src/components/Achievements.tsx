import React from 'react';
import { Trophy, Award, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '1st Prize - UI Design',
      event: 'Noctivus Tech Symposium',
      organization: 'Velammal Engineering College',
      date: '2024',
      description: 'Recognized for exceptional user interface design skills and innovative approach to user experience.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      rank: '1st',
    },
    {
      title: '3rd Prize - SheSecure App',
      event: "St. Joseph's College Hackathon 2K25",
      organization: "St. Joseph's College",
      date: '2025',
      description: 'Awarded for developing an innovative safety application that addresses real-world women safety concerns.',
      icon: Award,
      color: 'from-orange-400 to-red-500',
      rank: '3rd',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Recognition for technical excellence and innovation in competitive environments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300`}></div>
                
                {/* Rank Badge */}
                <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                  {achievement.rank}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-purple-400 font-semibold">{achievement.event}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{achievement.organization}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: '2+', label: 'Major Awards', color: 'text-yellow-400' },
            { number: '10+', label: 'Projects Completed', color: 'text-blue-400' },
            { number: '4+', label: 'Technologies Mastered', color: 'text-green-400' },
            { number: '100%', label: 'Passion for Innovation', color: 'text-purple-400' },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
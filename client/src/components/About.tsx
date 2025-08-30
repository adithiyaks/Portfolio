import React from 'react';
import { User, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate developer with a diverse skill set spanning mobile development, 
              web technologies, and emerging AI applications. My journey in tech has been driven 
              by a desire to create solutions that address real-world problems.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              From building safety apps that protect women to developing agricultural solutions 
              that help farmers protect their crops, I believe technology should serve humanity 
              and make the world a better place.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Heart className="w-8 h-8 text-pink-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Passion</h4>
                <p className="text-gray-400 text-sm">Creating meaningful applications that solve real problems</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <Target className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">Goal</h4>
                <p className="text-gray-400 text-sm">Building innovative solutions with cutting-edge technology</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Projects:</span>
                    <span className="text-white">10+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Awards:</span>
                    <span className="text-white">2 Major Wins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Focus:</span>
                    <span className="text-white">Mobile & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
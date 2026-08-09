import React from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#7C3AED] uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-[#7C3AED] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Ready to collaborate on mobile apps, AI solutions, or visual UI design? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Channels</h3>

              <div className="space-y-6">
                <a
                  href="mailto:adithiayamuruganks@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors">
                      adithiayamuruganks@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/adithiaya-murugan-k-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      adithiaya-murugan-k-s
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/adithiyaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group p-3 rounded-2xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-800 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">GitHub</div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      adithiyaks
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Available For Column */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-200/90 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available For</h3>

              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  <span>Full-stack Mobile App Development (Flutter)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  <span>Web App Design & Frontend Engineering</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  <span>AI & Computer Vision Prototyping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  <span>UI/UX & Graphic Design (Figma)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  <span>Freelance & Technical Consulting</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="mailto:adithiayamuruganks@gmail.com"
                className="w-full py-4 bg-[#18181B] text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center space-x-2 shadow-md transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Say Hello!</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-gray-100 text-center text-xs font-semibold text-gray-400">
          © {new Date().getFullYear()} Adithiaya Murugan K S.
        </div>
      </div>
    </section>
  );
};

export default Contact;
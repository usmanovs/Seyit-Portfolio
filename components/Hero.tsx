
import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Open for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Building the next generation of <span className="gradient-text">Intelligent Systems</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              I'm <span className="text-white font-medium">Seyitbek Usmanov</span>, a Senior Software Engineer specializing in architecture, scalable apps, and AI-driven solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all hover:translate-y-[-2px] hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Follow Me</span>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, link: '#' },
                  { icon: Linkedin, link: '#' },
                  { icon: Twitter, link: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image Visualization */}
          <div className="flex-1 relative hidden lg:flex justify-center items-center">
            <div className="relative w-[450px] h-[450px]">
              {/* Animated Rings */}
              <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="absolute inset-12 rounded-[60px] overflow-hidden glass-panel border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.2)] group transition-transform hover:scale-105 duration-500">
                <img 
                  src="input_file_7.png" 
                  alt="Seyitbek Usmanov" 
                  className="w-full h-full object-cover brightness-110 contrast-105 object-[center_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Float Cards */}
              <div className="absolute -right-4 top-1/4 glass-panel px-4 py-2 rounded-2xl border border-white/10 float">
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">Expertise</p>
                <p className="text-sm font-semibold">AI Architect</p>
              </div>
              <div className="absolute -left-8 bottom-1/4 glass-panel px-4 py-2 rounded-2xl border border-white/10 float [animation-delay:-1.5s]">
                <p className="text-[10px] font-bold text-purple-400 uppercase tracking-tighter">Experience</p>
                <p className="text-sm font-semibold">Senior SWE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

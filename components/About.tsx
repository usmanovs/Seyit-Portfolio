
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600/20 rounded-full blur-2xl" />
              <div className="glass-panel p-3 rounded-[40px] border-slate-800 rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <img 
                  src="input_file_3.png" 
                  alt="Seyitbek Outdoors" 
                  className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-3xl border-slate-700 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">SU</div>
                  <div>
                    <p className="text-xs text-slate-400">Philosophy</p>
                    <p className="text-sm font-semibold text-white">"Innovation through simplicity"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">The Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering with <span className="gradient-text">Purpose</span> and Passion
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                With over a decade of experience in the software industry, I've seen technologies evolve from static web pages to sophisticated AI agents. My journey has always been driven by a singular goal: <span className="text-white font-medium">solving complex human problems with elegant code.</span>
              </p>
              <p>
                Whether it's architecting a distributed system on AWS or fine-tuning an LLM for specific business needs, I bring a holistic perspective that balances technical debt with rapid innovation.
              </p>
              <p>
                I thrive in environments where cross-functional collaboration is the norm and where "impossible" is just a starting point for exploration.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-white mb-1">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Projects Shipped</p>
              </div>
              <div className="hidden md:block">
                <p className="text-3xl font-bold text-white mb-1">Global</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Remote Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

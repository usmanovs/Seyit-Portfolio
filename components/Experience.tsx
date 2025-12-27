
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Professional <span className="text-indigo-500">Journey</span></h2>
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 before:content-[''] before:absolute before:left-5 before:top-2 before:bottom-[-48px] before:w-[2px] before:bg-slate-800 last:before:hidden">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center z-10 text-indigo-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                      <p className="text-indigo-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium bg-slate-800 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

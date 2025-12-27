
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const chartData = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Mastering the <span className="text-indigo-500">Modern Stack</span></h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              My technical foundation is built on years of architecting high-performance web systems. 
              I prioritize clean code, type safety, and scalable cloud patterns.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {['Frontend', 'Backend', 'Cloud', 'AI'].map(category => (
                <div key={category} className="space-y-4">
                  <h3 className="font-semibold text-white uppercase tracking-widest text-xs opacity-60">{category}</h3>
                  <div className="space-y-3">
                    {SKILLS.filter(s => s.category === category).map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-indigo-400">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[450px] h-[400px] flex items-center justify-center p-8 glass-panel rounded-3xl border border-slate-800">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

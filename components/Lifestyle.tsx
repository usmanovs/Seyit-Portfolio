
import React from 'react';
import { Camera, Music, Trophy, Mountain } from 'lucide-react';

const Lifestyle: React.FC = () => {
  const interests = [
    { title: 'Soccer', icon: Trophy, img: 'input_file_4.png', desc: 'Passionate about the beautiful game, on and off the pitch.' },
    { title: 'Nature', icon: Mountain, img: 'input_file_2.png', desc: 'Finding balance and inspiration in the great outdoors.' },
    { title: 'Culture', icon: Music, img: 'input_file_0.png', desc: 'Connecting with people and communities worldwide.' },
  ];

  return (
    <section className="py-24 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Beyond the Terminal</h2>
          <h3 className="text-4xl font-bold">Balance is <span className="text-indigo-400">Everything</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((item, i) => (
            <div key={i} className="group relative glass-panel rounded-[32px] overflow-hidden border-slate-800 transition-all hover:-translate-y-2 hover:border-indigo-500/30">
              <div className="h-80 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/80 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-300 opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;

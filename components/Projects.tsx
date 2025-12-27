
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-indigo-500">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">A selection of my recent works in AI integration, cloud infrastructure, and enterprise applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass-panel rounded-3xl overflow-hidden border border-slate-800 flex flex-col hover:border-indigo-500/50 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

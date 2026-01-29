
import React from 'react';
import TerminalLayout from '../components/TerminalLayout';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <TerminalLayout path="/projects">
      <div className="mb-8 animate-in slide-in-from-left duration-500">
        <div className="flex items-center gap-2 mb-2 font-mono">
          <span className="text-primary font-bold">guest@dev:~$</span>
          <span className="text-white">ls projects/ --detailed</span>
          <span className="w-2 h-4.5 bg-primary animate-blink inline-block ml-1 align-middle"></span>
        </div>
        <div className="text-[#8ecca3] text-sm opacity-60 font-mono">
          Reading directory contents... Found {PROJECTS_DATA.length} entries.
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px grow bg-terminal-border"></div>
        <h3 className="text-[#8ecca3] text-xs font-bold uppercase tracking-[0.2em] font-mono">Active_Deployments</h3>
        <div className="h-px grow bg-terminal-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mb-10 animate-in slide-in-from-bottom duration-700">
        <h3 className="text-white text-md font-bold leading-tight tracking-tight mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">data_object</span>
          Project Metadata (JSON format)
        </h3>
        <div className="bg-terminal-card border border-terminal-border p-4 rounded text-[11px] font-mono">
          <div className="flex flex-col gap-2">
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} className={`flex justify-between gap-x-6 py-2 ${idx !== PROJECTS_DATA.length - 1 ? 'border-b border-terminal-border/30' : ''}`}>
                <p className="text-primary">"{p.id}.json"</p>
                <p className="text-[#8ecca3] text-right truncate max-w-[50%]">
                  {JSON.stringify(p.metadata).replace(/"/g, '')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TerminalLayout>
  );
};

export default Projects;

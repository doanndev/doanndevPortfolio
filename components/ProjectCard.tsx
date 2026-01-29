
import React, { useState } from 'react';
import { Project } from '../types';
import AsciiCorner from './AsciiCorner';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-5 border border-terminal-border bg-terminal-card group transition-all duration-300 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AsciiCorner position="tl" hovered={isHovered} />
      <AsciiCorner position="tr" hovered={isHovered} />
      <AsciiCorner position="bl" hovered={isHovered} />
      <AsciiCorner position="br" hovered={isHovered} />

      <div 
        className="bg-cover bg-center rounded mb-4 aspect-video border border-terminal-border relative overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(0deg, rgba(6, 249, 87, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url("${project.image}")` 
        }}
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h4 className="text-primary text-lg font-bold mb-2 font-mono">{project.name}</h4>
      <p className="text-sm text-[#8ecca3] mb-4 leading-relaxed line-clamp-2 h-10">
        {project.description}
      </p>

      <div className="text-[11px] font-mono text-white/60 mb-6">
        <span className="text-primary">tech_stack:</span> [ {project.techStack.map(t => `"${t}"`).join(', ')} ]
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline">
            --github
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} className="text-[10px] uppercase font-bold tracking-widest text-primary hover:underline">
            --live-demo
          </a>
        )}
        {project.docsUrl && (
          <a href={project.docsUrl} className="text-[10px] uppercase font-bold tracking-widest text-white/50 hover:text-white transition-colors">
            --docs
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

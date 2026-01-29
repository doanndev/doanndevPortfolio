
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  exp: Experience;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, isLast }) => {
  return (
    <details className="group bg-transparent focus:outline-none" open>
      <summary className="flex cursor-pointer items-center gap-2 list-none focus:outline-none">
        <span className="material-symbols-outlined text-white/20 group-open:rotate-90 transition-transform text-sm select-none">
          chevron_right
        </span>
        <span className="text-white/40">{'{'}</span>
        <span className="text-syntax-key">"company"</span>: <span className="text-syntax-string">"{exp.company}"</span>,
        <span className="text-white/40">... {'}'}</span>
      </summary>
      <div className="pl-6 pt-1 pb-2 border-l border-white/10 ml-1.5 mt-1 space-y-1">
        <div>
          <span className="text-syntax-key">"role"</span>: <span className="text-syntax-string">"{exp.role}"</span>,
        </div>
        <div>
          <span className="text-syntax-key">"period"</span>: <span className="text-syntax-string">"{exp.period}"</span>,
        </div>
        <div>
          <span className="text-syntax-key">"achievements"</span>: [
          <div className="pl-6 text-syntax-string">
            {exp.achievements.map((a, i) => (
              <React.Fragment key={i}>
                "{a}"{i < exp.achievements.length - 1 ? ',' : ''}
                <br />
              </React.Fragment>
            ))}
          </div>
          ]
        </div>
      </div>
      <div className="pl-4 text-white/40">
        {'}'}{!isLast && ','}
      </div>
    </details>
  );
};

export default ExperienceItem;

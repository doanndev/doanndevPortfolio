
import React from 'react';
import TerminalLayout from '../components/TerminalLayout';
import ExperienceItem from '../components/ExperienceItem';
import { EXPERIENCE_DATA } from '../constants';

const ExperiencePage: React.FC = () => {
  return (
    <TerminalLayout path="/experience">
      <div className="mb-8 animate-in slide-in-from-left duration-500">
        <div className="flex items-center gap-2 mb-2 font-mono">
          <span className="text-primary font-bold">$</span>
          <h3 className="text-white tracking-wide text-lg font-medium leading-tight">cat experience.json</h3>
          <span className="w-2 h-4.5 bg-primary animate-blink inline-block ml-1 align-middle"></span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden space-y-4 font-mono text-sm mb-10 animate-in fade-in duration-700">
        <div className="text-white/40 leading-relaxed">[</div>
        <div className="pl-4 space-y-4">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <ExperienceItem 
              key={idx} 
              exp={exp} 
              isLast={idx === EXPERIENCE_DATA.length - 1} 
            />
          ))}
        </div>
        <div className="text-white/40">]</div>
      </div>

      {/* Statistical View Table */}
      <div className="mt-10 animate-in slide-in-from-bottom duration-1000">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-sm">table_rows</span>
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest font-mono">Statistical View</span>
        </div>
        <div className="overflow-hidden rounded border border-white/10 bg-black/20">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 text-primary/80 border-b border-white/10">
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider font-mono">Metric</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider font-mono">Value</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider font-mono">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 text-white/60 text-xs font-mono">Total Experience</td>
                <td className="px-4 py-3 text-primary text-xs font-medium font-mono">2.5 Years</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[8px] font-bold bg-primary/20 text-primary border border-primary/20">VERIFIED</span>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 text-white/60 text-xs font-mono">Core Languages</td>
                <td className="px-4 py-3 text-syntax-key text-xs font-medium font-mono">TypeScript, Python, Java</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[8px] font-bold bg-syntax-key/20 text-syntax-key border border-syntax-key/20">EXPERT</span>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 text-white/60 text-xs font-mono">Deployment Success</td>
                <td className="px-4 py-3 text-[#f1fa8c] text-xs font-medium font-mono">99.98%</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/20 text-[#f1fa8c] border border-yellow-500/20">CRITICAL</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TerminalLayout>
  );
};

export default ExperiencePage;

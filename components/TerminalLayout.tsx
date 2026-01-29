
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface TerminalLayoutProps {
  children: React.ReactNode;
  path: string;
}

const TerminalLayout: React.FC<TerminalLayoutProps> = ({ children, path }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background-dark font-display text-white pt-3 md:pt-5 lg:pt-8 flex flex-col items-center">
      {/* Decorative System Stats */}
      <div className="fixed bottom-0 left-0 p-4 text-primary/20 text-[10px] pointer-events-none uppercase tracking-tighter hidden lg:block">
        Kernel: 5.15.0-generic-v7l+ #1471 SMP <br/>
        Uptime: 247 days, 14:22:01
      </div>
      <div className="fixed top-0 right-0 p-4 text-primary/20 text-[10px] pointer-events-none uppercase tracking-tighter hidden lg:block text-right">
        Memory: 16GB LPDDR4 <br/>
        CPU: 4x ARM Cortex-A72 @ 1.5GHz
      </div>

      <div className="w-full max-w-[1000px] flex flex-col shadow-2xl shadow-primary/5 border border-primary/20 rounded-lg overflow-hidden bg-[#0d1b11] animate-in fade-in duration-700">
        {/* Terminal Header */}
        <header className="flex items-center justify-between border-b border-solid border-white/10 bg-terminal-header px-4 py-3 shrink-0">
          <div className="flex items-center gap-4 text-white">
            <div className="flex gap-1.5 mr-2">
              <div className="size-3 rounded-full bg-red-500/50 border border-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500/50 border border-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500/50 border border-green-500"></div>
            </div>
            <h2 className="text-white text-xs font-bold font-mono tracking-tight hidden sm:block">
              doanndev@portfolio:~{path}
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <nav className="flex items-center gap-4 md:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[10px] md:text-xs font-medium uppercase tracking-widest transition-all ${
                    location.pathname === item.path 
                      ? 'text-primary underline underline-offset-4 decoration-2' 
                      : 'text-white/60 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* <div className="hidden sm:flex gap-1.5 ml-4">
              <button className="flex items-center justify-center rounded h-6 w-6 bg-white/5 hover:bg-white/10 text-white/40">
                <span className="material-symbols-outlined text-[14px]">remove</span>
              </button>
              <button className="flex items-center justify-center rounded h-6 w-6 bg-red-500/20 hover:bg-red-500/40 text-red-400">
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div> */}
          </div>
        </header>

        {/* Breadcrumbs (Optional but in UI) */}
        <div className="flex flex-wrap items-center gap-2 px-6 py-2.5 bg-[#112618] border-b border-white/5 shrink-0">
          <Link to="/" className="text-primary/70 text-[10px] font-medium hover:text-primary uppercase">root</Link>
          <span className="text-white/20 text-[10px]">/</span>
          <span className="text-white text-[10px] font-medium uppercase">
            {path.slice(1) || 'home'}
          </span>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto min-h-[500px] max-h-[80vh] p-6 relative">
          {children}
        </main>

        {/* Terminal Footer */}
        <footer className="bg-primary/5 border-t border-primary/20 px-6 py-2.5 flex items-center justify-between text-[10px] font-bold text-primary/70 uppercase tracking-widest shrink-0">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">account_tree</span>
              <span>branch: main</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">sync</span>
              <span>synced</span>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="hidden md:inline">SYSTEM: ONLINE</span>
            <span>UTF-8</span>
            <span className="hidden sm:inline">LN 42, COL 1</span>
            <span>JSON</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TerminalLayout;

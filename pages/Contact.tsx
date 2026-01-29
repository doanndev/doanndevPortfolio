
import React, { useState } from 'react';
import TerminalLayout from '../components/TerminalLayout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    // Simulate packet routing
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <TerminalLayout path="/contact">
      {/* Dashed Workspace Container from Screenshot */}
      <div className="w-full h-full min-h-[550px] border-2 border-dashed border-blue-400/40 rounded-lg p-6 md:p-10 flex flex-col font-mono relative animate-in zoom-in-95 duration-500">
        
        {/* Terminal Header Content */}
        <div className="mb-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold text-lg">$</span>
            <span className="text-white text-lg font-bold tracking-tight">ssh contact-doanndev@portfolio</span>
          </div>

          <div className="space-y-2">
            <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">AI_ASSISTANT_V2</div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-md max-w-2xl">
              <p className="text-[#8ecca3] leading-relaxed text-sm">
                Welcome to the Neural Uplink. I am the terminal assistant. 
                I've aggregated the available contact protocols below. 
                How would you like to reach out to the developer today?
              </p>
            </div>
          </div>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Information Block */}
          <div className="space-y-6">
            <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">-- available_protocols</div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'EMAIL', value: 'doanndev@gmail.com', icon: 'alternate_email' },
                { label: 'GITHUB', value: 'github.com/doanndev', icon: 'hub' },
                { label: 'LINKEDIN', value: 'linkedin.com/in/doanndev', icon: 'person' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-terminal-card border border-terminal-border p-3 rounded group hover:border-primary/40 transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  <div>
                    <div className="text-[9px] text-white/30 font-bold">{item.label}</div>
                    <div className="text-primary text-xs font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Block */}
          <div className="space-y-6">
            <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">-- packet_transmission</div>
            
            {status === 'sent' ? (
              <div className="bg-primary/10 border border-primary/20 p-6 rounded flex flex-col items-center justify-center text-center space-y-3">
                <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                <div className="text-primary text-xs font-bold uppercase tracking-widest">Packet Delivered</div>
                <p className="text-[10px] text-white/60">Transmission receipt ID: 0xFD29A1</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-[10px] text-primary border border-primary/40 px-3 py-1 hover:bg-primary hover:text-background-dark transition-all"
                >
                  New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 bg-black/40 border border-terminal-border rounded px-3 py-2 focus-within:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-xs">$&gt;</span>
                    <input 
                      required
                      type="text"
                      placeholder="Identify yourself..."
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-transparent border-none focus:ring-0 text-primary text-xs w-full p-0 placeholder:text-primary/20"
                    />
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 border border-terminal-border rounded px-3 py-2 focus-within:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-xs">$&gt;</span>
                    <input 
                      required
                      type="email"
                      placeholder="Enter return address (email)..."
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-transparent border-none focus:ring-0 text-primary text-xs w-full p-0 placeholder:text-primary/20"
                    />
                  </div>
                  <div className="flex items-start gap-3 bg-black/40 border border-terminal-border rounded px-3 py-2 focus-within:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-xs mt-1">$&gt;</span>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Type message or command..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-transparent border-none focus:ring-0 text-primary text-xs w-full p-0 placeholder:text-primary/20 resize-none"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-2.5 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-background-dark transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Send_Packet'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer info from screenshot */}
        <div className="mt-auto flex flex-col items-center gap-3">
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
            NEURAL INTERFACE ACTIVE. POWERED BY GEMINI.
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="size-1.5 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        </div>
      </div>
    </TerminalLayout>
  );
};

export default Contact;

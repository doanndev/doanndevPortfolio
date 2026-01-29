import React, { useEffect, useState } from "react";
import TerminalLayout from "../components/TerminalLayout";
import { Progress } from "../components/ui/progress";
import { Link } from "react-router-dom";

// Module-level flag so animation only runs once per full page load.
// Navigating within the SPA (route changes) will not replay the animation.
let bootShown = false;
const Home: React.FC = () => {
  const COMMAND = "init --portfolio";
  const [displayed, setDisplayed] = useState("");
  const [stage, setStage] = useState(0); // 0 typing, 1 banner, 2 card1, 3 card2
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    let mounted = true;
    let idx = 0;

    const typeInterval = 45; // ms per character
    const startDelay = 200;

    const shouldAnimate = !bootShown;

    if (!shouldAnimate) {
      // animation already shown in this page load — reveal everything immediately
      setDisplayed(COMMAND);
      setStage(3);
      return;
    }

    const typeNext = () => {
      if (!mounted) return;
      idx += 1;
      setDisplayed(COMMAND.slice(0, idx));
      if (idx < COMMAND.length) {
        setTimeout(typeNext, typeInterval + Math.random() * 30);
      } else {
        // mark that we've shown the boot for this page load
        bootShown = true;
        // small pause then reveal sections sequentially
        setTimeout(() => {
          if (!mounted) return;
          // reveal banner
          setStage(1);
          // blink glow once
          setGlow(true);
          setTimeout(() => setGlow(false), 500);

          // reveal card1
          setTimeout(() => {
            if (!mounted) return;
            setStage(2);
            setGlow(true);
            setTimeout(() => setGlow(false), 450);
          }, 300);

          // reveal card2
          setTimeout(() => {
            if (!mounted) return;
            setStage(3);
            setGlow(true);
            setTimeout(() => setGlow(false), 450);
          }, 650);
        }, 320);
      }
    };

    const starter = setTimeout(typeNext, startDelay);

    return () => {
      mounted = false;
      clearTimeout(starter);
    };
  }, []);

  const sectionBase = "transition-all duration-500 ease-out opacity-0 translate-y-3";
  const sectionVisible = "opacity-100 translate-y-0";
  const glowClass = glow ? "ring-2 ring-green-400/20" : "";

  return (
    <TerminalLayout path="/">
      <div className="flex flex-col gap-10">
        {/* Banner Section */}
        <section className="animate-in slide-in-from-top duration-500">
          <div className="flex items-center gap-2 mb-4 font-mono">
            <span className="text-primary font-bold">guest@dev:~$</span>
            <span className="text-white">{displayed || COMMAND}</span>
            <span className="w-2 h-4.5 bg-primary animate-blink inline-block ml-1 align-middle"></span>
          </div>

          <div
            className={`border border-terminal-border p-8 bg-terminal-card/50 relative ${sectionBase} ${(stage >= 1) ? sectionVisible : ""} ${stage >= 1 ? glowClass : ""}`}
            style={{ transitionDelay: stage >= 1 ? "0ms" : "0ms" }}
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] text-white/10 font-mono select-none">
              ID: AF-7382-X
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter uppercase">
              software_engineer<span className="text-primary">.</span>
            </h1>
            <p className="text-lg text-[#8ecca3] max-w-2xl leading-relaxed mb-8 opacity-80">
              Specializing in building scalable software systems, clean
              architectures, and delivering reliable, maintainable code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 border border-white/20 text-white/60 text-xs font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`${sectionBase} ${stage >= 2 ? sectionVisible : ""} ${stage >= 2 ? glowClass : ""} p-6 border border-terminal-border bg-terminal-card/30`}
            style={{ transitionDelay: stage >= 2 ? "120ms" : "0ms" }}
          >
            <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
              System Status
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-white/40">System Status:</span>
                <span className="text-primary">Available</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/40">Code Efficiency:</span>
                <span className="text-primary">94.1%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/40">Current Focus:</span>
                <span className="text-syntax-key">
                  SCALABLE_SOFTWARE_SYSTEMS
                </span>
              </div>

              <Progress value={70} className="mt-4" />
            </div>
          </div>

          <div
            className={`${sectionBase} ${stage >= 3 ? sectionVisible : ""} ${stage >= 3 ? glowClass : ""} p-6 border border-terminal-border bg-terminal-card/30`}
            style={{ transitionDelay: stage >= 3 ? "240ms" : "0ms" }}
          >
            <h3 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">memory</span>
              Tech Core
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Redux",
                "TailwindCSS",
                "NestJS",
                "FastAPI",
                "Spring Boot",
                ".NET",
                "Flutter",
                "Docker",
                "Nginx",
                "GitHub Actions",
                "Hardhat",
                "Anchor",
                "Git"
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TerminalLayout>
  );
};

export default Home;

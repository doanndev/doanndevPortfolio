
import React from 'react';

interface AsciiCornerProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
  hovered?: boolean;
}

const AsciiCorner: React.FC<AsciiCornerProps> = ({ position, hovered }) => {
  const positionClasses = {
    tl: '-top-1.5 -left-1.5',
    tr: '-top-1.5 -right-1.5',
    bl: '-bottom-1.5 -left-1.5',
    br: '-bottom-1.5 -right-1.5',
  };

  return (
    <div className={`
      absolute size-2.5 flex items-center justify-center font-mono text-[10px] z-10
      bg-background-dark border border-terminal-border transition-all duration-300
      ${positionClasses[position]}
      ${hovered ? 'border-primary text-primary shadow-[0_0_5px_rgba(6,249,87,0.5)]' : 'text-terminal-border'}
    `}>
      +
    </div>
  );
};

export default AsciiCorner;

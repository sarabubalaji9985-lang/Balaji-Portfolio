import React, { useRef, useState } from 'react';

export const MagneticButton = ({ children, className = '', onClick, href, download, target, rel, strength = 0.25, ...props }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    // Limit displacement to max 6px to avoid distracting jumps
    const clampedX = Math.max(-6, Math.min(6, x));
    const clampedY = Math.max(-6, Math.min(6, y));
    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out'
      }}
      className={`inline-flex items-center justify-center transition-colors ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

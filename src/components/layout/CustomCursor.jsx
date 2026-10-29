import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || prefersReducedMotion) {
      return;
    }

    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('card-3d')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, prefersReducedMotion]);

  if (!isVisible || prefersReducedMotion) return null;

  return (
    <>
      {/* Precision Oceanic Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
          background: '#1A3D63',
          boxShadow: '0 0 8px #4A7FA7',
        }}
      />
      {/* Outer Follow Ring (Ice Blue Aura) */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-transform duration-100 ease-out"
        style={{
          width: isHovering ? 46 : 28,
          height: isHovering ? 46 : 28,
          transform: `translate3d(${trailingPos.x - (isHovering ? 23 : 14)}px, ${trailingPos.y - (isHovering ? 23 : 14)}px, 0) scale(${isHovering ? 1.15 : 1})`,
          border: isHovering ? '1.5px solid #4A7FA7' : '1px solid #B3CFE5',
          background: isHovering ? 'rgba(179, 207, 229, 0.25)' : 'rgba(179, 207, 229, 0.08)',
          boxShadow: isHovering ? '0 0 20px rgba(74, 127, 167, 0.3)' : 'none',
        }}
      />
    </>
  );
};

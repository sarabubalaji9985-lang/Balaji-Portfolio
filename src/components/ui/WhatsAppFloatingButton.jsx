import React, { useState } from 'react';
import { aiVoice } from '../../utils/voiceAssistant';
import { PERSONAL_INFO } from '../../utils/constants';

export const WhatsAppFloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phone = PERSONAL_INFO.rawPhone || '9030545655';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Balaji,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20web%20project.`;

  const handleClick = () => {
    aiVoice.speak('Connecting with Balaji on WhatsApp.');
  };

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expandable Text Badge (Desktop) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-2.5 mr-2 rounded-full bg-white dark:bg-[#0c1f3d] text-ink-primary dark:text-[#F6FAFD] border border-emerald-500/30 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-mono font-medium whitespace-nowrap">
          Chat with Balaji
        </span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat with Balaji Sarabu on WhatsApp"
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Pulsing ambient aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping opacity-60 pointer-events-none" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-[#0A1931] rounded-full shadow-xs" />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.151-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.079 2.914 1.23 3.115c.15.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.229 1.377.197 1.895.12.577-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.467 7.618h-.005a9.98 9.98 0 01-5.088-1.39l-.365-.216-3.782.992 1.01-3.687-.238-.378a9.96 9.96 0 01-1.536-5.32c0-5.514 4.486-10 10-10 2.673 0 5.185 1.041 7.076 2.932a9.94 9.94 0 012.929 7.068c0 5.515-4.486 10-10 10zm8.485-18.485C18.239 1.258 15.208.2 12.005.2c-6.508 0-11.8 5.293-11.8 11.802 0 2.08.543 4.111 1.575 5.903L.2 23.8l6.035-1.583a11.77 11.77 0 005.77 1.488h.005c6.508 0 11.8-5.292 11.8-11.801 0-3.153-1.228-6.121-3.32-8.389z" />
        </svg>
      </a>
    </aside>
  );
};


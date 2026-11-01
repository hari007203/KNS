import React from 'react';
import { Sparkles } from 'lucide-react';

export const Loader = ({ onFinish }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#07111F] flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-out">
      <div className="max-w-md w-full text-center space-y-8 animate-[fadeIn_0.8s_ease-out_forwards]">
        
        {/* Elegant Line Art Simulated Architectural Reveal */}
        <div className="relative h-44 w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outlines of a building growing in size */}
            <div className="w-32 h-32 border-2 border-dashed border-[#D6B36A]/30 rounded-lg animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-28 h-28 border border-[#D6B36A]/60 rounded animate-pulse" />
            <div className="absolute w-20 h-20 border-2 border-[#B88A3B] rotate-45 flex items-center justify-center">
              <span className="text-2xl font-serif text-[#D6B36A] rotate-[-45deg] font-bold">KNS</span>
            </div>
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-3">
          <h1 className="text-3xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D6B36A] to-white font-semibold">
            KNS CONSTRUCTION
          </h1>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D6B36A] font-light">
            BUILDING DREAMS, BRICK BY BRICK
          </p>
        </div>

        {/* Dynamic visual loading status */}
        <div className="w-full bg-[#101318] h-[2px] rounded-full overflow-hidden relative">
          <div className="bg-gradient-to-r from-[#B88A3B] to-[#D6B36A] h-full animate-[loading-bar_3.5s_ease-in-out_infinite]" style={{ width: '100%' }} />
        </div>

        {/* Action button to skip cinematic experience immediately */}
        <div className="pt-4 flex justify-center">
          <button 
            type="button"
            onClick={onFinish} 
            className="px-6 py-2 border border-[#D6B36A]/40 text-[#D6B36A] text-xs uppercase tracking-widest rounded-full hover:bg-[#D6B36A] hover:text-[#07111F] transition-all duration-300 transform hover:scale-105"
          >
            Skip Cinematic View
          </button>
        </div>
      </div>
    </div>
  );
};
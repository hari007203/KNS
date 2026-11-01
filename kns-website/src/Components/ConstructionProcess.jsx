import React, { useState } from 'react';
import { Layers, Hammer } from 'lucide-react';
import { CONSTRUCTION_STAGES } from '../data/constants';

export const ConstructionProcess = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">TURNKEY PROCESS VISUALIZATION</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">The KNS Construction Pipeline</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Select each step below to dynamically view how your premium building evolves from structural base work to completed luxury elevation.
        </p>
      </div>

      {/* Pipeline Assembly Interaction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Step Blocks */}
        <div className="lg:col-span-4 space-y-2">
          {CONSTRUCTION_STAGES.map((item, index) => (
            <button
              key={item.stage}
              onClick={() => setSelectedStage(index)}
              className={`w-full text-left p-4 rounded transition-all duration-300 border flex items-center space-x-4 ${
                selectedStage === index 
                  ? 'bg-gradient-to-r from-[#101318] to-[#07111F] border-[#D6B36A] shadow-md' 
                  : 'bg-[#101318]/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                selectedStage === index 
                  ? 'bg-[#D6B36A] text-[#07111F] border-[#D6B36A]' 
                  : 'bg-[#07111F] text-gray-400 border-gray-800'
              }`}>
                0{item.stage}
              </div>
              <div>
                <span className={`block text-xs uppercase tracking-wider font-semibold ${selectedStage === index ? 'text-[#D6B36A]' : 'text-gray-300'}`}>
                  {item.title}
                </span>
                <span className="text-[10px] text-gray-500 block mt-0.5">
                  Progress: {item.progress}%
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Building Assembly Canvas (CSS Vector Architecture Mockup) */}
        <div className="lg:col-span-8 bg-[#101318] border border-[#D6B36A]/20 rounded-lg p-6 space-y-6 relative min-h-[420px] flex flex-col justify-between overflow-hidden">
          
          <div className="absolute top-2 right-4 text-xs font-mono text-gray-600 uppercase tracking-widest flex items-center space-x-2">
            <Layers className="w-3.5 h-3.5 text-[#D6B36A] animate-spin" />
            <span>Interactive Phase Vector v1.07</span>
          </div>

          {/* Isometric Layer Stack Area */}
          <div className="h-44 w-full relative flex items-center justify-center border-b border-[#D6B36A]/10 pb-4">
            
            {/* Ground Base */}
            <div className="absolute bottom-6 w-72 h-4 bg-gray-900 border-t border-gray-800 rounded transform rotate-[-4deg] flex items-center justify-center">
              <span className="text-[8px] text-gray-600">STABILIZED SOIL PLOT FOUNDATION</span>
            </div>

            {/* Stage-by-Stage Construction Overlays */}
            {selectedStage >= 0 && (
              <div className="absolute bottom-10 w-64 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded border border-gray-600 animate-fade-in" />
            )}

            {selectedStage >= 1 && (
              <div className="absolute bottom-12 w-60 h-8 border-x-4 border-[#B88A3B]/40 bg-[#101318] flex justify-between px-8 text-gray-500 animate-[bounce_0.5s_ease-out]">
                <div className="w-1.5 h-full bg-[#B88A3B]" />
                <div className="w-1.5 h-full bg-[#B88A3B]" />
                <div className="w-1.5 h-full bg-[#B88A3B]" />
              </div>
            )}

            {selectedStage >= 2 && (
              <div className="absolute bottom-20 w-64 h-3 bg-gray-800 border-y border-[#D6B36A]/20 flex items-center justify-center text-[8px] text-gray-400">
                RCC CAST SLAB L1
              </div>
            )}

            {selectedStage >= 3 && (
              <div className="absolute bottom-23 w-60 h-10 border-x border-[#D6B36A]/40 bg-gradient-to-r from-[#101318] via-red-950/20 to-[#101318] flex items-center justify-center text-xs text-orange-500/80">
                🧱 BRICK MASONRY COMPLETED
              </div>
            )}

            {selectedStage >= 4 && (
              <div className="absolute bottom-[132px] w-64 h-2.5 bg-gray-800 border-y border-[#D6B36A]/40 flex items-center justify-center text-[7px] text-[#D6B36A]">
                ROOF SLAB &amp; CONDUITS
              </div>
            )}

            {selectedStage >= 5 && (
              <div className="absolute bottom-[142px] w-56 h-12 border-x-2 border-dashed border-[#D6B36A] flex justify-around items-center bg-sky-950/20 text-[#D6B36A] font-serif text-[10px]">
                <span>INTERIOR FINISHES</span>
              </div>
            )}

            {selectedStage >= 6 && (
              <div className="absolute top-2 w-48 text-center text-xs text-[#D6B36A] font-mono font-bold bg-[#07111F] p-1 border border-[#D6B36A] rounded-full shadow-lg">
                ✨ PREMIUM ELEVATION DELIVERED ✨
              </div>
            )}

          </div>

          {/* Details & Specs Area */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#D6B36A]/10 text-[#D6B36A] font-bold">
                STAGE 0{CONSTRUCTION_STAGES[selectedStage].stage}
              </span>
              <h4 className="text-lg font-serif text-white uppercase tracking-wider">
                {CONSTRUCTION_STAGES[selectedStage].title}
              </h4>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-light">
              {CONSTRUCTION_STAGES[selectedStage].description}
            </p>

            <div className="pt-2">
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                Material Quality Standard of this Phase:
              </span>
              <div className="flex flex-wrap gap-2">
                {CONSTRUCTION_STAGES[selectedStage].materials.map((mat, idx) => (
                  <span key={idx} className="bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-[10px] text-gray-300">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
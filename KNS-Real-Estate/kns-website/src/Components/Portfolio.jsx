import React from 'react';
import { MapPin } from 'lucide-react';

export const Portfolio = ({ 
  properties, 
  setActiveTab, 
  setContactService, 
  setContactMessage 
}) => {

  const handlePropertyInquiry = (prop) => {
    setContactService(`Inquiry: ${prop.title}`);
    setContactMessage(
      `Hi Kiran, I am inquiring about the materials, layout details, and availability for "${prop.title}" in ${prop.location}. Please share pricing or project details.`
    );
    setActiveTab('contact');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">AUTHENTIC PORTFOLIO TRACKER</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">Genuine Local Projects Showcase</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          No false architectural claims. Explore real physical constructions and communities managed by KNS in Hyderabad.
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <div 
            key={prop.id} 
            className="bg-[#101318] border border-[#D6B36A]/20 rounded-lg overflow-hidden group hover:border-[#D6B36A]/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Cover Photo */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-2 left-2 bg-[#07111F]/90 backdrop-blur-sm border border-[#D6B36A]/40 text-[#D6B36A] text-[9px] uppercase tracking-wider px-2 py-1 rounded">
                  {prop.type}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-[11px] text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#D6B36A]" />
                  <span>{prop.location}</span>
                </div>

                <h3 className="text-lg font-serif text-white uppercase tracking-wider">
                  {prop.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {prop.area} framework incorporating state-approved architectural planning specs.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {prop.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#07111F] text-[#D6B36A] border border-[#D6B36A]/10 text-[9px] tracking-wider px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-gray-800/40 mt-4 flex justify-between items-center">
              <span className="text-[10px] text-[#D6B36A] uppercase font-mono font-bold tracking-widest">
                {prop.status}
              </span>
              <button
                type="button"
                onClick={() => handlePropertyInquiry(prop)}
                className="text-xs uppercase tracking-widest text-white border-b border-[#D6B36A] pb-0.5 hover:text-[#D6B36A] transition-colors"
              >
                Inquire details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Apartment Segment Highlight */}
      <div className="bg-[#101318] border border-[#D6B36A]/20 rounded-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6B36A] bg-[#D6B36A]/10 border border-[#D6B36A]/30 px-3 py-1 rounded-full">
            KONDAPUR FEATURED BUILD
          </span>

          <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
            Raghavendra Colony Premium Apartment
          </h3>

          <p className="text-xs text-gray-300 leading-relaxed font-light">
            A high-end multi-family building with 10 pristine flats. Each unit contains spacious East-facing 1,650 Sq.Ft built-up profiles on a solid 600 Sq. Yards clear-title plot.
          </p>

          <div className="space-y-2 text-xs text-gray-400">
            <div className="flex justify-between py-1 border-b border-gray-800">
              <span>Config</span>
              <span className="text-white font-mono">Premium 3BHK Series</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-800">
              <span>Plumbing Grid</span>
              <span className="text-white font-mono">Ashirvad CPVC Grid</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-800">
              <span>Power Feed</span>
              <span className="text-white font-mono">Finolex Multi-conduits</span>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="button"
              onClick={() => {
                setContactService("Kondapur 3BHK Apartment Walkthrough");
                setContactMessage("Please share the structural specs, payment schedules, and map location to plan a walkthrough for the Kondapur Premium Apartment.");
                setActiveTab('contact');
              }}
              className="px-6 py-3 bg-[#D6B36A] hover:bg-[#B88A3B] text-[#07111F] text-xs uppercase tracking-widest font-bold rounded shadow transition-all duration-300"
            >
              Schedule Direct Walkthrough
            </button>
          </div>
        </div>

        {/* Isometric Drawing Line Overlay Box */}
        <div className="lg:col-span-7 bg-[#07111F] border border-gray-800 rounded-lg p-6 h-64 relative overflow-hidden flex flex-col justify-between">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="w-80 h-80 border border-[#D6B36A]/20 rotate-45" />
            <div className="absolute w-56 h-56 border-x border-[#D6B36A]/20" />
          </div>

          <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex justify-between">
            <span>Structural Core Blueprint</span>
            <span>ID: KNS-KND-09</span>
          </div>

          <div className="space-y-2 text-center relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#D6B36A] block">Premium Layout Plan</span>
            <div className="h-[2px] w-24 bg-[#D6B36A] mx-auto" />
            <p className="text-[11px] text-gray-400 max-w-sm mx-auto pt-2">
              Featuring a robust column depth alignment engineered explicitly to sustain heavy multi-tier loads with premium structural safety coefficients.
            </p>
          </div>

          <div className="flex justify-between text-[10px] font-mono text-gray-500">
            <span>Facing: East</span>
            <span>Setbacks: Municipal Compliant</span>
          </div>

        </div>

      </div>

    </div>
  );
};
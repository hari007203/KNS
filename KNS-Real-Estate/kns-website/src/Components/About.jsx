import React from 'react';
import { Check } from 'lucide-react';

export const About = ({ setActiveTab }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16 py-12 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-[#D6B36A]/20 pb-8 space-y-3 text-center md:text-left">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">PROPRIETOR: KIRAN GAJBHARE</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">We Don't Just Build Structures. We Build Trust.</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 text-gray-300 text-sm leading-relaxed font-light">
          <p>
            Based in the tech-corridor enclave of <span className="text-white font-medium">Kondapur, Hyderabad</span>, KNS Construction &amp; Real Estate is an emblem of transparency and solid technical execution in Telangana's housing ecosystem.
          </p>
          <p>
            We understand that creating a home is a lifetime's emotional and financial blueprint. Hence, we maintain an uncompromising stance regarding verified clear titles, municipal legal checks, foundation concrete mixtures, and structural steel density parameters.
          </p>
          <p className="border-l-2 border-[#D6B36A] pl-4 italic text-[#D6B36A] text-xs">
            "Our design philosophy is anchored in modern optimization—maximizing cross-ventilation, balancing natural sunlight pathways, and implementing sturdy structural columns engineered to last generations."
          </p>
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="bg-[#101318] p-4 rounded border border-[#D6B36A]/10">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1">RAGHAVENDRA COLONY</span>
              <span className="text-gray-400 text-[11px]">Kondapur headquarter for consultations.</span>
            </div>
            <div className="bg-[#101318] p-4 rounded border border-[#D6B36A]/10">
              <span className="block text-white font-bold text-xs uppercase tracking-wider mb-1">TURNKEY DELIVERY</span>
              <span className="text-gray-400 text-[11px]">No structural or material pricing tricks.</span>
            </div>
          </div>
        </div>

        {/* Brand Strength Block */}
        <div className="bg-[#101318] p-8 rounded-lg border border-[#D6B36A]/15 space-y-6">
          <h3 className="text-lg font-serif text-[#D6B36A] uppercase tracking-wider border-b border-[#D6B36A]/10 pb-3">
            Core Foundations of Our Brand
          </h3>

          <div className="space-y-4">
            {[
              { title: "Architectural Planning & 2D/3D Mockups", desc: "Detailed structural, electrical, and routing blueprints engineered before a single brick is laid." },
              { title: "Independently Verified Soil & Steel Load Tests", desc: "We deploy standard RCC Columns structured perfectly for Telangana's red and rocky sub-soils." },
              { title: "Strict Adherence to Set-backs", desc: "No illegal encroaching. Every open plot boundary is carefully matched to Sangareddy & Hyderabad master-plans." },
              { title: "Complete Interior Finishings Options", desc: "Premium modular cabinets, elegant stair rails, modular kitchen layouts with high-quality woodwork." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs">
                <div className="p-1 rounded bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1 uppercase tracking-wider">{item.title}</span>
                  <span className="text-gray-400 leading-relaxed font-light">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D6B36A]/10 text-center">
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 bg-transparent border border-[#D6B36A] hover:bg-[#D6B36A] hover:text-[#07111F] text-xs uppercase tracking-widest text-[#D6B36A] rounded font-bold transition-all duration-300"
            >
              Schedule Office Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
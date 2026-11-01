import React from 'react';
import { Sparkles, Building2, Calculator, Hammer, ArrowRight } from 'lucide-react';

export const Hero = ({ setActiveTab }) => {
  return (
    <div className="space-y-24 animate-fade-in">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#101318] via-[#07111F] to-[#040912] py-20 px-4">
        
        {/* Cinematic Background Architectural Visual Accent */}
        <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border border-[#D6B36A]/10 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-[#D6B36A]/5 rounded-full" />
          <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] border border-[#D6B36A]/15 rounded-full animate-pulse" />
        </div>

        {/* Glowing Ambient Light Lines */}
        <div className="absolute top-1/4 left-1/2 w-0.5 h-64 bg-gradient-to-b from-transparent via-[#D6B36A]/30 to-transparent transform -translate-x-1/2" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Visual Label */}
          <div className="inline-flex items-center space-x-2 bg-[#D6B36A]/10 border border-[#D6B36A]/30 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] text-[#D6B36A] animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PREMIUM HYDERABAD BUILDER &amp; REALTY DEVELOPER</span>
          </div>

          {/* Heavy Cinematic Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.1] font-bold tracking-tight text-white uppercase">
            Building Dreams. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B36A] via-[#F4F0E8] to-[#B88A3B]">
              Creating Landmarks.
            </span>
          </h1>

          {/* Subtext description */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed tracking-wide">
            From thoughtfully customized villas to meticulously aligned premium plots, <span className="text-white font-medium">KNS Construction &amp; Real Estate</span> brings together unparalleled engineering craft, verified title transfers, and enduring trust.
          </p>

          {/* Action Button Array */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setActiveTab('villa-community')} 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#B88A3B] to-[#D6B36A] text-[#07111F] text-xs uppercase tracking-widest font-bold rounded-lg hover:shadow-lg hover:shadow-[#D6B36A]/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Plot Masterplan (8.25 Ac)
            </button>
            <button 
              onClick={() => setActiveTab('construction')} 
              className="w-full sm:w-auto px-8 py-4 border border-[#D6B36A] text-white text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              View Our 3D Process Stages
            </button>
          </div>

          {/* Trust Metrics Block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-[#D6B36A]/10 text-center">
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-[#D6B36A] font-bold">Ganapatiguda</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider mt-1">100 Premium Plots Project</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-[#D6B36A] font-bold">Raghavendra</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider mt-1">Kondapur 3BHKs Status</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-[#D6B36A] font-bold">₹1,600+</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider mt-1">Construction Sq.Ft starting rate</span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-serif text-[#D6B36A] font-bold">Turnkey</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider mt-1">Complete design &amp; handover</span>
            </div>
          </div>

        </div>
      </section>

      {/* Teaser Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#101318] p-8 rounded-lg border border-[#D6B36A]/15 relative overflow-hidden group hover:border-[#D6B36A]/45 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B36A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D6B36A]/10 transition-colors" />
            <Building2 className="w-8 h-8 text-[#D6B36A] mb-6" />
            <h3 className="text-lg font-serif tracking-widest uppercase mb-3 text-white">Interactive Site Plan</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Meticulously explore individual plot availability matrices within our signature Ganapatiguda 8.25-Acre Gated Community in Patancheru.
            </p>
            <button 
              onClick={() => setActiveTab('villa-community')}
              className="text-xs uppercase tracking-widest text-[#D6B36A] font-semibold flex items-center space-x-1 hover:text-white transition-colors"
            >
              <span>Launch Masterplan Explorer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#101318] p-8 rounded-lg border border-[#D6B36A]/15 relative overflow-hidden group hover:border-[#D6B36A]/45 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B36A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D6B36A]/10 transition-colors" />
            <Calculator className="w-8 h-8 text-[#D6B36A] mb-6" />
            <h3 className="text-lg font-serif tracking-widest uppercase mb-3 text-white">Dynamic Cost Estimator</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Input your target square footage, select customized tiers, and receive realistic building expense breakdowns instantly.
            </p>
            <button 
              onClick={() => setActiveTab('calculator')}
              className="text-xs uppercase tracking-widest text-[#D6B36A] font-semibold flex items-center space-x-1 hover:text-white transition-colors"
            >
              <span>Start Estimating</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#101318] p-8 rounded-lg border border-[#D6B36A]/15 relative overflow-hidden group hover:border-[#D6B36A]/45 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B36A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D6B36A]/10 transition-colors" />
            <Hammer className="w-8 h-8 text-[#D6B36A] mb-6" />
            <h3 className="text-lg font-serif tracking-widest uppercase mb-3 text-white">Turnkey Material Spec</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Review our selected cement grade, sand formulations, reinforced columns, and interior designs that define the KNS quality benchmark.
            </p>
            <button 
              onClick={() => setActiveTab('construction')}
              className="text-xs uppercase tracking-widest text-[#D6B36A] font-semibold flex items-center space-x-1 hover:text-white transition-colors"
            >
              <span>Check Material Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
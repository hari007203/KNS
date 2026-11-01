import React, { useState } from 'react';
import { Compass, Maximize2 } from 'lucide-react';

export const VillaCommunity = ({ 
  plots, 
  setActiveTab, 
  setContactService, 
  setContactMessage 
}) => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  const handlePlotEnquiry = (plot) => {
    setContactService(`Plot Booking Inquire: Plot #${plot.id}`);
    setContactMessage(
      `Hi Kiran, I want to inquire about availability, final cost, and schedule a site visit for Plot Number ${plot.id} (${plot.size}, ${plot.dimensions}) at Ganapatiguda, Pocharam Mandal.`
    );
    setActiveTab('contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">GANAPATIGUDA, POCHARAM VILLAGE SITE EXCURSION</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">8.25-Acre Gated Master Layout</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Select from our 100 fully aligned 250 Sq.Yd plots. Instantly review color-coded availability statuses and submit a direct purchase enquiry.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-[#101318] p-4 rounded border border-gray-800">
          <span className="block text-gray-400 text-[10px] uppercase">Total Size</span>
          <span className="block text-lg font-bold text-[#D6B36A] mt-1">8.25 Acres</span>
        </div>
        <div className="bg-[#101318] p-4 rounded border border-gray-800">
          <span className="block text-gray-400 text-[10px] uppercase">Internal Roads</span>
          <span className="block text-lg font-bold text-[#D6B36A] mt-1">40ft &amp; 30ft Roads</span>
        </div>
        <div className="bg-[#101318] p-4 rounded border border-gray-800">
          <span className="block text-gray-400 text-[10px] uppercase">Plot Dimension</span>
          <span className="block text-lg font-bold text-[#D6B36A] mt-1">30 × 75 Feet</span>
        </div>
        <div className="bg-[#101318] p-4 rounded border border-gray-800">
          <span className="block text-gray-400 text-[10px] uppercase">Status Tracker</span>
          <div className="flex items-center justify-center space-x-2 mt-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-gray-300">Available</span>
            <span className="w-2 h-2 rounded-full bg-red-500 ml-2" />
            <span className="text-[10px] text-gray-300">Sold</span>
          </div>
        </div>
      </div>

      {/* Interactive Explorer Map Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Plot Grid Block Map */}
        <div className="lg:col-span-8 bg-[#101318] border border-[#D6B36A]/20 p-6 rounded-lg space-y-6">
          
          <div className="flex justify-between items-center border-b border-[#D6B36A]/10 pb-4">
            <h3 className="text-sm font-serif uppercase tracking-widest text-[#D6B36A] flex items-center space-x-2">
              <Compass className="w-4 h-4 animate-spin text-[#D6B36A]" />
              <span>Interactive Master Plan Explorer</span>
            </h3>
            <span className="text-[9px] text-gray-500 font-mono">Click on any plot number to view status</span>
          </div>

          <div className="space-y-6">
            
            {/* Upper Portion Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-gray-400 px-2 tracking-widest">
                <span>Upper Portion (6.25 Acres — Plots 1 to 75)</span>
                <span>Clubhouse &amp; Pools nearby</span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {plots.slice(0, 75).map((plot) => (
                  <button
                    key={plot.id}
                    type="button"
                    onClick={() => setSelectedPlot(plot)}
                    className={`aspect-square rounded border text-[11px] font-mono flex flex-col items-center justify-center transition-all ${
                      selectedPlot?.id === plot.id
                        ? 'border-white bg-[#D6B36A] text-[#07111F] font-bold ring-2 ring-[#D6B36A]/50 scale-105'
                        : plot.status === 'Sold'
                        ? 'bg-red-950/30 border-red-900/40 text-red-400/80 cursor-not-allowed'
                        : plot.status === 'Reserved'
                        ? 'bg-amber-950/20 border-amber-800/40 text-amber-400'
                        : 'bg-[#07111F] border-emerald-900/40 text-emerald-400 hover:border-emerald-400'
                    }`}
                  >
                    <span>{plot.id}</span>
                    <span className="text-[7px] block uppercase mt-0.5">
                      {plot.status === 'Available' ? 'Ok' : plot.status === 'Sold' ? 'Sold' : 'Hold'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Central road segment divider */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-10 rounded border border-gray-800 flex items-center justify-center relative">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-mono">
                🛣️ 40-FEET INTERNAL ROAD PASSAGE WAY
              </span>
            </div>

            {/* Lower Portion Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold text-gray-400 px-2 tracking-widest">
                <span>Lower Portion (2.0 Acres — Plots 76 to 100)</span>
                <span>Visitor Parking access</span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {plots.slice(75, 100).map((plot) => (
                  <button
                    key={plot.id}
                    type="button"
                    onClick={() => setSelectedPlot(plot)}
                    className={`aspect-square rounded border text-[11px] font-mono flex flex-col items-center justify-center transition-all ${
                      selectedPlot?.id === plot.id
                        ? 'border-white bg-[#D6B36A] text-[#07111F] font-bold ring-2 ring-[#D6B36A]/50 scale-105'
                        : plot.status === 'Sold'
                        ? 'bg-red-950/30 border-red-900/40 text-red-400/80 cursor-not-allowed'
                        : plot.status === 'Reserved'
                        ? 'bg-amber-950/20 border-amber-800/40 text-amber-400'
                        : 'bg-[#07111F] border-emerald-900/40 text-emerald-400 hover:border-emerald-400'
                    }`}
                  >
                    <span>{plot.id}</span>
                    <span className="text-[7px] block uppercase mt-0.5">
                      {plot.status === 'Available' ? 'Ok' : plot.status === 'Sold' ? 'Sold' : 'Hold'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Selected Plot Info & Direct Reservation Flow */}
        <div className="lg:col-span-4 space-y-6">
          {selectedPlot ? (
            <div className="bg-[#101318] border border-[#D6B36A] rounded-lg p-6 space-y-6 animate-fade-in relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D6B36A]/10 rounded-bl-full flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#D6B36A]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase text-[#D6B36A] font-bold tracking-widest font-mono">
                  {selectedPlot.portion}
                </span>
                <h4 className="text-2xl font-serif text-white uppercase tracking-wider">
                  Plot {selectedPlot.id} Status
                </h4>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>Dimensions</span>
                  <span className="text-white font-mono">{selectedPlot.dimensions}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>Sizing Matrix</span>
                  <span className="text-white font-mono">{selectedPlot.size}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>Current Status</span>
                  <span className={`font-bold font-mono uppercase tracking-wider ${
                    selectedPlot.status === 'Available' ? 'text-emerald-400' : selectedPlot.status === 'Sold' ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {selectedPlot.status}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800">
                  <span>Indicative Rate</span>
                  <span className="text-white font-mono">{selectedPlot.price}</span>
                </div>
              </div>

              {selectedPlot.status === 'Available' ? (
                <div className="space-y-2 pt-4">
                  <button
                    type="button"
                    onClick={() => handlePlotEnquiry(selectedPlot)}
                    className="w-full py-3 bg-gradient-to-r from-[#B88A3B] to-[#D6B36A] text-[#07111F] text-xs uppercase tracking-widest font-bold rounded shadow transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Reserve Plot {selectedPlot.id} Inquiry
                  </button>
                  <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                    Click to pre-fill direct WhatsApp consultation &amp; arrange site visit options.
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-[#07111F] rounded border border-gray-800 text-center text-xs text-gray-400">
                  This plot is already {selectedPlot.status.toLowerCase()}. Please select another plot to explore.
                </div>
              )}

            </div>
          ) : (
            <div className="bg-[#101318]/50 border border-dashed border-gray-800 rounded-lg p-8 text-center space-y-4">
              <Maximize2 className="w-8 h-8 text-[#D6B36A]/50 mx-auto animate-pulse" />
              <span className="block text-xs uppercase tracking-widest text-[#D6B36A] font-semibold">
                Click any Plot Grid Block
              </span>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto">
                Select one of the 100 registered plots to analyze dimensions (30x75 ft), zoning limits, or begin direct enquiry workflows.
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
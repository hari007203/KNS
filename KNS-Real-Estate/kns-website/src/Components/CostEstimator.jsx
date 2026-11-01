import React, { useState, useMemo } from 'react';
import { Calculator, AlertCircle } from 'lucide-react';
import { PACKAGES } from '../data/constants';

export const CostEstimator = ({ setActiveTab, setContactService, setContactMessage }) => {
  const [calcPlotArea, setCalcPlotArea] = useState(150); // Sq Yards
  const [calcBuildArea, setCalcBuildArea] = useState(2400); // Sq Ft
  const [calcFloors, setCalcFloors] = useState(2);
  const [calcPackage, setCalcPackage] = useState("premium");

  // Dynamic cost calculations based on user specifications
  const calculatorResults = useMemo(() => {
    const pkg = PACKAGES.find(p => p.id === calcPackage) || PACKAGES[1];
    const baseCostPerSqFt = (pkg.priceMin + pkg.priceMax) / 2;
    
    // Core structure grows based on slab count/floors
    const flooringMultiplier = 1 + (calcFloors - 1) * 0.95;
    const baseBuildingCost = calcBuildArea * baseCostPerSqFt * flooringMultiplier;
    
    // Add additional structural engineering buffer
    const licensingAndPlanningCost = calcBuildArea * 75; 
    const structuralSteelPremium = calcFloors > 2 ? (baseBuildingCost * 0.05) : 0;
    
    const totalEstimate = baseBuildingCost + licensingAndPlanningCost + structuralSteelPremium;
    
    return {
      total: Math.round(totalEstimate),
      perSqFt: Math.round(totalEstimate / calcBuildArea),
      cementEstimate: Math.round(calcBuildArea * 0.4 * calcFloors), // bags
      steelEstimate: Math.round((calcBuildArea * 3.5 * calcFloors) / 1000), // Tons
      sandEstimate: Math.round(calcBuildArea * 1.6 * calcFloors), // CFT
      brickEstimate: Math.round(calcBuildArea * 12 * calcFloors), // bricks
      durationMonths: Math.round(8 + (calcFloors * 1.5))
    };
  }, [calcBuildArea, calcFloors, calcPackage]);

  const handleApplyQuote = () => {
    const selectedPkgName = PACKAGES.find(p => p.id === calcPackage)?.name || "Premium";
    setContactService(`Enquiry on ${selectedPkgName} Estimate`);
    setContactMessage(
      `Hi Kiran, I generated an estimate of ₹${calculatorResults.total.toLocaleString()} on the KNS Cost Estimator for a ${calcBuildArea} Sq.Ft build (G+${calcFloors - 1} floors) over a ${calcPlotArea} Sq.Yd plot. I would like to verify this plan.`
    );
    setActiveTab('contact');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">DYNAMICAL STRUCTURAL PRICING</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">Construction Cost Estimator</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Select your preferred build package, modify targets, and view computed material distributions instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Input Matrix Column */}
        <div className="lg:col-span-5 bg-[#101318] border border-[#D6B36A]/20 p-6 sm:p-8 rounded-lg space-y-6">
          
          <h3 className="text-sm font-serif uppercase tracking-widest text-[#D6B36A] border-b border-[#D6B36A]/10 pb-3">
            1. Customize Parameters
          </h3>

          {/* Package Tier Selection */}
          <div className="space-y-2">
            <label className="text-[11px] text-gray-400 uppercase tracking-wider block font-semibold">
              Construction Package Tier
            </label>
            <div className="grid grid-cols-1 gap-2">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setCalcPackage(pkg.id)}
                  className={`w-full text-left p-3 rounded border text-xs transition-all ${
                    calcPackage === pkg.id 
                      ? 'bg-[#D6B36A]/10 border-[#D6B36A] text-white' 
                      : 'bg-[#07111F]/50 border-gray-800 hover:border-gray-700 text-gray-400'
                  }`}
                >
                  <div className="flex justify-between items-center font-bold mb-1">
                    <span>{pkg.name}</span>
                    <span className="text-[#D6B36A]">₹{pkg.priceMin} - ₹{pkg.priceMax}/sq.ft</span>
                  </div>
                  <span className="text-[10px] block opacity-80 max-w-[90%] truncate">
                    {pkg.specifications[0]}, {pkg.specifications[1]}, {pkg.specifications[3]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Build Area Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] text-gray-400 uppercase tracking-wider">
              <span>Target Build Area (Sq. Ft)</span>
              <span className="text-white font-mono">{calcBuildArea.toLocaleString()} Sq.Ft</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="10000" 
              step="100"
              value={calcBuildArea}
              onChange={(e) => setCalcBuildArea(Number(e.target.value))}
              className="w-full accent-[#D6B36A]" 
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>1,000 Sq.Ft (Standard Villa)</span>
              <span>10,000 Sq.Ft (Commercial Block)</span>
            </div>
          </div>

          {/* Plot Sizing Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] text-gray-400 uppercase tracking-wider">
              <span>Total Plot Size (Sq. Yards)</span>
              <span className="text-white font-mono">{calcPlotArea} Sq. Yards</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="1200" 
              step="50"
              value={calcPlotArea}
              onChange={(e) => setCalcPlotArea(Number(e.target.value))}
              className="w-full accent-[#D6B36A]" 
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>150 Sq.Yd (30x45 Plot)</span>
              <span>1200 Sq.Yd (Premium Community)</span>
            </div>
          </div>

          {/* Floors count button selection */}
          <div className="space-y-2">
            <label className="text-[11px] text-gray-400 uppercase tracking-wider block font-semibold">
              Structure Height (Floors)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((fl) => (
                <button
                  key={fl}
                  type="button"
                  onClick={() => setCalcFloors(fl)}
                  className={`py-2 text-xs font-mono rounded border transition-all ${
                    calcFloors === fl 
                      ? 'bg-[#D6B36A] text-[#07111F] border-[#D6B36A] font-bold' 
                      : 'bg-[#07111F]/50 border-gray-800 hover:border-gray-700 text-gray-400'
                  }`}
                >
                  {fl === 1 ? 'Ground' : `G + ${fl - 1}`}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Computed Outputs Column */}
        <div className="lg:col-span-7 bg-[#101318]/50 border border-dashed border-gray-800 p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-8">
          
          <div className="space-y-4">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">
              Computed Estimate Output Breakdown
            </span>
            
            <div className="bg-[#07111F] p-6 rounded-lg border border-[#D6B36A]/10 text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D6B36A] block">Indicative Cost Estimate</span>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-mono text-white font-bold">
                ₹{calculatorResults.total.toLocaleString()}*
              </h4>
              <span className="text-[10px] text-gray-400 block max-w-sm mx-auto">
                Estimated rate averaging ₹{calculatorResults.perSqFt}/sq.ft over G+{calcFloors-1} construction profile. Includes basic regulatory support.
              </span>
            </div>
          </div>

          {/* Material Counts Output metrics */}
          <div className="space-y-3">
            <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold block">
              Calculated Primary Bulk Materials Required:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#101318] p-3 rounded border border-gray-800">
                <span className="block text-gray-500 text-[9px] uppercase">Steel (TMT Fe550)</span>
                <span className="block text-sm font-mono text-white font-bold mt-1">~{calculatorResults.steelEstimate} Tons</span>
              </div>
              <div className="bg-[#101318] p-3 rounded border border-gray-800">
                <span className="block text-gray-500 text-[9px] uppercase">Cement Bags</span>
                <span className="block text-sm font-mono text-white font-bold mt-1">~{calculatorResults.cementEstimate} Bags</span>
              </div>
              <div className="bg-[#101318] p-3 rounded border border-gray-800">
                <span className="block text-gray-500 text-[9px] uppercase">Red Clay Bricks</span>
                <span className="block text-sm font-mono text-white font-bold mt-1">~{calculatorResults.brickEstimate} Pcs</span>
              </div>
              <div className="bg-[#101318] p-3 rounded border border-gray-800">
                <span className="block text-gray-500 text-[9px] uppercase">Robo/River Sand</span>
                <span className="block text-sm font-mono text-white font-bold mt-1">~{calculatorResults.sandEstimate} CFT</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-xs text-amber-500/90 bg-amber-500/5 p-3 rounded border border-amber-500/10">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p className="leading-relaxed">
                *Note: Estimates are indicative and subject to exact structural design drawings, steel market price fluctuations, and municipal location constraints.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleApplyQuote}
                className="px-6 py-3 bg-[#D6B36A] hover:bg-[#B88A3B] text-[#07111F] text-xs uppercase tracking-widest font-bold rounded shadow transition-all duration-300"
              >
                Convert Quote to Direct Query
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
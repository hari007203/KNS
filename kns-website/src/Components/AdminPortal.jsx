import React, { useState } from 'react';

export const AdminPortal = ({ 
  plots, 
  setPlots, 
  inquiries, 
  setInquiries 
}) => {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminError, setAdminError] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUsername === "admin" && adminPassword === "kns2024") {
      setIsAdminLoggedIn(true);
      setAdminError("");
    } else {
      setAdminError("Invalid authorization credentials.");
    }
  };

  const handleUpdatePlotStatus = (id, newStatus) => {
    setPlots(prev => 
      prev.map(p => p.id === id ? { ...p, status: newStatus } : p)
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-red-400">ADMINISTRATIVE ACCESS ONLY</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">Authorized Control Ledger</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Securely manage project pricing, toggle plot availability flags, and review submitted enquiries instantly.
        </p>
      </div>

      {!isAdminLoggedIn ? (
        <div className="max-w-md mx-auto bg-[#101318] border border-red-500/20 p-8 rounded-lg space-y-6">
          
          <div className="text-center space-y-2 border-b border-gray-800 pb-4">
            <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block">
              Security Credentials Required
            </span>
            <p className="text-[11px] text-gray-400 font-light">
              Demo credentials - Username: <span className="text-white font-mono">admin</span> | Password: <span className="text-white font-mono">kns2024</span>
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-gray-400">Username</label>
              <input 
                type="text" 
                placeholder="admin"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="w-full bg-[#07111F] border border-gray-800 p-3 text-xs text-white focus:outline-none focus:border-[#D6B36A] rounded"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-wider text-gray-400">Authorization Code</label>
              <input 
                type="password" 
                placeholder="••••••••"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full bg-[#07111F] border border-gray-800 p-3 text-xs text-white focus:outline-none focus:border-[#D6B36A] rounded"
              />
            </div>

            {adminError && (
              <p className="text-red-400 text-xs font-mono">{adminError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-red-950/60 border border-red-900 text-red-200 text-xs uppercase tracking-widest font-bold rounded hover:bg-red-900 transition-all"
            >
              Authenticate Terminal
            </button>

          </form>

        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          
          {/* Admin Toolbar control */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#101318] p-4 rounded border border-gray-800 gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-gray-300">
                Signed in as: <strong className="text-white font-mono font-bold">KNS System Super-Admin</strong>
              </span>
            </div>
            <button 
              type="button"
              onClick={() => {
                setIsAdminLoggedIn(false);
                setAdminUsername("");
                setAdminPassword("");
              }}
              className="px-4 py-1.5 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white text-[10px] uppercase tracking-wider rounded"
            >
              Lock Console Session
            </button>
          </div>

          {/* Main dynamic tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* List of custom inquiries */}
            <div className="bg-[#101318] p-6 rounded-lg border border-gray-800 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#D6B36A] border-b border-gray-800 pb-2">
                Active Customer Inquiries (System Log)
              </h3>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-[#07111F] p-4 rounded border border-gray-800 text-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="block font-bold text-white">{inq.name}</span>
                        <span className="text-[10px] text-gray-500">{inq.email} | {inq.phone}</span>
                      </div>
                      <span className="text-[9px] text-[#D6B36A] font-mono">{inq.date}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-[11px] italic bg-[#101318] p-2 rounded">
                      "{inq.msg}"
                    </p>
                    <div className="flex justify-between items-center text-[10px] pt-1">
                      <span className="text-emerald-400">Route: {inq.service}</span>
                      <a href={`tel:${inq.phone}`} className="text-[#D6B36A] hover:underline">
                        Dial Client Mobile
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* List of plots to edit live state status */}
            <div className="bg-[#101318] p-6 rounded-lg border border-gray-800 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#D6B36A] border-b border-gray-800 pb-2">
                Ganapatiguda Plot Availability Override Controls
              </h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {plots.slice(0, 25).map((plot) => (
                  <div key={plot.id} className="flex items-center justify-between text-xs py-2 border-b border-gray-800">
                    <div>
                      <span className="font-bold text-white">Plot Number {plot.id}</span>
                      <span className="text-[10px] text-gray-500 block mt-0.5">{plot.size} | {plot.dimensions}</span>
                    </div>

                    <div className="flex space-x-1">
                      {['Available', 'Reserved', 'Sold'].map((statusOption) => (
                        <button
                          key={statusOption}
                          type="button"
                          onClick={() => handleUpdatePlotStatus(plot.id, statusOption)}
                          className={`px-2.5 py-1 text-[9px] font-mono rounded uppercase transition-colors ${
                            plot.status === statusOption
                              ? statusOption === 'Available'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : statusOption === 'Reserved'
                                ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                : 'bg-red-950 text-red-400 border border-red-800'
                              : 'bg-[#07111F] text-gray-400 hover:text-white'
                          }`}
                        >
                          {statusOption}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
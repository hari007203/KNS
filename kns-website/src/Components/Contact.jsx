import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = ({ 
  contactName, 
  setContactName, 
  contactPhone, 
  setContactPhone, 
  contactEmail, 
  setContactEmail, 
  contactService, 
  setContactService, 
  contactMessage, 
  setContactMessage, 
  formSubmitted, 
  setFormSubmitted, 
  setAdminInquiries 
}) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactPhone) {
      alert("Please enter both Name and Phone Number.");
      return;
    }
    
    // Simulate logging inquiries into the system ledger
    const newEnquiry = {
      id: Date.now(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail || "N/A",
      service: contactService,
      date: new Date().toISOString().split('T')[0],
      msg: contactMessage || "No comments provided."
    };
    
    setAdminInquiries(prev => [newEnquiry, ...prev]);
    setFormSubmitted(true);
    
    // Auto-formatted WhatsApp redirection
    const formattedText = `Hello KNS Construction! I am interested in: *${contactService}*. \n\nName: ${contactName}\nPhone: ${contactPhone}\nMessage: ${contactMessage}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919100425645&text=${encodeURIComponent(formattedText)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-fade-in">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">SCHEDULE CONSULTATION &amp; ROAD ACCESS</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white">Direct Project Inquiries</h2>
        <p className="text-xs text-gray-400 max-w-xl mx-auto">
          Fill the contact ledger below to lock in site visits or request precise quotes. You'll be automatically redirected to Kiran on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Inputs Panel */}
        <div className="lg:col-span-7 bg-[#101318] border border-[#D6B36A]/20 p-6 sm:p-8 rounded-lg">
          
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#D6B36A] mx-auto animate-[bounce_0.6s_ease-out]" />
              <h3 className="text-xl font-serif text-white uppercase tracking-wider">
                Enquiry Saved &amp; Redirecting
              </h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto">
                Your interest ledger for <span className="text-white font-medium">{contactService}</span> is logged. Opening direct WhatsApp line...
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-[#D6B36A] border-b border-[#D6B36A] pb-0.5 hover:text-white transition-colors pt-4 block mx-auto"
              >
                Inquire on another project
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">Your Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Srinivas Rao" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#07111F] border border-gray-800 focus:border-[#D6B36A] p-3 rounded text-xs text-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">Contact Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 91004 25645" 
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-[#07111F] border border-gray-800 focus:border-[#D6B36A] p-3 rounded text-xs text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">Email (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="client@gmail.com" 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-[#07111F] border border-gray-800 focus:border-[#D6B36A] p-3 rounded text-xs text-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">Interested Service Tier</label>
                  <select 
                    value={contactService}
                    onChange={(e) => setContactService(e.target.value)}
                    className="w-full bg-[#07111F] border border-gray-800 focus:border-[#D6B36A] p-3 rounded text-xs text-white focus:outline-none transition-colors bg-opacity-100"
                  >
                    <option value="Premium Turnkey Construction">Premium Turnkey Villa Construction</option>
                    <option value="Ganapatiguda Gated Plots">Ganapatiguda Gated Plot Reservation</option>
                    <option value="Kondapur 3BHK Apartment Walkthrough">Kondapur 3BHK Apartment</option>
                    <option value="Independent House / Custom Design Mockup">Independent Custom House</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest block font-semibold">Explain your structural requirement or preferred visitation schedules</label>
                <textarea 
                  rows={4}
                  placeholder="Please specify dimension preferences, woodwork budgets, or timing expectations..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full bg-[#07111F] border border-gray-800 focus:border-[#D6B36A] p-3 rounded text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#B88A3B] to-[#D6B36A] text-[#07111F] text-xs uppercase tracking-widest font-bold rounded shadow transition-all hover:scale-[1.01]"
              >
                Connect Directly with Kiran Gajbhare on WhatsApp
              </button>

            </form>
          )}

        </div>

        {/* Corporate Address & Map Overlay Panel */}
        <div className="lg:col-span-5 bg-[#101318]/50 border border-dashed border-gray-800 p-6 sm:p-8 rounded-lg space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            <h3 className="text-sm font-serif uppercase tracking-widest text-[#D6B36A] border-b border-[#D6B36A]/10 pb-3">
              Corporate Enclave Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Corporate Office Address</span>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Raghavendra Colony, Kondapur, <br />
                    Hyderabad, Telangana – 500084, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Direct Call Lines</span>
                  <p className="text-gray-400 leading-relaxed font-mono">
                    +91 9100425645 / +91 9246563397
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Digital Mail Delivery</span>
                  <p className="text-gray-400 leading-relaxed font-mono">
                    knsconstructions@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800/80">
            <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-semibold">
              Interactive Road Navigation Support:
            </span>
            
            <div className="bg-[#07111F] border border-gray-800 rounded p-4 text-center space-y-2">
              <span className="text-xs uppercase text-[#D6B36A] font-bold block">Pocharam Site Area Map</span>
              <span className="text-[10px] text-gray-400 block max-w-[90%] mx-auto">
                Bypass access pathways via Patancheru Mandal borders.
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[10px] uppercase tracking-widest font-bold text-white border border-[#D6B36A] px-4 py-1.5 rounded bg-transparent hover:bg-white/5 transition-colors mt-2"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
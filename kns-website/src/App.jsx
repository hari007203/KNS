import React, { useState } from 'react';
import { Loader } from './Components/Loader';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { ConstructionProcess } from './Components/ConstructionProcess';
import { CostEstimator } from './Components/CostEstimator';
import { Portfolio } from './Components/Portfolio';
import { VillaCommunity } from './Components/VillaCommunity';
import { Contact } from './Components/Contact';
import { AdminPortal } from './Components/AdminPortal';

import { 
  PLOTS_DATA, 
  PROPERTY_GALLERY 
} from './data/constants';

import { MapPin, Phone, Mail } from 'lucide-react';

function App() {
  // Application Lifecycle and State Ledger
  const [introFinished, setIntroFinished] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronized memory slots shared between component views
  const [plots, setPlots] = useState(PLOTS_DATA);
  const [properties] = useState(PROPERTY_GALLERY);
  const [inquiries, setInquiries] = useState([
    { 
      id: 1, 
      name: "Srinivas Rao", 
      phone: "9876543210", 
      email: "srinivas@gmail.com", 
      service: "Premium Villa Plot No. 12", 
      date: "2024-03-10", 
      msg: "I want to arrange a site visit next Sunday." 
    },
    { 
      id: 2, 
      name: "Prerna Sharma", 
      phone: "9123456789", 
      email: "prerna.s@yahoo.com", 
      service: "Turnkey Luxury Construction", 
      date: "2024-03-11", 
      msg: "Interested in a luxury independent home." 
    }
  ]);

  // Shared state structures for contact pre-filling
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactService, setContactService] = useState("Premium Turnkey Construction");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#07111F] text-white font-sans selection:bg-[#D6B36A] selection:text-[#07111F] overflow-x-hidden flex flex-col justify-between">
      
      {/* 1. Cinematic Loading Sequence */}
      {!introFinished && (
        <Loader onFinish={() => setIntroFinished(true)} />
      )}

      {/* Main Structural Flow */}
      {introFinished && (
        <>
          {/* 2. Responsive Luxury Navigation */}
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
          />

          {/* 3. Main Dynamic Canvas Switcher */}
          <main className="pb-16 flex-grow">
            {activeTab === 'home' && (
              <Hero setActiveTab={setActiveTab} />
            )}

            {activeTab === 'about' && (
              <About setActiveTab={setActiveTab} />
            )}

            {activeTab === 'construction' && (
              <ConstructionProcess />
            )}

            {activeTab === 'calculator' && (
              <CostEstimator 
                setActiveTab={setActiveTab}
                setContactService={setContactService}
                setContactMessage={setContactMessage}
              />
            )}

            {activeTab === 'portfolio' && (
              <Portfolio 
                properties={properties}
                setActiveTab={setActiveTab}
                setContactService={setContactService}
                setContactMessage={setContactMessage}
              />
            )}

            {activeTab === 'villa-community' && (
              <VillaCommunity 
                plots={plots}
                setActiveTab={setActiveTab}
                setContactService={setContactService}
                setContactMessage={setContactMessage}
              />
            )}

            {activeTab === 'contact' && (
              <Contact 
                contactName={contactName}
                setContactName={setContactName}
                contactPhone={contactPhone}
                setContactPhone={setContactPhone}
                contactEmail={contactEmail}
                setContactEmail={setContactEmail}
                contactService={contactService}
                setContactService={setContactService}
                contactMessage={contactMessage}
                setContactMessage={setContactMessage}
                formSubmitted={formSubmitted}
                setFormSubmitted={setFormSubmitted}
                setAdminInquiries={setInquiries}
              />
            )}

            {activeTab === 'admin' && (
              <AdminPortal 
                plots={plots}
                setPlots={setPlots}
                inquiries={inquiries}
                setInquiries={setInquiries}
              />
            )}
          </main>

          {/* 4. Luxury Dark Footer Layout */}
          <footer className="bg-[#040912] border-t border-[#D6B36A]/15 pt-16 pb-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              
              {/* Brand Summary */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <div className="w-8 h-8 border border-[#D6B36A] flex items-center justify-center bg-gray-900 rounded">
                    <span className="font-serif text-[#D6B36A] font-bold tracking-wider text-sm">KNS</span>
                  </div>
                  <span className="text-sm font-serif tracking-widest font-bold text-white uppercase block">
                    KNS Construction
                  </span>
                </div>
                
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Designing premium residential communities and organizing verified turnkey constructions in Kondapur and surrounding Hyderabad mandals since launch.
                </p>

                <span className="block text-[10px] text-[#D6B36A] uppercase tracking-[0.2em] font-light">
                  BUILDING DREAMS, BRICK BY BRICK.
                </span>
              </div>

              {/* Navigation Shortcuts */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#D6B36A] block font-semibold">
                  Explore Services
                </span>
                <ul className="text-xs space-y-2 text-gray-400">
                  <li>
                    <button onClick={() => setActiveTab('construction')} className="hover:text-white transition-colors">
                      Architectural Planning (2D/3D)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('construction')} className="hover:text-white transition-colors">
                      RCC Column Steel Layouts
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('calculator')} className="hover:text-white transition-colors">
                      Pricing Estimator &amp; Sand Matrix
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('portfolio')} className="hover:text-white transition-colors">
                      Independent Custom Built Duplexes
                    </button>
                  </li>
                </ul>
              </div>

              {/* Plot community highlight links */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#D6B36A] block font-semibold">
                  Plot Developments
                </span>
                <ul className="text-xs space-y-2 text-gray-400 text-center md:text-left">
                  <li>
                    <button onClick={() => setActiveTab('villa-community')} className="hover:text-[#D6B36A] transition-colors">
                      Ganapatiguda 8.25-Acre Gated Community
                    </button>
                  </li>
                  <li className="text-[11px] text-[#D6B36A] font-mono leading-relaxed mt-2">
                    📍 Pocharam Mandal Borders, Sangareddy Dist. Telangana, India.
                  </li>
                </ul>
              </div>

              {/* Action and Phone blocks */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#D6B36A] block font-semibold">
                  Direct Contact Line
                </span>
                
                <div className="space-y-2 text-xs text-gray-400">
                  <a href="tel:+919100425645" className="block hover:text-white font-mono">
                    📞 +91 9100425645
                  </a>
                  <a href="tel:+919246563397" className="block hover:text-white font-mono">
                    📞 +91 9246563397
                  </a>
                  <a href="mailto:knsconstructions@gmail.com" className="block hover:text-[#D6B36A] transition-colors font-mono">
                    ✉️ knsconstructions@gmail.com
                  </a>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="w-full py-2 border border-[#D6B36A] hover:bg-[#D6B36A] hover:text-[#07111F] text-xs uppercase tracking-widest font-bold text-[#D6B36A] rounded transition-all duration-300"
                  >
                    Inquire site visit
                  </button>
                </div>
              </div>

            </div>

            {/* Copyright Disclaimer details */}
            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 text-center text-[10px] text-gray-500 space-y-2">
              <p>© {new Date().getFullYear()} KNS Construction &amp; Real Estate. All rights reserved.</p>
              <p className="font-light max-w-2xl mx-auto">
                All designs, layout maps, and packages presented are indicative of local engineering protocols and remain subject to direct legal agreements drafted and approved by Proprietor Kiran Gajbhare.
              </p>
            </div>

          </footer>
        </>
      )}
    </div>
  );
}

export default App;
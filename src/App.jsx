import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass,
  Home, Leaf, MapPin, Menu, ShieldCheck, Trees, Waves, X, Building2,
  CarFront, Dumbbell, Sun, Phone, Mail, Instagram, Facebook
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const amenities = [
  { icon: Trees, title: 'Landscaped greens', text: 'Open green spaces designed for everyday breathing room.' },
  { icon: Waves, title: 'Swimming pool', text: 'A refreshing place to unwind and spend time together.' },
  { icon: Building2, title: 'Clubhouse', text: 'A welcoming community space for gatherings and celebrations.' },
  { icon: Dumbbell, title: 'Fitness & recreation', text: 'Room to stay active, connect and enjoy your day.' },
  { icon: ShieldCheck, title: 'Gated security', text: 'A planned community with security-conscious access.' },
  { icon: CarFront, title: 'Planned roads', text: 'Organised internal roads and convenient movement.' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85', label: 'Contemporary architecture' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85', label: 'Thoughtful outdoor living' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85', label: 'Spaces to gather' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }

  const submitEnquiry = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> A thoughtfully planned community by KNS <span className="announcement-line" /> <span>Discover the possibilities</span></div>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="KNS home">
          <span className="brand-mark">K<span>N</span>S</span>
          <span className="brand-caption">LIVING, REIMAGINED</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#vision" onClick={closeMenu}>Our vision</a>
          <a href="#project" onClick={closeMenu}>The project</a>
          <a href="#amenities" onClick={closeMenu}>Amenities</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#location" onClick={closeMenu}>Location</a>
          <button className="mobile-enquire" onClick={() => scrollTo('contact')}>Enquire now <ArrowUpRight size={16} /></button>
        </nav>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Enquire now <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow light"><span /> A PLACE TO PUT DOWN ROOTS</motion.div>
            <motion.h1 initial="hidden" animate="visible" transition={{ delay: .08 }} variants={fadeUp}>More than a plot.<br /><em>A place to belong.</em></motion.h1>
            <motion.p initial="hidden" animate="visible" transition={{ delay: .16 }} variants={fadeUp}>A thoughtfully envisioned residential community where open spaces, modern comforts and a sense of belonging come together.</motion.p>
            <motion.div initial="hidden" animate="visible" transition={{ delay: .24 }} variants={fadeUp} className="hero-actions">
              <button className="button button-light" onClick={() => scrollTo('project')}>Explore the project <ArrowUpRight size={17} /></button>
              <button className="text-link light-link" onClick={() => scrollTo('vision')}>Discover our vision <ArrowDown size={16} /></button>
            </motion.div>
          </div>
          <div className="hero-bottom">
            <div className="hero-location"><MapPin size={15} /> A considered address for your next chapter</div>
            <div className="hero-index">01 <span>/</span> 04</div>
          </div>
          <div className="hero-vertical">KNS RESIDENTIAL PROJECT</div>
        </section>

        <section className="intro section-pad" id="vision">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={fadeUp} className="intro-label">
            <span className="section-kicker">01 / THE KNS VISION</span>
            <span className="small-rule" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={fadeUp} className="intro-copy">
            <h2>Space to grow.<br /><em>Room to live.</em></h2>
            <div className="intro-description">
              <p className="lead">A home begins long before its walls take shape. It begins with the right place, the right surroundings and the freedom to imagine what comes next.</p>
              <p>KNS brings together the essentials of considered community living: well-planned plots, inviting shared spaces and an environment designed around the everyday moments that matter.</p>
              <button className="text-link dark-link" onClick={() => scrollTo('project')}>Get to know KNS <ArrowUpRight size={16} /></button>
            </div>
          </motion.div>
          <div className="intro-image-wrap">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Modern home surrounded by landscaped greenery" />
            <div className="image-note"><span>01</span><span>DESIGNED AROUND THE WAY YOU LIVE</span></div>
          </div>
        </section>

        <section className="project section-pad" id="project">
          <div className="project-top">
            <div><span className="section-kicker light-kicker">02 / THE PROJECT</span><h2>A community<br /><em>with a clear vision.</em></h2></div>
            <p>Thoughtful planning creates more than a layout. It creates the foundation for a connected, comfortable and rewarding way of life.</p>
          </div>
          <div className="stats-grid">
            <div className="stat"><span className="stat-number">8.25</span><span className="stat-unit">ACRES</span><p>Planned residential community</p></div>
            <div className="stat"><span className="stat-number">100</span><span className="stat-unit">PLOTS</span><p>Residential plots envisioned</p></div>
            <div className="stat stat-note"><Compass size={27} /><p>Space planned with a balance of privacy, access and community.</p></div>
          </div>
          <div className="project-image">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" alt="Elegant contemporary residential architecture" />
            <div className="project-image-caption"><span>THE KNS DIFFERENCE</span><span>Thoughtful from the ground up <ArrowUpRight size={16} /></span></div>
          </div>
          <p className="disclaimer">Project details shown are indicative and should be confirmed with the KNS team. Final specifications, approvals and availability are subject to confirmation.</p>
        </section>

        <section className="amenities section-pad" id="amenities">
          <div className="section-heading">
            <div><span className="section-kicker">03 / EVERYDAY EXTRAS</span><h2>Little things.<br /><em>Better days.</em></h2></div>
            <p>Spaces that make it easier to slow down, get moving, meet your neighbours and enjoy the everyday.</p>
          </div>
          <div className="amenity-grid">
            {amenities.map((item, i) => {
              const Icon = item.icon
              return <motion.div key={item.title} className="amenity-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * .05 }}>
                <div className="amenity-top"><Icon size={23} strokeWidth={1.5} /><span>0{i + 1}</span></div>
                <h3>{item.title}</h3><p>{item.text}</p><span className="amenity-line" />
              </motion.div>
            })}
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="section-heading gallery-heading">
            <div><span className="section-kicker light-kicker">04 / A GLIMPSE OF THE LIFE</span><h2>Imagine what<br /><em>comes next.</em></h2></div>
            <p>A visual direction for the lifestyle KNS aspires to create. Explore the mood, materials and moments that inspire the project.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, i) => <motion.figure key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={item.src} alt={item.label} />
              <figcaption><span>0{i + 1}</span>{item.label}<ArrowUpRight size={16} /></figcaption>
            </motion.figure>)}
          </div>
          <p className="disclaimer gallery-disclaimer">Images are illustrative references and may not represent the final project design or delivered amenities.</p>
        </section>

        <section className="location section-pad" id="location">
          <div className="location-copy">
            <span className="section-kicker">05 / FIND YOUR PLACE</span>
            <h2>Well placed<br /><em>for what matters.</em></h2>
            <p>Every great address connects you to the places, people and opportunities that shape your day. Get in touch with the KNS team for the exact project location, approach roads and nearby landmarks.</p>
            <button className="text-link dark-link" onClick={() => scrollTo('contact')}>Ask about the location <ArrowUpRight size={16} /></button>
          </div>
          <div className="location-visual">
            <div className="map-art">
              <div className="map-grid" />
              <div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
              <div className="map-green green-one" /><div className="map-green green-two" />
              <div className="map-pin"><MapPin size={22} fill="currentColor" /><span>KNS</span></div>
              <div className="map-label label-a">YOUR NEXT CHAPTER</div><div className="map-label label-b">A PLACE TO BELONG</div>
            </div>
            <div className="map-caption"><MapPin size={15} /> Exact location shared on enquiry</div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-left">
            <span className="section-kicker light-kicker">LET'S START A CONVERSATION</span>
            <h2>Your future<br /><em>starts here.</em></h2>
            <p>Tell us what you're looking for. The KNS team would be happy to help you take the next step.</p>
            <div className="contact-details">
              <div><Phone size={17} /><span>Speak with our team</span></div>
              <div><Mail size={17} /><span>Send us an enquiry</span></div>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <div className="form-title">ENQUIRE ABOUT KNS <ArrowUpRight size={18} /></div>
            <label>Your name<input required name="name" placeholder="Enter your full name" /></label>
            <div className="form-row">
              <label>Phone number<input required name="phone" type="tel" placeholder="+91" /></label>
              <label>Email address<input name="email" type="email" placeholder="you@example.com" /></label>
            </div>
            <label>What would you like to know?
              <select name="interest" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Plot availability</option><option>Pricing and payment</option><option>Project location</option><option>Site visit</option><option>Other enquiry</option>
              </select>
            </label>
            <button className="button button-gold" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
            {submitted && <p className="success-message"><Check size={16} /> Thanks for your interest. This demo form is ready to be connected to your email or backend.</p>}
            <p className="form-privacy">By submitting, you agree to be contacted by the KNS team regarding your enquiry.</p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">K<span>N</span>S</span><span className="brand-caption">LIVING, REIMAGINED</span></a>
        <p>Building Dreams, Brick by Brick.</p>
        <div className="footer-right"><span>© 2026 KNS. All rights reserved.</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  )
}

export default App

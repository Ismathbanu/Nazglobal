import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Globe, Award, Package, Users, Star, ChevronLeft, ChevronRight, TrendingUp, Shield, ShieldCheck, Leaf, Truck, Crown, Handshake } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import heroBg from '../assets/hero_banner.png'
import datesPremium from '../assets/dates_premium.png'
import datesLuxury from '../assets/dates_luxury.png'
import spices from '../assets/spices_collection.png'
import privateLabel from '../assets/private_label.png'
import exportImg from '../assets/export_logistics.png'
import aboutTeam from '../assets/about_team.png'
import riceImg from '../assets/rice_collection.png'
import pulsesImg from '../assets/pulses_seeds.png'
import oilsImg from '../assets/oils_natural.png'
import fruitsImg from '../assets/fruits_vegetables.png'
import honeyImg from '../assets/honey_collection.png'
import dryChillies from '../assets/dry_chillies.png'
import curryPowders from '../assets/curry_powders.png'
import brandNaz from '../assets/brand_nazfarmfresh.png'
import brandAjmeer from '../assets/brand_ajmeergate.png'
import brandKerala from '../assets/brand_keralafarm.png'
import './HomePage.css'

const stats = [
  { icon: Package, value: '100+', label: 'Premium Products' },
  { icon: Globe, value: '25+', label: 'Countries Exported' },
  { icon: Users, value: '5000+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: ShieldCheck, value: '100', label: 'Quality Assured', suffix: '%' },
]

const categoryIcons = {
  dates: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="7" cy="14" rx="3.5" ry="6" transform="rotate(-30 7 14)" />
      <ellipse cx="12" cy="10" rx="3" ry="5.5" transform="rotate(30 12 10)" />
      <ellipse cx="17" cy="15" rx="2.5" ry="5" transform="rotate(-15 17 15)" />
      <path d="M7 10c0-1.5 1.5-3 3.5-3M17 11.5c-.8-1.2-2-1.8-3-1.8" />
    </svg>
  ),
  rice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c1.5 3 2 6 2 9s-.5 6-2 9c-1.5-3-2-6-2-9s.5-6 2-9z" />
      <path d="M8 5c1 2 1.5 4 1.5 6s-.5 4-1.5 6c-1-2-1.5-4-1.5-6s.5-4 1.5-6z" opacity="0.8" />
      <path d="M16 5c1 2 1.5 4 1.5 6s-.5 4-1.5 6c-1-2-1.5-4-1.5-6s.5-4 1.5-6z" opacity="0.8" />
    </svg>
  ),
  spices: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18" />
      <path d="M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <circle cx="12" cy="5" r="1.2" fill="currentColor" />
      <circle cx="12" cy="19" r="1.2" fill="currentColor" />
      <circle cx="5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="21" cy="12" r="1.2" fill="currentColor" />
    </svg>
  ),
  pulses: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <circle cx="8" cy="16" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
      <path d="M8 5a4 4 0 0 1 4 4M16 5a4 4 0 0 1 4 4M8 13a4 4 0 0 1 4 4M16 13a4 4 0 0 1 4 4" strokeDasharray="1 1" />
    </svg>
  ),
  oil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3M10 5h4M8 9a4 4 0 0 1 8 0v9a4 4 0 0 1-8 0V9z" />
      <path d="M12 11.5c-1 0-1.8 1-1.8 2s.8 1.5 1.8 1.5 1.8-.5 1.8-1.5-.8-2-1.8-2z" fill="currentColor" opacity="0.35" />
      <path d="M12 11.5c-1 0-1.8 1-1.8 2s.8 1.5 1.8 1.5 1.8-.5 1.8-1.5-.8-2-1.8-2z" />
    </svg>
  ),
  honey: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3h8M7 7h10M6 10c0-1.8 1.2-2.8 1.2-2.8h9.6s1.2 1 1.2 2.8c0 3.6-1.8 7.2-7.2 7.2S6 13.6 6 10z" />
      <path d="M10 13.5a1.8 1.8 0 1 0 3.6 0" />
      <path d="M12 7v3.5M12 10.5a.8.8 0 1 0 0 1.6.8.8 0 1 0 0-1.6z" fill="currentColor" />
    </svg>
  ),
  fruits: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 5c0-1.5 1-2.5 2-2.5" />
      <path d="M12 9c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" fill="currentColor" opacity="0.2" />
      <path d="M12 9c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" />
    </svg>
  ),
  chillies: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 3c-1 .3-2.5 1.5-3.2 3.2-1.8-.4-4 .4-5.5 1.8a7.2 7.2 0 0 0-1.8 6.8c0 .8.8.8 1.2.4A16.5 16.5 0 0 1 17.2 8c1.1-.7 2.2-2.2 2.5-3.2-.3-.8-1.1-1.5-1.7-1.8z" />
      <path d="M14 6c.4-1.2.4-2.4 0-3.6" />
    </svg>
  ),
  curry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14c0 3.5 3.6 6.3 8 6.3s8-2.8 8-6.3H3z" />
      <path d="M4 14c.4-2.7 3.6-5.4 7-5.4s6.6 2.7 7 5.4H4z" fill="currentColor" opacity="0.25" />
      <path d="M5 14c.8-2.2 3.1-4 6.2-4s5.4 1.8 6.2 4" />
      <path d="M11 5.5a.8.8 0 1 1 1.6 0v2h-1.6z" />
    </svg>
  )
}

const productCategories = [
  { name: 'Premium Dates', image: datesPremium, to: '/dates' },
  { name: 'Rice', image: riceImg, to: '/products#rice' },
  { name: 'Pulses & Seeds', image: pulsesImg, to: '/products#pulses' },
  { name: 'Spices &\nCurry Powders', image: spices, to: '/products#spices' },
  { name: 'Oils &\nNatural Products', image: oilsImg, to: '/products#oils' },
  { name: 'Fruits &\nVegetables', image: fruitsImg, to: '/products#fruits' },
]

const testimonials = [
  { name: 'Ahmed Al Rashidi', role: 'Import Manager, Dubai', text: 'NAZ Global has been our trusted dates supplier for 5+ years. Exceptional quality, on-time delivery, and professional packaging every time.', rating: 5 },
  { name: 'Raj Kumar Nair', role: 'Procurement Head, Malaysia', text: 'Their private labelling service is outstanding. The team handled everything from branding to customs documentation perfectly.', rating: 5 },
  { name: 'Sarah Abdullah', role: 'F&B Director, Kuala Lumpur', text: 'Premium quality spices and rice at competitive export prices. NAZ Global is our go-to Indian supplier for all food categories.', rating: 5 },
]

// Brands are rendered statically below to match custom reference logos

function StatCounter({ value, label, icon: Icon, delay, ...props }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        const num = parseInt(value)
        let current = 0
        const step = Math.ceil(num / 40)
        const timer = setInterval(() => {
          current = Math.min(current + step, num)
          setCount(current)
          if (current >= num) clearInterval(timer)
        }, 40)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started, value])

  const suffix = value.includes('+') ? '+' : (props.suffix || '')

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="stat-card__icon">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="stat-card__value">{count}{suffix}</div>
      <div className="stat-card__label">{label}</div>
    </motion.div>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [testIdx, setTestIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTestIdx(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <motion.div className="hero__bg-wrap" style={{ y: heroY }}>
          <img src={heroBg} alt="Premium Food Export" className="hero__bg-img" />
          <div className="hero__overlay" />
        </motion.div>

        {/* Floating decorative blobs */}
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />

        <motion.div className="hero__content container" style={{ opacity: heroOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="hero__badge">
              <Leaf size={14} className="hero__badge-icon" /> Premium Quality • Global Standards
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Global Food
            <br />
            Exporters From
            <br />
            <span className="hero__title-accent">India</span> To The World
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium Dates, Rice, Spices, Pulses &amp; Private Labelling Solutions
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Get Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-section">
        <div className="about-container-full">
          <ScrollReveal className="about-split__visual" delay={0.1}>
            <img src={aboutTeam} alt="NAZ Global Facility and Premium Products" />
          </ScrollReveal>

          <ScrollReveal className="about-split__text">
            <span className="about-label">ABOUT US</span>
            <h2 className="about-heading">
              Delivering Purity, Quality & Trust<br />
              Across The Globe
            </h2>
            <p className="about-desc">
              NAZ Global Ventures Pvt Ltd is a leading export–import and general trading company from India, delivering premium quality food products to global markets. We combine modern infrastructure, stringent quality standards and ethical business practices to ensure customer satisfaction worldwide.
            </p>
            <Link to="/about" className="about-cta-btn">
              Know More About Us <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          {/* Decorative leaf illustration */}
          <div className="about-leaf-decor" aria-hidden="true">
            <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M160 380C160 380 170 300 150 240C130 180 90 140 80 100C70 60 85 20 100 5" stroke="rgba(26,62,33,0.12)" strokeWidth="2" fill="none"/>
              <path d="M100 5C100 5 130 40 120 90C110 140 70 170 60 220C50 270 80 320 100 350" stroke="rgba(26,62,33,0.10)" strokeWidth="1.5" fill="none"/>
              <path d="M100 80C100 80 140 60 155 80C170 100 150 130 130 130C110 130 100 110 100 80Z" fill="rgba(26,62,33,0.06)" stroke="rgba(26,62,33,0.12)" strokeWidth="1.5"/>
              <path d="M80 150C80 150 40 140 30 165C20 190 45 210 65 205C85 200 85 175 80 150Z" fill="rgba(26,62,33,0.06)" stroke="rgba(26,62,33,0.12)" strokeWidth="1.5"/>
              <path d="M90 240C90 240 130 225 142 248C154 271 135 298 112 295C89 292 85 265 90 240Z" fill="rgba(26,62,33,0.06)" stroke="rgba(26,62,33,0.12)" strokeWidth="1.5"/>
              <path d="M120 320C120 320 80 315 72 335C64 355 85 372 105 368C125 364 128 345 120 320Z" fill="rgba(26,62,33,0.05)" stroke="rgba(26,62,33,0.10)" strokeWidth="1.5"/>
              {/* Leaf veins */}
              <path d="M100 80C110 95 120 105 130 110" stroke="rgba(26,62,33,0.08)" strokeWidth="1" fill="none"/>
              <path d="M80 150C65 170 55 185 50 195" stroke="rgba(26,62,33,0.08)" strokeWidth="1" fill="none"/>
              <path d="M90 240C105 260 115 275 120 285" stroke="rgba(26,62,33,0.08)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="section products-section">
        <div className="container">
          <div className="products-section__header-row">
            <ScrollReveal className="products-section__header-left">
              <span className="products-section__label">OUR PRODUCTS</span>
              <h2 className="products-section__title">
                Premium Quality Products<br />
                Sourced From The Finest Farms
              </h2>
            </ScrollReveal>
            <ScrollReveal className="products-section__header-right" delay={0.1}>
              <Link to="/products" className="products-section__view-all-btn">
                View All Products <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="product-category-grid">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.05}>
                <Link to={cat.to} className="product-category-card">
                  <div className="product-category-card__image-container">
                    <img src={cat.image} alt={cat.name.replace('\n', ' ')} className="product-category-card__image" />
                  </div>
                  <div className="product-category-card__content">
                    <h3 className="product-category-card__title">
                      {cat.name.split('\n').map((line, idx) => (
                        <span key={idx} className="product-category-card__title-line">
                          {line}
                          {idx < cat.name.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ===== PRIVATE LABEL PREVIEW ===== */}
      <section className="section section-light">
        <div className="container">
          <div className="private-split">
            <ScrollReveal delay={0.2} className="private-split__text">
              <span className="section-label">B2B Solutions</span>
              <h2 className="section-title">Custom <span>Business Services</span> for Global Brands</h2>
              <p className="section-subtitle">
                Build your own food brand with our end-to-end OEM private labelling service — from formulation to custom packaging to export-ready cartons.
              </p>
              <div className="private-features">
                {['OEM Manufacturing', 'Custom Packaging Design', 'Bulk Export Cartons', 'MOQ from 500 units', 'FSSAI & Halal Certified', 'Worldwide Shipping'].map(f => (
                  <div key={f} className="private-feature">
                    <span className="private-feature__check">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal className="private-split__visual">
              <div className="img-rounded" style={{ height: 460, overflow: 'hidden' }}>
                <img src={privateLabel} alt="Private Label Packaging" className="img-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="section regions-section">
        <div className="container">
          <ScrollReveal className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">Our Reach</span>
            <h2 className="section-title">Global <span>Export</span> Presence</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              We export to 25+ countries across Asia, Middle East, Africa, and Europe.
            </p>
          </ScrollReveal>

          <div className="regions-grid">
            {[
              { flag: '🇮🇳', name: 'India', role: 'Head Office & Sourcing Hub', city: 'Calicut, Kerala' },
              { flag: '🇦🇪', name: 'UAE', role: 'Regional Distribution Hub', city: 'Dubai' },
              { flag: '🇲🇾', name: 'Malaysia', role: 'South East Asia Operations', city: 'Kuala Lumpur' },
              { flag: '🌍', name: 'Global', role: 'Export to 25+ Countries', city: 'Worldwide Delivery' },
            ].map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.1}>
                <div className="region-card">
                  <div className="region-card__flag-wrapper">
                    <span className="region-card__flag">{r.flag}</span>
                  </div>
                  <h3 className="region-card__name">{r.name}</h3>
                  <p className="region-card__role">{r.role}</p>
                  <div className="region-card__city-badge">
                    <span>{r.city}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/export" className="btn btn-primary btn-lg">
              View Export Operations <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OUR BRANDS ===== */}
      <section className="section brands-section">
        <div className="container">
          <ScrollReveal className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ color: '#D4AF37' }}>Our Portfolio</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Our <span>Brands</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px', color: 'rgba(255,255,255,0.7)' }}>Three distinct brands, one commitment to excellence.</p>
          </ScrollReveal>

          <div className="brands-grid">
            {/* Card 1: NAZ */}
            <ScrollReveal delay={0.1}>
              <Link to="/brands" className="brand-card">
                <div className="brand-card__left">
                  <div className="brand-logo-naz">
                    <div className="brand-logo-naz__top">
                      <h3>NAZ</h3>
                      <Leaf size={22} className="brand-logo-naz__leaf" fill="#072214" />
                    </div>
                    <span className="brand-logo-naz__sub">GLOBAL VENTURES PVT LTD</span>
                  </div>
                  <p className="brand-card__desc">
                    Wide range of food products sourced from natural farms.
                  </p>
                </div>
                <div className="brand-card__right">
                  <img src={brandNaz} alt="NAZ Global Ventures mockup" className="brand-card__img" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 2: AJMEER GATE */}
            <ScrollReveal delay={0.2}>
              <Link to="/brands" className="brand-card">
                <div className="brand-card__left">
                  <div className="brand-logo-ajmeer">
                    <div className="brand-logo-ajmeer__badge">
                      <Crown size={15} className="brand-logo-ajmeer__crown" fill="#D4AF37" style={{ marginBottom: 2 }} />
                      <h3>AJMEER</h3>
                      <span className="brand-logo-ajmeer__sub">GATE</span>
                    </div>
                  </div>
                  <p className="brand-card__desc">
                    Premium rice varieties for every taste.
                  </p>
                </div>
                <div className="brand-card__right">
                  <img src={brandAjmeer} alt="Ajmeer Gate Rice mockup" className="brand-card__img" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 3: KERALA FARM */}
            <ScrollReveal delay={0.3}>
              <Link to="/brands" className="brand-card">
                <div className="brand-card__left">
                  <div className="brand-logo-kerala">
                    <h3>KERALA</h3>
                    <h3 className="brand-logo-kerala__second">FARM</h3>
                    <span className="brand-logo-kerala__sub">പഴമയുടെ തനിമ</span>
                  </div>
                  <p className="brand-card__desc">
                    Traditional taste, purity and wellness.
                  </p>
                </div>
                <div className="brand-card__right">
                  <img src={brandKerala} alt="Kerala Farm Coconut Oil mockup" className="brand-card__img" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">Client Trust</span>
            <h2 className="section-title">What Our <span>Partners</span> Say</h2>
          </ScrollReveal>

          <div className="testimonials-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={testIdx}
                className="testimonial-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonial-stars">
                  {Array(testimonials[testIdx].rating).fill(0).map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonials[testIdx].text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonials[testIdx].name[0]}
                  </div>
                  <div>
                    <strong>{testimonials[testIdx].name}</strong>
                    <span>{testimonials[testIdx].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-controls">
              <button onClick={() => setTestIdx(i => (i - 1 + testimonials.length) % testimonials.length)} className="testimonial-btn">
                <ChevronLeft size={20} />
              </button>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button key={i} className={`testimonial-dot${i === testIdx ? ' active' : ''}`} onClick={() => setTestIdx(i)} />
                ))}
              </div>
              <button onClick={() => setTestIdx(i => (i + 1) % testimonials.length)} className="testimonial-btn">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>


    </PageTransition>
  )
}

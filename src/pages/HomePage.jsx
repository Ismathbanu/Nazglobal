import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Globe, Award, Package, Users, Star, ChevronLeft, ChevronRight, TrendingUp, Shield, Leaf, Truck } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import heroBg from '../assets/hero_banner.png'
import datesPremium from '../assets/dates_premium.png'
import spices from '../assets/spices_collection.png'
import privateLabel from '../assets/private_label.png'
import exportImg from '../assets/export_logistics.png'
import aboutTeam from '../assets/about_team.png'
import riceImg from '../assets/rice_collection.png'
import pulsesImg from '../assets/pulses_seeds.png'
import oilsImg from '../assets/oils_natural.png'
import fruitsImg from '../assets/fruits_vegetables.png'
import './HomePage.css'

const stats = [
  { icon: Globe, value: '25+', label: 'Countries Served' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Package, value: '200+', label: 'Product SKUs' },
  { icon: Users, value: '500+', label: 'Global Clients' },
]

const productCategories = [
  { name: 'Rice', image: riceImg, desc: 'Premium aged long-grain Basmati, Jeerakasala, and traditional export quality rice.', to: '/products#rice', color: '#DAA520', badge: 'Export Quality' },
  { name: 'Pulses & Seeds', image: pulsesImg, desc: 'Nutrient-rich, high-protein lentils, chickpeas, organic chia and sesame seeds.', to: '/products#pulses', color: '#7D5A2C', badge: 'High Protein' },
  { name: 'Spices & Seasoning', image: spices, desc: 'Exquisite organic spices, pure ground powders, and authentic curry blends.', to: '/products#spices', color: '#C0392B', badge: 'Aromatic & Pure' },
  { name: 'Oil & Natural Products', image: oilsImg, desc: 'Cold-pressed virgin coconut oil, pure wild forest honey, and organic jaggery.', to: '/products#oils', color: '#2ECC71', badge: '100% Natural' },
  { name: 'Fruits & Vegetable', image: fruitsImg, desc: 'Farm-fresh, handpicked seasonal fruits and vegetables sourced directly from farms.', to: '/products#fruits', color: '#F39C12', badge: 'Farm Fresh' },
  { name: 'Premium Dates', image: datesPremium, desc: 'Luxury Ajwa, Sukkari, Mabroom, and gourmet imported date varieties.', to: '/dates', color: '#8B4513', badge: 'Luxury Grade' },
]

const testimonials = [
  { name: 'Ahmed Al Rashidi', role: 'Import Manager, Dubai', text: 'NAZ Global has been our trusted dates supplier for 5+ years. Exceptional quality, on-time delivery, and professional packaging every time.', rating: 5 },
  { name: 'Raj Kumar Nair', role: 'Procurement Head, Malaysia', text: 'Their private labelling service is outstanding. The team handled everything from branding to customs documentation perfectly.', rating: 5 },
  { name: 'Sarah Abdullah', role: 'F&B Director, Kuala Lumpur', text: 'Premium quality spices and rice at competitive export prices. NAZ Global is our go-to Indian supplier for all food categories.', rating: 5 },
]

const brands = [
  { name: 'Ajmeer Gate', tagline: 'Premium Date Collections', color: '#2d1a0a', accent: '#C9A227' },
  { name: 'Kerala Farm', tagline: 'Pure Organic From God\'s Own Country', color: '#1a2e1a', accent: '#3D6B3D' },
  { name: 'Naz Farm Fresh', tagline: 'Farm to Table, World to You', color: '#1a1a2e', accent: '#5B7FA3' },
]

function StatCounter({ value, label, icon: Icon, delay }) {
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
        <Icon size={22} />
      </div>
      <div className="stat-card__value">{count}{value.includes('+') ? '+' : ''}</div>
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
            <span className="badge badge-gold hero__badge">
              🌍 India · UAE · Malaysia
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Global Food Exporters
            <br />
            <span className="hero__title-accent">From India To The World</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium Dates, Rice, Spices, Pulses &amp; Private Labelling Solutions
            <br />for Global B2B Buyers and Distributors
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/products" className="btn btn-gold btn-lg">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Get Quote
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {['FSSAI Certified', 'ISO 22000', 'APEDA Registered', 'Halal Approved'].map(t => (
              <span key={t} className="hero__trust-chip">✓ {t}</span>
            ))}
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
      <section className="section section-white stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-split">
            <ScrollReveal className="about-split__visual">
              <div className="about-split__img-wrap">
                <img src={aboutTeam} alt="NAZ Global Team" className="img-cover" />
                <div className="about-split__badge-card">
                  <Award size={20} />
                  <div>
                    <strong>12+ Years</strong>
                    <span>of Export Excellence</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="about-split__text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                Trusted Global <span>Food Trading</span> Partner
              </h2>
              <p className="section-subtitle">
                NAZ Global Ventures Pvt Ltd is a premium international food import-export and general trading company with deep roots in Kerala, India — and a global reach spanning UAE, Malaysia, and beyond.
              </p>
              <div className="about-values">
                {[
                  { icon: Shield, label: 'Quality Assured', desc: 'Every product meets international export standards' },
                  { icon: Globe, label: 'Global Network', desc: 'Active operations across 25+ countries' },
                  { icon: Leaf, label: 'Organic & Natural', desc: 'Farm-fresh, minimally processed products' },
                  { icon: Truck, label: 'Reliable Logistics', desc: 'End-to-end export documentation & shipping' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div className="about-value" key={label}>
                    <div className="about-value__icon"><Icon size={18} /></div>
                    <div>
                      <strong>{label}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">What We Export</span>
            <h2 className="section-title">Our <span>Product</span> Categories</h2>
            <p className="section-subtitle">From premium dates to artisan spices — sourced from India's finest farms, packaged for global markets.</p>
          </ScrollReveal>

          <div className="products-grid">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.06}>
                <Link
                  to={cat.to}
                  className="product-image-card"
                  style={{
                    '--accent-color': cat.color,
                  }}
                >
                  <div className="product-image-card__bg-wrap">
                    <img src={cat.image} alt={cat.name} className="product-image-card__image" />
                    <div className="product-image-card__overlay" />
                  </div>
                  <div className="product-image-card__content">
                    <div className="product-image-card__body">
                      <h3 className="product-image-card__name">{cat.name}</h3>
                      <p className="product-image-card__desc">{cat.desc}</p>
                      <span className="product-image-card__cta">
                        View Products <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="products-cta">
            <Link to="/products" className="btn btn-outline-dark btn-lg">
              View All Products <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PREMIUM DATES SHOWCASE ===== */}
      <section className="dates-showcase">
        <div className="dates-showcase__bg">
          <img src={datesPremium} alt="Premium Dates" className="img-cover" />
          <div className="dates-showcase__overlay" />
        </div>
        <div className="container dates-showcase__content">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#C9A227' }}>Our Specialty</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              World-Class <span style={{ color: '#C9A227' }}>Premium Dates</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Direct sourced from Saudi Arabia and UAE. Premium varieties for retail, gifting, and bulk export.
            </p>
          </ScrollReveal>

          <div className="dates-varieties">
            {['Sukkari', 'Ajwa', 'Mabroom', 'Safawi', 'Sagai'].map((d, i) => (
              <ScrollReveal key={d} delay={i * 0.1}>
                <div className="date-chip">{d}</div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Link to="/dates" className="btn btn-gold btn-lg">
              Explore Dates Collection <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
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
      <section className="section section-green">
        <div className="container">
          <ScrollReveal className="section-header" style={{ textAlign: 'center', color: '#fff' }}>
            <span className="section-label" style={{ color: '#C9A227' }}>Our Reach</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Global <span style={{ color: '#C9A227' }}>Export</span> Presence</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)', margin: '0 auto 40px' }}>
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
                <div className="region-card card-glass">
                  <span className="region-card__flag">{r.flag}</span>
                  <h3 className="region-card__name">{r.name}</h3>
                  <p className="region-card__role">{r.role}</p>
                  <p className="region-card__city">{r.city}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/export" className="btn btn-gold btn-lg">
              View Export Operations <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OUR BRANDS ===== */}
      <section className="section section-cream">
        <div className="container">
          <ScrollReveal className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Our <span>Brands</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>Three distinct brands, one commitment to excellence.</p>
          </ScrollReveal>

          <div className="brands-grid">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 0.15}>
                <Link to="/brands" className="brand-card" style={{ background: brand.color }}>
                  <div className="brand-card__accent" style={{ background: brand.accent }} />
                  <h3 className="brand-card__name">{brand.name}</h3>
                  <p className="brand-card__tagline">{brand.tagline}</p>
                  <span className="brand-card__cta" style={{ color: brand.accent }}>
                    View Brand <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
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
                    <Star key={i} size={18} fill="#C9A227" color="#C9A227" />
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

      {/* ===== EXPORT CTA STRIP ===== */}
      <section className="export-cta-section">
        <div className="export-cta-bg">
          <img src={exportImg} alt="Export Operations" className="img-cover" />
          <div className="export-cta-overlay" />
        </div>
        <div className="container export-cta-content">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#C9A227' }}>Ready to Source?</span>
            <h2 className="section-title" style={{ color: '#fff', maxWidth: 600 }}>
              Start Your <span style={{ color: '#C9A227' }}>Export Journey</span> With Us Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32, fontSize: '1.05rem' }}>
              Get competitive pricing, quality assurance, and end-to-end logistics support.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Get Free Quote</Link>
              <Link to="/products" className="btn btn-outline btn-lg">View Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

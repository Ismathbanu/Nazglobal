import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Layers, Ship, Package, Truck, Tag, Globe, FileText, Shield, Award, Warehouse, Factory } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import servicesHero from '../assets/services_hero.png'
import servicesPackaging from '../assets/services_packaging.png'
import privateLabel from '../assets/private_label.png'
import './ServicesPage.css'

const stats = [
  { icon: Factory, value: '200+', label: 'Product SKUs' },
  { icon: Globe, value: '25+', label: 'Countries Served' },
  { icon: Ship, value: '10K+', label: 'Tonnes Exported' },
  { icon: Award, value: '12+', label: 'Years Experience' },
]

const services = [
  {
    icon: Tag,
    num: '01',
    title: 'Private Labelling',
    desc: 'Build your own food brand with our comprehensive OEM manufacturing and custom branding solutions. We handle everything from design to delivery.',
    tags: ['OEM Manufacturing', 'Custom Branding', 'Packaging Solutions', 'Product Labelling'],
  },
  {
    icon: Globe,
    num: '02',
    title: 'Import & Export Solutions',
    desc: 'Seamless international trading services connecting Indian food products to global markets. We handle all trade complexities for you.',
    tags: ['International Trading', 'Food Commodity Export', 'Global Distribution'],
  },
  {
    icon: Truck,
    num: '03',
    title: 'Reliable Supply & Hassle-Free Shipping',
    desc: 'End-to-end logistics with global container shipping, complete documentation support, and secure delivery to your doorstep.',
    tags: ['Global Logistics', 'Container Shipping', 'Documentation Support', 'Secure Delivery'],
  },
  {
    icon: Warehouse,
    num: '04',
    title: 'Bulk Food Supply',
    desc: 'Large-volume wholesale supply for distributors, retailers, and food service companies. Consistent quality at competitive export prices.',
    tags: ['Wholesale Supply', 'Distributor Support', 'Retail Supply Chain'],
  },
  {
    icon: Package,
    num: '05',
    title: 'Packaging & Export Solutions',
    desc: 'Professional export-ready packaging solutions designed to protect product integrity and meet international quality standards.',
    tags: ['Export Packaging', 'Bulk Packaging', 'Premium Product Packing'],
  },
]

const processSteps = [
  { num: '1', title: 'Inquiry & Consultation', desc: 'Share your requirements and we craft a custom solution for your market.' },
  { num: '2', title: 'Sourcing & Production', desc: 'Premium products sourced from certified farms and processed in FSSAI facilities.' },
  { num: '3', title: 'Quality & Packaging', desc: 'Rigorous quality checks, grading, and professional export-ready packaging.' },
  { num: '4', title: 'Shipping & Delivery', desc: 'Complete documentation, customs clearance, and reliable global shipping.' },
]

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="services-page-hero">
        <div className="services-page-hero__container">
          <ScrollReveal className="services-page-hero__text">
            <span className="services-page-hero__script">Our Services</span>
            <h1 className="services-page-hero__title">
              World-Class <span>Services</span><br />
              for Food Trade
            </h1>
            <p className="services-page-hero__desc">
              From private labelling to global logistics — we provide end-to-end solutions for food import, export, and distribution across 25+ countries.
            </p>

            <div className="services-page-hero__trust">
              <div className="services-page-hero__trust-item">
                <div className="services-page-hero__trust-icon">
                  <Tag size={16} strokeWidth={2.5} />
                </div>
                <div className="services-page-hero__trust-text">
                  <h4>Private Labelling</h4>
                  <p>OEM Brand Solutions</p>
                </div>
              </div>

              <div className="services-page-hero__trust-item">
                <div className="services-page-hero__trust-icon">
                  <Globe size={16} strokeWidth={2.5} />
                </div>
                <div className="services-page-hero__trust-text">
                  <h4>Global Logistics</h4>
                  <p>Multimodal Shipping</p>
                </div>
              </div>

              <div className="services-page-hero__trust-item">
                <div className="services-page-hero__trust-icon">
                  <CheckCircle size={16} strokeWidth={2.5} />
                </div>
                <div className="services-page-hero__trust-text">
                  <h4>Reliable Supply</h4>
                  <p>Consistent Quality</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="services-page-hero__visual" delay={0.2}>
            <img src={servicesHero} alt="Premium Food Export Services" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRIVATE LABELLING SPLIT (Priority Section) ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="services-split">
            <ScrollReveal>
              <span className="section-label">B2B Solutions</span>
              <h2 className="section-title">Build Your Brand with Our <span>Private Labelling</span></h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.85, marginBottom: 8 }}>
                Launch your own food brand without manufacturing investment. We handle everything — from custom formulation and packaging design to production and export-ready cartons.
              </p>
              <div className="services-checklist">
                {[
                  'OEM manufacturing for all product categories',
                  'Custom packaging design & artwork creation',
                  'Brand identity development & label compliance',
                  'Flexible MOQ starting from 500 units',
                  'FSSAI, Halal & ISO certified production',
                  'Complete export documentation support',
                ].map(item => (
                  <div key={item} className="services-check-item">
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary">Start Private Label Inquiry <ArrowRight size={16} /></Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="services-split__visual">
                <img src={privateLabel} alt="Private Label Packaging" />
                <div className="services-split__visual-badge">
                  <Award size={20} style={{ color: 'var(--primary)' }} />
                  <div>
                    <strong>50+ Active Clients</strong>
                    <span>Private Label Partners</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="section section-cream" id="services">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core <span>Business Services</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Comprehensive food trade solutions — from sourcing and private labelling to packaging, logistics, and global distribution.
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="service-card">
                  <span className="service-card__num">{s.num}</span>
                  <div className="service-card__icon">
                    <s.icon size={28} />
                  </div>
                  <h3>{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <div className="service-card__tags">
                    {s.tags.map(tag => (
                      <span key={tag} className="service-card__tag">
                        <CheckCircle size={11} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section-green">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Why NAZ Global</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Trusted by <span style={{ color: 'var(--gold)' }}>500+ Clients</span> Worldwide
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="services-stats-grid">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.label} className="services-stat card-glass">
                    <div className="services-stat__icon">
                      <IconComponent size={26} strokeWidth={1.5} />
                    </div>
                    <div className="services-stat__value">{stat.value}</div>
                    <div className="services-stat__label">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our <span>4-Step</span> Process</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Simple, transparent, and efficient — from inquiry to delivery.
            </p>
          </ScrollReveal>
          <div className="services-process-grid">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="services-process-card">
                  <div className="services-process-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-cream">
        <div className="container">
          <ScrollReveal>
            <div className="services-cta-banner">
              <span className="section-label" style={{ color: 'var(--gold)', position: 'relative', zIndex: 2 }}>Ready to Start?</span>
              <h2 className="section-title" style={{ color: '#fff', position: 'relative', zIndex: 2, marginBottom: 16 }}>
                Let's Build Your <span style={{ color: 'var(--gold)' }}>Global Food Business</span> Together
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px', position: 'relative', zIndex: 2, fontSize: '1.05rem', lineHeight: 1.8 }}>
                Whether you need private labelling, bulk supply, or complete export solutions — our team is ready to help you scale globally.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                <Link to="/contact" className="btn btn-gold btn-lg">Get Free Consultation</Link>
                <Link to="/products" className="btn btn-outline btn-lg">View Products</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

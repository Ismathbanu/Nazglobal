import { Link } from 'react-router-dom'
import { ArrowRight, Ship, FileText, Package, CheckCircle, Truck, Shield, Globe, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import exportContainer from '../assets/export_container.png'
import exportWarehouse from '../assets/export_warehouse.png'
import './ExportPage.css'

const exportCountries = [
  { name: 'India', lat: 11.25, lng: 75.78, role: 'Head Office & Sourcing', type: 'office' },
  { name: 'UAE', lat: 25.2, lng: 55.27, role: 'Regional Hub', type: 'office' },
  { name: 'Malaysia', lat: 3.14, lng: 101.68, role: 'SE Asia Operations', type: 'office' },
  { name: 'Saudi Arabia', lat: 24.7, lng: 46.7, role: 'Export Destination', type: 'export' },
  { name: 'Qatar', lat: 25.3, lng: 51.5, role: 'Export Destination', type: 'export' },
  { name: 'UK', lat: 51.5, lng: -0.12, role: 'Export Destination', type: 'export' },
  { name: 'Singapore', lat: 1.35, lng: 103.82, role: 'Export Destination', type: 'export' },
  { name: 'Australia', lat: -25.3, lng: 133.7, role: 'Export Destination', type: 'export' },
  { name: 'Canada', lat: 56.13, lng: -106.35, role: 'Export Destination', type: 'export' },
  { name: 'Bahrain', lat: 26.07, lng: 50.55, role: 'Export Destination', type: 'export' },
  { name: 'Oman', lat: 21.47, lng: 55.97, role: 'Export Destination', type: 'export' },
  { name: 'Germany', lat: 51.17, lng: 10.45, role: 'Export Destination', type: 'export' },
  { name: 'Kuwait', lat: 29.37, lng: 47.98, role: 'Export Destination', type: 'export' },
  { name: 'South Africa', lat: -30.56, lng: 22.94, role: 'Export Destination', type: 'export' },
  { name: 'Indonesia', lat: -0.79, lng: 113.92, role: 'Export Destination', type: 'export' },
]

const shippingSteps = [
  { step: 1, title: 'Order Confirmation', desc: 'Receive and confirm purchase order with specifications, delivery terms, and pricing.', icon: FileText },
  { step: 2, title: 'Sourcing & Production', desc: 'Source premium products from certified farms and process to export standards.', icon: Package },
  { step: 3, title: 'Quality Inspection', desc: 'Third-party quality inspection, grading, and certification before dispatch.', icon: CheckCircle },
  { step: 4, title: 'Documentation', desc: 'Prepare complete export documents — invoice, packing list, COA, phytosanitary certificate.', icon: FileText },
  { step: 5, title: 'Container Loading', desc: 'Professional container stuffing with proper fumigation and sealing protocols.', icon: Ship },
  { step: 6, title: 'Shipping & Delivery', desc: 'Sea/air freight dispatch with real-time tracking and customs clearance support.', icon: Truck },
]

const certifications = [
  { name: 'FSSAI', desc: 'Food Safety & Standards Authority of India', icon: '🇮🇳' },
  { name: 'ISO 22000', desc: 'International Food Safety Management', icon: '🌐' },
  { name: 'APEDA', desc: 'Agricultural & Processed Food Products', icon: '🌾' },
  { name: 'Halal', desc: 'Internationally Recognized Halal Certification', icon: '☪️' },
  { name: 'SPICES BOARD', desc: 'Spices Board of India Registered', icon: '🌶️' },
  { name: 'HACCP', desc: 'Hazard Analysis Critical Control Points', icon: '✅' },
]

export default function ExportPage() {
  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="export-hero">
        <div className="export-hero__bg">
          <img src={exportContainer} alt="Global Export" className="img-cover" />
          <div className="export-hero__overlay" />
        </div>
        <div className="container export-hero__content">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#C9A227' }}>Global Operations</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem,5.5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.02em' }}>
              From India's Farms to<br /><span style={{ color: '#C9A227' }}>World's Tables</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: 36, maxWidth: 560 }}>
              Reliable end-to-end export operations spanning sea freight, air cargo, and multimodal logistics to 25+ countries worldwide.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Get Export Quote <ArrowRight size={18} /></Link>
              <a href="#network" className="btn btn-outline btn-lg">View Network</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GLOBAL NETWORK SECTION (NO MAP) ===== */}
      <section className="section section-cream" id="network">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our Reach</span>
            <h2 className="section-title">Our <span>Export Network</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Strategic global offices and a robust distribution footprint spanning multiple continents and regions.
            </p>
          </ScrollReveal>

          {/* Core Hubs Cards */}
          <div className="network-hubs-title">
            <h3><span>Operational</span> Hubs &amp; Offices</h3>
          </div>
          
          <div className="network-hubs-grid">
            {exportCountries.filter(c => c.type === 'office').map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.1}>
                <div className="hub-card">
                  <div className="hub-card__pin">
                    <MapPin size={22} strokeWidth={1.5} />
                  </div>
                  <div className="hub-card__content">
                    <h4>{c.name}</h4>
                    <span className="hub-role">{c.role}</span>
                    <p className="hub-desc">
                      {c.name === 'India' && 'Global procurement center, certified processing/sorting facility, and export logistics command.'}
                      {c.name === 'UAE' && 'Middle East marketing headquarters and premier distribution gateway for the Gulf markets.'}
                      {c.name === 'Malaysia' && 'Southeast Asian logistics headquarters and localized consumer packaging operations.'}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Regional Export Destinations Grid */}
          <div className="network-destinations-title">
            <h3><span>Export</span> Destinations</h3>
          </div>

          <div className="destinations-grid">
            {[
              {
                region: 'Middle East & Gulf (GCC)',
                countries: ['Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait', 'UAE (Dubai Hub)']
              },
              {
                region: 'Asia-Pacific & Oceania',
                countries: ['Singapore', 'Australia', 'Indonesia', 'Malaysia Hub']
              },
              {
                region: 'Europe, Africa & Americas',
                countries: ['United Kingdom', 'Germany', 'Canada', 'South Africa']
              }
            ].map((reg, idx) => (
              <ScrollReveal key={reg.region} delay={idx * 0.1}>
                <div className="region-column">
                  <div className="region-header">
                    <h4>{reg.region}</h4>
                    <span className="region-count">{reg.countries.length} Markets</span>
                  </div>
                  <div className="region-countries-list">
                    {reg.countries.map(country => (
                      <div key={country} className="destination-item">
                        <span className="destination-dot"></span>
                        <span className="destination-name">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTAINER LOGISTICS SPLIT ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="export-visual-split">
            <ScrollReveal>
              <span className="section-label">Container Logistics</span>
              <h2 className="section-title">Professional <span>Container Shipping</span></h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.85, marginBottom: 8 }}>
                We handle full container load (FCL) and less-than-container load (LCL) shipments across all major trade routes. Our logistics team ensures proper container stuffing, fumigation, and seal protocols.
              </p>
              <div className="export-features-list">
                {[
                  '20ft and 40ft container options',
                  'Reefer containers for perishables',
                  'Professional fumigation & sealing',
                  'Multi-port shipping routes',
                  'Competitive freight rates',
                ].map(f => (
                  <div key={f} className="export-feature-item">
                    <CheckCircle size={16} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary">Get Shipping Quote <ArrowRight size={16} /></Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="export-visual-wrap">
                <img src={exportContainer} alt="Container Shipping" />
                <div className="export-visual-badge">
                  <Ship size={18} style={{ color: 'var(--primary)' }} />
                  <div>
                    <strong>FCL & LCL</strong>
                    <span>Container Options</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WAREHOUSE OPERATIONS SPLIT (REVERSED) ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="export-visual-split export-visual-split--reverse">
            <ScrollReveal>
              <div className="export-visual-wrap">
                <img src={exportWarehouse} alt="Warehouse Operations" />
                <div className="export-visual-badge">
                  <Package size={18} style={{ color: 'var(--primary)' }} />
                  <div>
                    <strong>FSSAI Certified</strong>
                    <span>Processing Facility</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="section-label">Operations</span>
              <h2 className="section-title">Warehouse <span>Operations</span></h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.85, marginBottom: 8 }}>
                Our FSSAI-certified warehouse and processing facility handles cleaning, grading, packaging, and quality inspection — all under one roof with strict hygiene protocols.
              </p>
              <div className="export-features-list">
                {[
                  'Climate-controlled storage',
                  'Automated cleaning & grading',
                  'Professional packaging lines',
                  'Quality lab for testing',
                  'Pest-free environment maintained',
                ].map(f => (
                  <div key={f} className="export-feature-item">
                    <CheckCircle size={16} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary">Schedule a Visit <ArrowRight size={16} /></Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SHIPPING PROCESS ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">How We Export</span>
            <h2 className="section-title">Our <span>Export Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A transparent, systematic 6-step process from order to delivery — ensuring quality and compliance at every stage.
            </p>
          </ScrollReveal>
          <div className="shipping-grid">
            {shippingSteps.map(({ step, title, desc, icon: Icon }, i) => (
              <ScrollReveal key={step} delay={i * 0.08}>
                <div className="shipping-step">
                  <div className="shipping-step__num">{step}</div>
                  <div className="shipping-step__icon"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGING STANDARDS ===== */}
      <section className="section section-dark">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ color: '#C9A227' }}>Quality Assurance</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Packaging <span style={{ color: '#C9A227' }}>Standards</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="packaging-grid">
              {[
                { icon: '📦', title: 'Export Cartons', desc: '5-ply corrugated cartons with moisture barriers' },
                { icon: '🎒', title: 'Retail Packs', desc: 'Branded pouches, jars, and tins for shelves' },
                { icon: '🏗️', title: 'Bulk Packaging', desc: 'PP bags, HDPE drums, and jumbo sacks' },
                { icon: '❄️', title: 'Cold Chain', desc: 'Temperature-controlled packing for perishables' },
                { icon: '🏷️', title: 'Custom Labels', desc: 'Multi-language labels meeting import requirements' },
                { icon: '🔒', title: 'Tamper Proof', desc: 'Sealed packaging with batch traceability' },
                { icon: '♻️', title: 'Eco-Friendly', desc: 'Recyclable and biodegradable options available' },
                { icon: '📋', title: 'Compliance', desc: 'Meets FDA, EU, and GCC import standards' },
              ].map((p, i) => (
                <div key={p.title} className="packaging-card">
                  <span className="packaging-card__icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DOCUMENTATION SUPPORT ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="export-visual-split">
            <ScrollReveal>
              <span className="section-label">Hassle-Free</span>
              <h2 className="section-title">Documentation <span>Support</span></h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.85, marginBottom: 8 }}>
                We handle all the paperwork so you can focus on your business. Our documentation team prepares every required certificate and clearance document for smooth customs processing.
              </p>
              <div className="export-features-list">
                {[
                  'Commercial invoice & packing list',
                  'Certificate of origin (COO)',
                  'Certificate of analysis (COA)',
                  'Phytosanitary certificate',
                  'Halal certification',
                  'Bill of lading / Airway bill',
                  'Insurance certificate',
                  'Customs clearance support',
                ].map(f => (
                  <div key={f} className="export-feature-item">
                    <CheckCircle size={16} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { val: '100%', lbl: 'Documentation Success', icon: '📋' },
                  { val: '24hrs', lbl: 'Response Time', icon: '⚡' },
                  { val: '25+', lbl: 'Countries Served', icon: '🌍' },
                  { val: '0%', lbl: 'Shipment Rejection', icon: '✅' },
                ].map(s => (
                  <div key={s.lbl} style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', padding: '28px 20px', textAlign: 'center', border: '1px solid var(--gray-light)' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 4 }}>{s.val}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gray)', fontWeight: 500 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Our Credentials</span>
            <h2 className="section-title">Certifications & <span>Compliance</span></h2>
          </ScrollReveal>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.08}>
                <div className="cert-card">
                  <div className="cert-icon">{cert.icon}</div>
                  <h3>{cert.name}</h3>
                  <p>{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPPLY CHAIN ===== */}
      <section className="section section-green" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 48 }}>
              Our <span style={{ color: '#C9A227' }}>Supply Chain</span> Capabilities
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {[
                { icon: '🏭', title: 'Verified Farms', desc: 'Direct partnerships with 200+ certified farms across India' },
                { icon: '🏪', title: 'Processing Units', desc: 'In-house cleaning, grading, and packaging facilities' },
                { icon: '🚢', title: 'Freight Partners', desc: 'Global sea & air freight network with competitive rates' },
                { icon: '📋', title: 'Documentation', desc: 'Full export clearance and compliance support' },
              ].map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.1}>
                  <div className="supply-card card-glass">
                    <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-sub)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div style={{ marginTop: 48 }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Start Your Export Enquiry <ArrowRight size={18} /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

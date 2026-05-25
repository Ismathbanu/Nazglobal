import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Globe, Award, Users, CheckCircle, Leaf, Handshake, Sparkles, Zap, Lightbulb } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import aboutTeam from '../assets/about_team.png'
import exportImg from '../assets/export_logistics.png'
import './AboutPage.css'

const values = [
  { icon: Leaf, title: 'Quality First', desc: 'Every product is rigorously tested and quality-verified before export.' },
  { icon: Handshake, title: 'Partnership', desc: 'We build long-term relationships, not just transactions.' },
  { icon: Globe, title: 'Global Thinking', desc: 'Local expertise with an international mindset and reach.' },
  { icon: Sparkles, title: 'Transparency', desc: 'Clear pricing, honest communication, reliable timelines.' },
  { icon: Zap, title: 'Agility', desc: 'Fast response, flexible MOQs, and adaptive supply chains.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously improving packaging, logistics, and product range.' },
]

const whyUs = [
  'Direct sourcing from certified Indian farms',
  'Custom private labelling with brand protection',
  'FSSAI, ISO 22000, APEDA, and Halal certified',
  'End-to-end export documentation support',
  'Competitive bulk pricing with flexible MOQs',
  'Dedicated account managers for every client',
  'Multi-lingual support (English, Arabic, Malay, Malayalam)',
  'Cold-chain logistics for perishable products',
]

const timeline = [
  { year: '2012', title: 'Founded in Kerala', desc: 'Started as a domestic spice trading business in Calicut, Kerala.' },
  { year: '2015', title: 'First Export', desc: 'Successfully exported first container of premium spices to UAE.' },
  { year: '2018', title: 'Malaysia Expansion', desc: 'Opened operations in Kuala Lumpur serving South East Asian markets.' },
  { year: '2020', title: 'Private Label Launch', desc: 'Launched private labelling services for 50+ international brands.' },
  { year: '2022', title: 'Brand Portfolio', desc: 'Launched Ajmeer Gate, Kerala Farm, and Naz Farm Fresh brands.' },
  { year: '2024', title: 'Global Scale', desc: 'Now exporting to 25+ countries across 4 continents.' },
]

const team = [
  { name: 'Mohammed Nazir', role: 'Founder & Managing Director', location: '📍 Calicut, India', initial: 'N' },
  { name: 'Faisal Al Rashid', role: 'Director – UAE Operations', location: '📍 Dubai, UAE', initial: 'F' },
  { name: 'Arjun Krishnan', role: 'Head of Exports & Logistics', location: '📍 Calicut, India', initial: 'A' },
  { name: 'Priya Menon', role: 'Quality Assurance Manager', location: '📍 Calicut, India', initial: 'P' },
]

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" style={{ background: 'var(--grad-hero)' }} />
        <div className="about-hero__img">
          <img src={aboutTeam} alt="NAZ Global Team" className="img-cover" />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 15, 5, 0.6)' }} />
        </div>
        <div className="container page-hero-content">
          <ScrollReveal>
            <span className="section-label">Our Story</span>
            <h1 className="section-title" style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
              Rooted in India,<br /><span style={{ color: '#C9A227' }}>Reaching the World</span>
            </h1>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
              A decade of trust, quality, and global food trade excellence from Kerala to the world.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">Connect With Us <ArrowRight size={18} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-split">
            <ScrollReveal>
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">From A Small <span>Calicut Warehouse</span> To Global Markets</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 20 }}>
                NAZ Global Ventures Pvt Ltd was born out of a simple vision: to bring the finest food products from India's rich agricultural heartland to tables across the world. Founded in Calicut, Kerala — India's historic spice trade capital — we began our journey as a domestic trading enterprise.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 32 }}>
                Today, we are a fully-fledged international food export company with offices in India, UAE, and Malaysia — serving buyers, importers, distributors, and retailers across 25+ countries on four continents.
              </p>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {[{ val: '25+', lbl: 'Countries' }, { val: '500+', lbl: 'Clients' }, { val: '12+', lbl: 'Years' }].map(s => (
                  <div key={s.lbl} className="about-stat">
                    <span className="about-stat__val">{s.val}</span>
                    <span className="about-stat__lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="timeline">
                {timeline.map((t, i) => (
                  <div key={t.year} className="timeline-item">
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-content">
                      <h4>{t.title}</h4>
                      <p>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Purpose & Direction</span>
            <h2 className="section-title">Mission &amp; <span>Vision</span></h2>
          </ScrollReveal>
          <div className="mv-grid">
            <ScrollReveal delay={0.1}>
              <div className="mv-card mv-card--mission">
                <div className="mv-card__icon"><Target size={28} /></div>
                <h3>Our Mission</h3>
                <p>To be the most trusted international food export partner — delivering premium quality products from India to global markets with transparency, reliability, and excellence at every step of the supply chain.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mv-card mv-card--vision">
                <div className="mv-card__icon"><Eye size={28} /></div>
                <h3>Our Vision</h3>
                <p>To become India's leading premium food export brand — recognized globally for quality, innovation, and sustainable sourcing — creating prosperity for farmers, partners, and communities alike.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mv-card mv-card--values">
                <div className="mv-card__icon"><Heart size={28} /></div>
                <h3>Our Promise</h3>
                <p>Every product that leaves our warehouse carries a promise — of quality tested to international standards, of ethical sourcing from verified farms, and of delivery you can count on.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core <span>Values</span></h2>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => {
              const IconComponent = v.icon
              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div className="value-card">
                    <div className="value-card__icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-cream">
        <div className="container">
          <div className="why-split">
            <ScrollReveal className="why-split__img">
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: 500 }}>
                <img src={exportImg} alt="Export Operations" className="img-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="why-split__content">
              <span className="section-label">Why NAZ Global</span>
              <h2 className="section-title">Why Leading Importers <span>Choose Us</span></h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                We don't just supply products — we supply peace of mind.
              </p>
              <div className="why-list">
                {whyUs.map(w => (
                  <div key={w} className="why-item">
                    <CheckCircle size={18} color="var(--primary)" />
                    <span>{w}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
                Get Started <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">The People Behind NAZ</span>
            <h2 className="section-title">Meet Our <span>Leadership</span></h2>
          </ScrollReveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-card__avatar">{member.initial}</div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__location">{member.location}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-green" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <Globe size={48} color="rgba(255,255,255,0.3)" style={{ margin: '0 auto 24px' }} />
            <h2 className="section-title" style={{ color: '#fff', margin: '0 auto 16px', maxWidth: 600 }}>
              Ready to Partner With <span style={{ color: '#C9A227' }}>NAZ Global?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
              Join 500+ satisfied importers and distributors who trust NAZ Global Ventures.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Get a Quote</Link>
              <Link to="/products" className="btn btn-outline btn-lg">View Products</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

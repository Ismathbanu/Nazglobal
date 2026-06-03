import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Globe, Award, Users, CheckCircle, Leaf, Handshake, Sparkles, Zap, Lightbulb, Diamond, Building2, Truck, ShoppingBasket } from 'lucide-react'
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
      {/* ===== ABOUT HERO ===== */}
      <section className="about-page-hero">
        <div className="about-page-hero__container">
          <ScrollReveal className="about-page-hero__text">
            <span className="about-page-hero__script">About Us</span>
            <h1 className="about-page-hero__title">
              Delivering Purity,<br />
              Quality & <span>Trust</span>
            </h1>
            <p className="about-page-hero__desc">
              NAZ Global Ventures Pvt Ltd is a leading export-import and general trading company from India, delivering premium quality food products to global markets with integrity and excellence.
            </p>
            
            <div className="about-page-hero__trust">
              <div className="about-page-hero__trust-item">
                <div className="about-page-hero__trust-icon">
                  <Leaf size={16} strokeWidth={2.5} />
                </div>
                <div className="about-page-hero__trust-text">
                  <h4>Premium Quality</h4>
                  <p>Products</p>
                </div>
              </div>

              <div className="about-page-hero__trust-item">
                <div className="about-page-hero__trust-icon">
                  <Globe size={16} strokeWidth={2.5} />
                </div>
                <div className="about-page-hero__trust-text">
                  <h4>Global Reach</h4>
                  <p>Trusted Worldwide</p>
                </div>
              </div>

              <div className="about-page-hero__trust-item">
                <div className="about-page-hero__trust-icon">
                  <Handshake size={16} strokeWidth={2.5} />
                </div>
                <div className="about-page-hero__trust-text">
                  <h4>Ethical Business</h4>
                  <p>Long Term Partnership</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about-page-hero__visual" delay={0.2}>
            <img src={aboutTeam} alt="NAZ Global Products & Facility Widescreen" />
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
              <div className="mv-card">
                <div className="mv-card__icon"><Leaf size={28} /></div>
                <h3>Our Mission</h3>
                <p>To provide premium quality food products with reliable supply, fair practices and world class service.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mv-card">
                <div className="mv-card__icon"><Eye size={28} /></div>
                <h3>Our Vision</h3>
                <p>To be a globally recognized export brand known for quality, trust and long-term relationships.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mv-card mv-card--values-list">
                <div className="mv-card__icon"><Diamond size={28} /></div>
                <h3>Our Values</h3>
                <div className="mv-card__list-wrapper">
                  <ul>
                    <li>Integrity & Transparency</li>
                    <li>Quality & Excellence</li>
                    <li>Customer Satisfaction</li>
                    <li>Sustainable Growth</li>
                  </ul>
                </div>
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
              <div className="why-split__image-container">
                <img src={exportImg} alt="Export Operations" className="img-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="why-split__content">
              <span className="section-label section-label--left">WHY CHOOSE US?</span>
              <h2 className="section-title section-title--left">Your Trusted Partner In Global Food Trade</h2>
              <div className="title-underline"></div>
              
              <div className="why-features-grid">
                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <Building2 size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Advanced Infrastructure</h3>
                    <p>State-of-the-art facilities for processing and packaging.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <ShoppingBasket size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Wide Product Range</h3>
                    <p>A diverse range of food products catering to global needs.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <Award size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Quality Assurance</h3>
                    <p>Strict quality control to ensure the best reaches you.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <Users size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Customer First Approach</h3>
                    <p>We prioritize our customers and build lasting relationships.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <Truck size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Timely Delivery</h3>
                    <p>On-time delivery with efficient logistics support.</p>
                  </div>
                </div>

                <div className="why-feature-item">
                  <div className="why-feature-icon">
                    <Leaf size={32} strokeWidth={1.5} />
                  </div>
                  <div className="why-feature-text">
                    <h3>Ethical & Sustainable</h3>
                    <p>We follow ethical business practices and support sustainability.</p>
                  </div>
                </div>
              </div>
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
              Ready to Partner With <span style={{ color: 'var(--gold)' }}>NAZ Global?</span>
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

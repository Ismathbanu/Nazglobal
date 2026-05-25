import { Link } from 'react-router-dom'
import { ArrowRight, Star, Package, Globe, Truck, CheckCircle, Shield, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import datesLuxury from '../assets/dates_luxury.png'
import datesPackaging from '../assets/dates_packaging.png'
import datesPremium from '../assets/dates_premium.png'
import sukkariImg from '../assets/sukkari_dates.png'
import ajwaImg from '../assets/ajwa_dates.png'
import mabroomImg from '../assets/mabroom_dates.png'
import packSafawi from '../assets/dates_pack_1.png'
import packSagai from '../assets/dates_pack_2.png'
import packMabroom from '../assets/dates_pack_3.png'
import packAjwa from '../assets/dates_pack_4.png'
import packMazafati from '../assets/dates_pack_5.png'
import './DatesPage.css'

const dateVarieties = [
  {
    name: 'Sukkari Dates',
    subtitle: 'The Golden Crown',
    origin: 'Al-Qassim, Saudi Arabia',
    grade: 'Grade A Premium',
    taste: 'Soft, sweet & caramel-like',
    shelf: '12-18 months',
    packaging: '500g | 1kg | 5kg | 10kg | Bulk',
    benefits: ['Rich in iron & calcium', 'Natural energy booster', 'Soft texture, easy to consume', 'Popular for gifting & retail'],
    image: sukkariImg,
  },
  {
    name: 'Ajwa Dates',
    subtitle: 'The Blessed Date',
    origin: 'Madinah, Saudi Arabia',
    grade: 'Madinah Authentic',
    taste: 'Dark, soft & mildly sweet',
    shelf: '18-24 months',
    packaging: '250g | 500g | 1kg | Gift Box',
    benefits: ['Highly prized in Islamic tradition', 'Rich in antioxidants', 'Distinct dark appearance', 'Premium gifting variety'],
    image: ajwaImg,
  },
  {
    name: 'Mabroom Dates',
    subtitle: 'The Royal Selection',
    origin: 'Madinah, Saudi Arabia',
    grade: 'Royal Grade',
    taste: 'Long, thin & chewy with toffee notes',
    shelf: '12-18 months',
    packaging: '500g | 1kg | 3kg | 5kg',
    benefits: ['Unique elongated shape', 'Chewy premium texture', 'Long shelf life', 'Popular in UAE & Malaysia'],
    image: mabroomImg,
  },
  {
    name: 'Safawi Dates',
    subtitle: 'The Midnight Pearl',
    origin: 'Madinah, Saudi Arabia',
    grade: 'Premium Dark Grade',
    taste: 'Moist, dark & richly sweet',
    shelf: '12 months',
    packaging: '500g | 1kg | 5kg | Bulk',
    benefits: ['High moisture content', 'Rich dark color', 'Excellent for cooking & snacking', 'Competitive pricing'],
    image: datesPremium,
  },
  {
    name: 'Sagai Dates',
    subtitle: 'The Desert Gold',
    origin: 'Al-Qassim, Saudi Arabia',
    grade: 'Premium Dry Grade',
    taste: 'Crispy outer, soft inner — unique dual texture',
    shelf: '18 months',
    packaging: '500g | 1kg | 3kg | 5kg',
    benefits: ['Unique two-tone appearance', 'Dual texture experience', 'Long shelf life', 'Perfect for premium gifting'],
    image: datesLuxury,
  },
]

const importCountries = [
  '🇦🇪 UAE', '🇲🇾 Malaysia', '🇸🇬 Singapore', '🇬🇧 United Kingdom',
  '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇧🇭 Bahrain', '🇴🇲 Oman',
  '🇩🇪 Germany', '🇨🇦 Canada', '🇦🇺 Australia', '🇰🇼 Kuwait',
  '🇮🇩 Indonesia', '🇵🇭 Philippines', '🇿🇦 South Africa',
]

const exportSpecs = [
  { label: 'Minimum Order', value: '100 KG per variety' },
  { label: 'Packaging Options', value: 'Retail pouch, Gift box, Bulk carton' },
  { label: 'Certifications', value: 'FSSAI · Halal · ISO 22000' },
  { label: 'Lead Time', value: '7–14 business days' },
  { label: 'Shipping', value: 'Sea & Air freight available' },
  { label: 'Private Label', value: 'Available from 500 units' },
]

export default function DatesPage() {
  return (
    <PageTransition>
      {/* ===== CINEMATIC HERO ===== */}
      <section className="dates-hero">
        <div className="dates-hero__bg">
          <img src={datesLuxury} alt="Premium Dates" className="img-cover" />
          <div className="dates-hero__overlay" />
        </div>
        <div className="container dates-hero__content">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#C9A227' }}>Our Specialty Product</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem,6vw,4.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              The World's Finest<br /><span style={{ color: '#C9A227' }}>Premium Dates</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: 36, maxWidth: 560 }}>
              Direct sourced from Saudi Arabian farms. Curated for discerning buyers, premium retailers, and gift market specialists across the globe.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Request Samples <ArrowRight size={18} /></Link>
              <a href="#varieties" className="btn btn-outline btn-lg">Explore Varieties</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ABOUT FARM FRESH DATES ===== */}
      <section className="section dates-section">
        <div className="container">
          <div className="dates-about">
            <ScrollReveal>
              <div className="dates-about__visual">
                <img src={datesLuxury} alt="Farm Fresh Dates" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <span className="section-label" style={{ color: '#C9A227' }}>About Our Dates</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Farm Fresh, <span style={{ color: '#C9A227' }}>Premium Quality</span>
              </h2>
              <p className="dates-about__text">
                Our premium dates are sourced directly from the finest orchards in Saudi Arabia's Al-Qassim and Madinah regions. Each variety is hand-selected, carefully graded, and packed under strict quality control to preserve the natural sweetness, moisture, and nutritional integrity.
              </p>
              <p className="dates-about__text" style={{ marginTop: 16 }}>
                We work directly with certified farms to ensure traceability, freshness, and authenticity — making us a trusted supplier for premium retailers, gifting companies, and wholesale distributors worldwide.
              </p>
              <div className="dates-about__features">
                {[
                  'Direct farm sourcing',
                  'Halal certified',
                  'Premium graded',
                  'Export documentation',
                  'Custom packaging',
                  'Private labelling',
                ].map(f => (
                  <div key={f} className="dates-about__feature">
                    <CheckCircle size={16} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PREMIUM DATE VARIETIES ===== */}
      <section className="section date-varieties-section">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our Collection</span>
            <h2 className="section-title">Premium <span>Date Varieties</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Handpicked from the finest Saudi Arabian orchards — available for retail, gifting, and bulk export.
            </p>
          </ScrollReveal>

          <div className="date-varieties-grid">
            {dateVarieties.map((date, i) => (
              <ScrollReveal key={date.name} delay={i * 0.08}>
                <div className="date-variety-card">
                  <div className="date-variety-card__image-wrap">
                    <img src={date.image} alt={date.name} className="date-variety-card__image" />
                    <div className="date-variety-card__image-overlay" />
                    <span className="date-variety-card__grade">{date.grade}</span>
                  </div>

                  <div className="date-variety-card__body">
                    <h3 className="date-variety-card__title">{date.name}</h3>
                    <p className="date-variety-card__subtitle">{date.subtitle}</p>

                    <div className="date-variety-card__specs">
                      <div className="date-spec">
                        <span>Origin</span>
                        <strong>{date.origin}</strong>
                      </div>
                      <div className="date-spec">
                        <span>Taste Profile</span>
                        <strong>{date.taste}</strong>
                      </div>
                      <div className="date-spec">
                        <span>Shelf Life</span>
                        <strong>{date.shelf}</strong>
                      </div>
                      <div className="date-spec">
                        <span>Pack Sizes</span>
                        <strong>{date.packaging}</strong>
                      </div>
                    </div>

                    <div className="date-variety-card__benefits">
                      {date.benefits.map(b => (
                        <div key={b} className="date-benefit">
                          <span className="date-benefit__check">✓</span>
                          <span className="date-benefit__text">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="date-variety-card__footer">
                      <Link to="/contact" className="date-variety-card__btn">
                        Request Variety <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREMIUM PACKS ===== */}
      <section className="dates-packs-section-v2">
        <div className="container">
          {/* 1 KG Section */}
          <div className="packs-v2-1kg-block">
            <ScrollReveal style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label" style={{ color: 'var(--gold)', display: 'block', marginBottom: 12 }}>Premium Retail Offerings</span>
              <h2 className="packs-v2-section-title">Our 1 Kg Premium Packs</h2>
              <p className="packs-v2-section-desc">
                Perfect for elite retailers, high-end supermarkets, and corporate gifting. Sourced from certified premium orchards, carefully selected, washed, and packed in luxury 1 KG boxes for ultimate freshness and visual prestige.
              </p>
            </ScrollReveal>

            <div className="packs-v2-1kg-grid">
              <ScrollReveal delay={0.1}>
                <div className="pack-v2-card">
                  <div className="pack-v2-card-image-wrap">
                    <span className="pack-v2-badge-tag">Midnight Pearl</span>
                    <img src={packSafawi} alt="Safawi Dates 1 Kg" className="pack-v2-image" />
                  </div>
                  <div className="pack-v2-card-content">
                    <h3 className="pack-v2-card-name">Safawi Dates (1 KG)</h3>
                    <p className="pack-v2-card-text">
                      Sought-after for their deep dark color and soft texture. Naturally sweet and nutrient-dense dates with an exquisite chew.
                    </p>
                    <div className="pack-v2-specs-grid">
                      <div className="pack-v2-spec-item">
                        <span>Origin</span>
                        <strong>Madinah, KSA</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Taste Profile</span>
                        <strong>Caramel Sweet</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Moisture</span>
                        <strong>15% - 18%</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Texture</span>
                        <strong>Soft & Chewy</strong>
                      </div>
                    </div>
                    <Link to="/contact" className="pack-v2-card-btn">
                      Inquire for 1kg Pack <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="pack-v2-card">
                  <div className="pack-v2-card-image-wrap">
                    <span className="pack-v2-badge-tag">Desert Gold</span>
                    <img src={packSagai} alt="Sagai Dates 1 Kg" className="pack-v2-image" />
                  </div>
                  <div className="pack-v2-card-content">
                    <h3 className="pack-v2-card-name">Sagai Dates (1 KG)</h3>
                    <p className="pack-v2-card-text">
                      Premium two-tone dates characterized by their dry golden tip and moist, soft amber-colored body.
                    </p>
                    <div className="pack-v2-specs-grid">
                      <div className="pack-v2-spec-item">
                        <span>Origin</span>
                        <strong>Al-Qassim, KSA</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Taste Profile</span>
                        <strong>Mildly Sweet</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Moisture</span>
                        <strong>12% - 14%</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Texture</span>
                        <strong>Crispy & Soft</strong>
                      </div>
                    </div>
                    <Link to="/contact" className="pack-v2-card-btn">
                      Inquire for 1kg Pack <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="pack-v2-card">
                  <div className="pack-v2-card-image-wrap">
                    <span className="pack-v2-badge-tag">Royal Selection</span>
                    <img src={packMabroom} alt="Mabroom Dates 1 Kg" className="pack-v2-image" />
                  </div>
                  <div className="pack-v2-card-content">
                    <h3 className="pack-v2-card-name">Mabroom Dates (1 KG)</h3>
                    <p className="pack-v2-card-text">
                      Slender, premium long dates with a beautiful reddish-brown skin and a rich, authentic toffee-like tone.
                    </p>
                    <div className="pack-v2-specs-grid">
                      <div className="pack-v2-spec-item">
                        <span>Origin</span>
                        <strong>Madinah, KSA</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Taste Profile</span>
                        <strong>Rich Toffee</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Moisture</span>
                        <strong>13% - 15%</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Texture</span>
                        <strong>Firm & Chewy</strong>
                      </div>
                    </div>
                    <Link to="/contact" className="pack-v2-card-btn">
                      Inquire for 1kg Pack <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="pack-v2-card">
                  <div className="pack-v2-card-image-wrap">
                    <span className="pack-v2-badge-tag">Blessed Fruit</span>
                    <img src={packAjwa} alt="Ajwa Dates 1 Kg" className="pack-v2-image" />
                  </div>
                  <div className="pack-v2-card-content">
                    <h3 className="pack-v2-card-name">Ajwa Dates (1 KG)</h3>
                    <p className="pack-v2-card-text">
                      Revered black round dates packed with high nutritional value, presenting a soft, smooth, honey-like taste.
                    </p>
                    <div className="pack-v2-specs-grid">
                      <div className="pack-v2-spec-item">
                        <span>Origin</span>
                        <strong>Madinah, KSA</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Taste Profile</span>
                        <strong>Honey & Herbal</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Moisture</span>
                        <strong>16% - 19%</strong>
                      </div>
                      <div className="pack-v2-spec-item">
                        <span>Texture</span>
                        <strong>Tender & Soft</strong>
                      </div>
                    </div>
                    <Link to="/contact" className="pack-v2-card-btn">
                      Inquire for 1kg Pack <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 5 KG Bottom Feature Section */}
          <div className="packs-v2-5kg-block">
            <div className="packs-v2-5kg-split">
              {/* Left Side */}
              <div className="packs-v2-5kg-left">
                <ScrollReveal>
                  <span className="packs-v2-badge">👑 Bulk Royal Selection</span>
                  <h2 className="packs-v2-section-title">Our 5 KG Mazafati Dates</h2>
                  <p className="packs-v2-5kg-desc">
                    Experience the ultimate luxury of our Premium 5 KG Mazafati Dates. Hand-harvested at peak freshness, these dates are globally distinguished by their dark black color, high moisture content, and exceptionally juicy caramel flesh. Sourced directly from our partner farms, they are shipped in specialized B2B export cartons to maintain their perfect temperature and texture.
                  </p>

                  {/* B2B Export Spec Sheet Grid */}
                  <div className="mazafati-specs-grid">
                    <div className="mazafati-spec-pill">
                      <span>Moisture Range</span>
                      <strong>18% - 22% (Moist/Fresh)</strong>
                    </div>
                    <div className="mazafati-spec-pill">
                      <span>Storage Temp</span>
                      <strong>0°C to 5°C (Refrigerated)</strong>
                    </div>
                    <div className="mazafati-spec-pill">
                      <span>Export Shelf Life</span>
                      <strong>18 Months (Stored)</strong>
                    </div>
                    <div className="mazafati-spec-pill">
                      <span>Monthly Supply</span>
                      <strong>50+ Metric Tons</strong>
                    </div>
                  </div>

                  <div className="packs-v2-badge-row">
                    <div className="packs-v2-badge-item">
                      <Award size={18} className="gold-icon" />
                      <div>
                        <h4>Certified Export Grade</h4>
                        <p>Fully certified with Halal, ISO 22000, and comprehensive customs compliance documentation.</p>
                      </div>
                    </div>
                    <div className="packs-v2-badge-item">
                      <Globe size={18} className="gold-icon" />
                      <div>
                        <h4>Custom Packaging & Private Label</h4>
                        <p>Available with tailored brand sleeves, gold foil printing, and B2B distributor-specific dimensions.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-gold btn-lg">Request Wholesale Catalog</Link>
                    <Link to="/services" className="btn btn-outline btn-lg">Private Label Options</Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side */}
              <div className="packs-v2-5kg-right">
                <ScrollReveal delay={0.2}>
                  <div className="pack-v2-5kg-image-container">
                    <div className="mazafati-backdrop-halo" />
                    <img src={packMazafati} alt="Premium 5 KG Mazafati Dates Box" className="pack-v2-5kg-image" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHOLESALE & BULK SUPPLY ===== */}
      <section className="section dates-section">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ color: '#C9A227' }}>B2B Supply</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Wholesale & <span style={{ color: '#C9A227' }}>Bulk Supply</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="dates-wholesale-grid">
              {[
                { icon: '📦', title: 'Bulk Orders', desc: 'Minimum 100KG per variety with competitive wholesale pricing for large-volume buyers.' },
                { icon: '🏷️', title: 'Private Label', desc: 'Create your own dates brand with our complete private labelling and packaging service.' },
                { icon: '🚢', title: 'Global Shipping', desc: 'Air and sea freight to 25+ countries with complete customs documentation.' },
                { icon: '📋', title: 'Documentation', desc: 'Full export paperwork — COA, phytosanitary certificate, Halal certification included.' },
                { icon: '🎁', title: 'Gift Packaging', desc: 'Premium gift boxes, Ramadan special packs, and custom corporate gifting solutions.' },
                { icon: '⭐', title: 'Quality Promise', desc: 'Every batch inspected, graded, and certified before dispatch. 100% satisfaction guarantee.' },
              ].map((item, i) => (
                <div key={item.title} className="dates-wholesale-card">
                  <span className="dates-wholesale-card__icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GLOBAL IMPORT COUNTRIES ===== */}
      <section className="section dates-section" style={{ background: 'linear-gradient(180deg, #0a1a0a 0%, #081408 100%)' }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-label" style={{ color: '#C9A227' }}>Our Reach</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Global <span style={{ color: '#C9A227' }}>Import Countries</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto 40px' }}>
              Our premium dates reach discerning buyers across these markets and beyond.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="dates-countries-grid">
              {importCountries.map(c => (
                <div key={c} className="dates-country-chip">{c}</div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EXPORT SPECS ===== */}
      <section className="section dates-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <ScrollReveal>
              <span className="section-label" style={{ color: '#C9A227' }}>Export Information</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Export <span style={{ color: '#C9A227' }}>Specifications</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
                We provide complete export documentation, phytosanitary certificates, and customs clearance support for all date shipments.
              </p>
              <Link to="/contact" className="btn btn-gold btn-lg">Start Your Order <ArrowRight size={18} /></Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="export-specs-table">
                {exportSpecs.map(spec => (
                  <div key={spec.label} className="export-spec-row">
                    <span className="export-spec-label">{spec.label}</span>
                    <span className="export-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== INQUIRY CTA ===== */}
      <section className="section dates-section" style={{ background: 'linear-gradient(180deg, #081408 0%, #050f05 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="dates-cta-section">
              <span className="section-label" style={{ color: '#C9A227', position: 'relative', zIndex: 2 }}>Ready to Order?</span>
              <h2 className="section-title" style={{ color: '#fff', position: 'relative', zIndex: 2, marginBottom: 16 }}>
                Source Premium <span style={{ color: '#C9A227' }}>Dates</span> for Your Market
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px', position: 'relative', zIndex: 2, fontSize: '1.05rem', lineHeight: 1.8 }}>
                Get competitive pricing, free samples, and complete export support. Our dates specialists are ready to serve you.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
                <Link to="/contact" className="btn btn-gold btn-lg">Request Free Samples</Link>
                <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

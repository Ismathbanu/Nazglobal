import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Package, Globe, Truck, CheckCircle, Shield, Award, Leaf, ShieldCheck, Sprout } from 'lucide-react'
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
import packSukkari from '../assets/sukkari_dates_box.png'
import mazafatiBox from '../assets/mazafati_dates_box.png'
import whyChooseUsBg from '../assets/why_choose_us_bg.png'
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
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <PageTransition>
      {/* ===== CINEMATIC HERO ===== */}
      <section className="dates-hero">
        <div className="dates-hero__full-layout">
          {/* Left — text content */}
          <ScrollReveal className="dates-hero__left">
            <span className="dates-hero__script">Premium</span>
            <h1 className="dates-hero__title">DATES</h1>
            <p className="dates-hero__desc">
              Indulge in the finest quality, naturally sweet and nutritious dates sourced from the best farms and packed with care.
            </p>
            <div className="dates-hero__badges">
              <div className="dates-hero__badge-item">
                <div className="dates-hero__badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div className="dates-hero__badge-text">
                  <strong>100% Natural</strong>
                  <span>& Premium Quality</span>
                </div>
              </div>
              <div className="dates-hero__badge-item">
                <div className="dates-hero__badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className="dates-hero__badge-text">
                  <strong>Carefully Packed</strong>
                  <span>for Freshness</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — full-bleed product image */}
          <div className="dates-hero__visual">
            <img src={datesPackaging} alt="NAZ Premium Dates Packaging" />
          </div>
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
              <span className="section-label" style={{ color: 'var(--gold)' }}>About Our Dates</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Farm Fresh, <span style={{ color: 'var(--gold)' }}>Premium Quality</span>
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

      {/* ===== 1 KG PREMIUM PACKS ===== */}
      <section className="packs-1kg-section">
        <div className="container">
          <div className="packs-1kg-header">
            <ScrollReveal className="packs-1kg-header__left">
              <span className="packs-1kg-label">Our 1 KG Premium Packs</span>
              <h2 className="packs-1kg-title">Premium Dates Varieties</h2>
              <div className="packs-1kg-emblem">
                <span className="packs-1kg-emblem-star">✦</span>
              </div>
            </ScrollReveal>
            <div className="packs-1kg-nav">
              <button className="packs-1kg-nav-btn" onClick={() => scroll('left')} aria-label="Previous page">
                ‹
              </button>
              <button className="packs-1kg-nav-btn" onClick={() => scroll('right')} aria-label="Next page">
                ›
              </button>
            </div>
          </div>

          <div className="packs-1kg-carousel-wrap" ref={carouselRef}>
            {[
              { name: 'Safawi Dates', desc: 'Rich Taste, Soft Texture and Natural Sweetness', image: packSafawi },
              { name: 'Sagai Dates', desc: 'Naturally Sweet, Soft & Chewy', image: packSagai },
              { name: 'Mabroom Dates', desc: 'Premium Quality Large & Juicy Dates', image: packMabroom },
              { name: 'Ajwa Dates', desc: 'The Finest Ajwa, Rich in Tradition', image: packAjwa },
              { name: 'Sukkari Dates', desc: 'Golden, Soft & Delightfully Sweet', image: packSukkari },
            ].map((pack) => (
              <div key={pack.name} className="pack-1kg-card">
                <div className="pack-1kg-card__image-wrap">
                  <img src={pack.image} alt={pack.name} className="pack-1kg-card__image" />
                </div>
                <div className="pack-1kg-card__content">
                  <h3 className="pack-1kg-card__name">{pack.name}</h3>
                  <p className="pack-1kg-card__desc">{pack.desc}</p>
                  <Link to="/contact" className="pack-1kg-card__btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="packs-1kg-dots">
            <span className="packs-1kg-dot active"></span>
            <span className="packs-1kg-dot"></span>
            <span className="packs-1kg-dot"></span>
          </div>
        </div>
      </section>

      {/* ===== 5 KG MAZAFATI DATES ===== */}
      <section className="mazafati-section">
        <div className="mazafati-full-layout">
          {/* Left — text content */}
          <ScrollReveal className="mazafati-left">
            <span className="mazafati-label">Our 5 KG</span>
            <h2 className="mazafati-heading">Mazafati Dates</h2>
            <div className="mazafati-divider">
              <span className="mazafati-divider__emblem">✦</span>
            </div>
            <p className="mazafati-desc">
              Experience the rich taste and natural sweetness of our Premium 5 KG Mazafati Dates. Known for their soft texture, juicy flesh, and deep caramel-like flavor.
            </p>
            <div className="mazafati-features">
              <div className="mazafati-feature">
                <div className="mazafati-feature__icon">
                  <Leaf size={20} />
                </div>
                <div className="mazafati-feature__text">
                  <strong>Farm Fresh</strong>
                  <span>Handpicked Dates</span>
                </div>
              </div>
              <div className="mazafati-feature">
                <div className="mazafati-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="mazafati-feature__text">
                  <strong>Soft & Juicy</strong>
                  <span>Perfectly Sourced</span>
                </div>
              </div>
              <div className="mazafati-feature">
                <div className="mazafati-feature__icon">
                  <Package size={20} />
                </div>
                <div className="mazafati-feature__text">
                  <strong>5 KG Pack</strong>
                  <span>Ideal for Families & Bulk</span>
                </div>
              </div>
              <div className="mazafati-feature">
                <div className="mazafati-feature__icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="mazafati-feature__text">
                  <strong>Export Quality</strong>
                  <span>Hygienically Packed</span>
                </div>
              </div>
            </div>
            <Link to="/contact" className="mazafati-cta-btn">
              Enquire Now
              <span className="mazafati-cta-btn__arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </ScrollReveal>

          {/* Right — yellow box image */}
          <div className="mazafati-visual">
            <img src={mazafatiBox} alt="Premium 5 KG Mazafati Dates Box" />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE OUR PREMIUM DATES ===== */}
      <section className="why-choose-us-section" style={{ backgroundImage: `url(${whyChooseUsBg})` }}>
        <div className="why-choose-us-overlay" />
        <div className="container why-choose-us-container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="why-choose-us-title">WHY CHOOSE OUR PREMIUM DATES?</h2>
          </ScrollReveal>
          
          <div className="why-choose-us-grid">
            {[
              {
                icon: <Leaf size={32} />,
                title: '100% Natural',
                subtitle: 'No Preservatives'
              },
              {
                icon: <Award size={32} />,
                title: 'Premium Quality',
                subtitle: 'Export Standard'
              },
              {
                icon: <Sprout size={32} />,
                title: 'Carefully Handpicked',
                subtitle: 'from Best Farms'
              },
              {
                icon: <ShieldCheck size={32} />,
                title: 'Hygienically Processed',
                subtitle: '& Packed'
              },
              {
                icon: <Truck size={32} />,
                title: 'Reliable Supply',
                subtitle: 'Worldwide'
              }
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08} className="why-choose-us-item">
                <div className="why-choose-us-icon-wrap">
                  {item.icon}
                </div>
                <h3 className="why-choose-us-item-title">{item.title}</h3>
                <p className="why-choose-us-item-subtitle">{item.subtitle}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INQUIRY CTA ===== */}
      <section className="section dates-section" style={{ background: 'linear-gradient(180deg, #081408 0%, #050f05 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="dates-cta-section">
              <span className="section-label" style={{ color: 'var(--gold)', position: 'relative', zIndex: 2 }}>Ready to Order?</span>
              <h2 className="section-title" style={{ color: '#fff', position: 'relative', zIndex: 2, marginBottom: 16 }}>
                Source Premium <span style={{ color: 'var(--gold)' }}>Dates</span> for Your Market
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

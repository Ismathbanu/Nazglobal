import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import brandNaz from '../assets/brand_nazfarmfresh.png'
import brandAjmeer from '../assets/brand_ajmeergate.png'
import brandKerala from '../assets/brand_keralafarm.png'
import brandsHeroBg from '../assets/products_hero_rice.png'
import riceImg from '../assets/rice_collection.png'
import pulsesImg from '../assets/pulses_seeds.png'
import spicesImg from '../assets/spices_display.png'
import oilsImg from '../assets/oils_natural.png'
import fruitsImg from '../assets/fruits_vegetables.png'
import honeyImg from '../assets/honey_collection.png'

// Kerala Farm Products High-Res Mockups
import keralaPalmSugar from '../assets/kerala_palm_sugar.png'
import keralaRockSalt from '../assets/kerala_rock_salt.png'
import keralaJaggery from '../assets/kerala_jaggery.png'
import keralaPonniRice from '../assets/kerala_ponni_rice.png'
import keralaSurtiKolam from '../assets/kerala_surti_kolam.png'
import keralaCoconutOil from '../assets/kerala_coconut_oil.png'
import keralaJeerakasalaRice from '../assets/kerala_jeerakasala_rice.png'
import keralaMattaRice from '../assets/kerala_matta_rice.png'

import './BrandsPage.css'

const brands = [
  {
    name: 'Naz Farm Fresh',
    tagline: 'Farm to Table, World to You',
    desc: 'Naz Farm Fresh is our everyday premium food brand — bringing quality rice, pulses, spices, and natural products to households and restaurants worldwide. We focus on wholesome, delicious food products at value-driven prices without ever compromising on quality.',
    story: 'Born from our commitment to making premium Indian food accessible globally, Naz Farm Fresh has grown to serve distributors and retailers across 15+ countries with consistent quality and competitive pricing.',
    accent: '#d32f2f',
    bg: 'linear-gradient(135deg, #1a0808 0%, #2e0f0f 100%)',
    image: brandNaz,
    products: ['Pulses', 'Rice', 'Honey', 'Oils', 'Spices', 'Vegetables'],
    markets: 'India · UAE · Malaysia · Singapore · GCC Countries',
    emoji: '🌾',
    tagBg: 'rgba(211, 47, 47, 0.15)',
    tagColor: '#d32f2f',
  },
  {
    name: 'Ajmeer Gate',
    tagline: 'The Royal Rice Collection',
    desc: 'Ajmeer Gate is our flagship premium rice brand — offering the finest aged basmati, aromatic jeerakasala, and specialty biriyani rice. Each grain is carefully selected, aged to perfection, and packaged in elegant premium packaging for discerning buyers.',
    story: 'Inspired by the royal culinary traditions, Ajmeer Gate represents our dedication to premium rice excellence. Every variety undergoes rigorous quality grading to ensure only the finest grains carry our name.',
    accent: 'var(--gold)',
    bg: 'linear-gradient(135deg, #1f1405 0%, #2f1e09 100%)',
    image: brandAjmeer,
    products: ['Premium Rice', 'Jeerakasala Rice', 'Biriyani Rice', 'Ponni Rice'],
    markets: 'UAE · Malaysia · Singapore · United Kingdom · Saudi Arabia',
    emoji: '👑',
    tagBg: 'rgba(201, 162, 39, 0.15)',
    tagColor: 'var(--gold)',
  },
  {
    name: 'Kerala Farm',
    tagline: "Pure Organic From God's Own Country",
    desc: "Kerala Farm celebrates the incredible biodiversity of Kerala, India's spice capital. From cold-pressed virgin coconut oil to traditional palm sugar candy, every product carries the authentic taste, purity, and wholesome goodness of Kerala's lush countryside.",
    story: "Rooted in Kerala's rich agricultural heritage, this brand brings centuries-old traditional food-making practices to the modern world. Each product is sourced from small farms and cooperatives across Kerala.",
    accent: '#4a8f4a',
    bg: 'linear-gradient(135deg, #091a09 0%, #112d11 100%)',
    image: brandKerala,
    products: ['Coconut Oil', 'Palm Sugar Candy', 'Rock Salt', 'Jaggery', 'Rice Products'],
    markets: 'India · Malaysia · Singapore · Australia · United Kingdom',
    emoji: '🌿',
    tagBg: 'rgba(74, 143, 74, 0.15)',
    tagColor: '#4a8f4a',
  },
]

const nazCarouselItems = [
  { name: 'Premium Pulses', desc: 'High-protein, clean and graded pulses.', image: pulsesImg },
  { name: 'Everyday Rice', desc: 'Premium quality daily use white and parboiled rice.', image: riceImg },
  { name: 'Pure Wild Honey', desc: '100% natural organic honey sourced from forest hives.', image: honeyImg },
  { name: 'Cold-Pressed Oils', desc: 'Hygienically extracted coconut, sesame, and sunflower oils.', image: oilsImg },
  { name: 'Everyday Spices', desc: 'Pure whole spices and authentic ground spice blends.', image: spicesImg },
  { name: 'Fresh Vegetables', desc: 'Farm fresh onions, potatoes, tomatoes and seasonal veggies.', image: fruitsImg },
]

const ajmeerCarouselItems = [
  { name: '1 kg Pack', desc: 'Aged Premium Basmati Rice', image: brandAjmeer },
  { name: '5 kg Pack', desc: 'Aged Premium Basmati Rice', image: brandAjmeer },
  { name: '10 kg Pack', desc: 'Aged Premium Basmati Rice', image: brandAjmeer },
  { name: '25 kg Pack', desc: 'Aged Premium Basmati Rice', image: brandAjmeer },
  { name: '50 kg Bag', desc: 'Aged Premium Basmati Rice', image: brandAjmeer },
]

const keralaCarouselItems = [
  { name: 'Palm Sugar Candy', desc: 'Traditional natural sweetener made from palm sap.', image: keralaPalmSugar },
  { name: 'Rock Salt', desc: 'Mineral-rich unrefined rock salt for daily health.', image: keralaRockSalt },
  { name: 'Jaggery', desc: 'Chemical-free traditional jaggery blocks and powder.', image: keralaJaggery },
  { name: 'Ponni Rice', desc: 'Premium quality daily use white and parboiled rice.', image: keralaPonniRice },
  { name: 'Surti Kolam Rice', desc: 'Aromatic and flavorful short-grain rice.', image: keralaSurtiKolam },
  { name: 'Coconut Oil', desc: '100% pure cold-pressed oil from Kerala coconuts.', image: keralaCoconutOil },
  { name: 'Jeerakasala Rice', desc: 'Traditional aromatic Kaima rice from Kerala.', image: keralaJeerakasalaRice },
  { name: 'Palakkadan Matta Rice', desc: 'Traditional red matta rice rich in fiber and nutrients.', image: keralaMattaRice },
]

export default function BrandsPage() {
  const nazCarouselRef = useRef(null)
  const ajmeerCarouselRef = useRef(null)
  const keralaCarouselRef = useRef(null)

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="brands-page-hero">
        <div className="brands-page-hero__container">
          <ScrollReveal className="brands-page-hero__text">
            <span className="brands-page-hero__script">Our Brand Portfolio</span>
            <h1 className="brands-page-hero__title">
              Three Distinct Brands,<br />One <span>Trust</span>
            </h1>
            <p className="brands-page-hero__desc">
              Each brand is crafted for a specific market segment — from everyday essentials to premium luxury products for discerning buyers worldwide.
            </p>

            <div className="brands-page-hero__trust">
              <div className="brands-page-hero__trust-item">
                <div className="brands-page-hero__trust-icon">
                  <Star size={16} strokeWidth={2.5} />
                </div>
                <div className="brands-page-hero__trust-text">
                  <h4>Naz Farm Fresh</h4>
                  <p>Everyday Wholesome Essentials</p>
                </div>
              </div>

              <div className="brands-page-hero__trust-item">
                <div className="brands-page-hero__trust-icon">
                  <Star size={16} strokeWidth={2.5} />
                </div>
                <div className="brands-page-hero__trust-text">
                  <h4>Ajmeer Gate</h4>
                  <p>Royal Basmati Rice</p>
                </div>
              </div>

              <div className="brands-page-hero__trust-item">
                <div className="brands-page-hero__trust-icon">
                  <Star size={16} strokeWidth={2.5} />
                </div>
                <div className="brands-page-hero__trust-text">
                  <h4>Kerala Farm</h4>
                  <p>Pure Traditional Products</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="brands-page-hero__visual" delay={0.2}>
            <img src={brandsHeroBg} alt="NAZ Global Brand Portfolio" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRAND OVERVIEW CARDS ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">At a Glance</span>
            <h2 className="section-title">Our <span>Brand Portfolio</span></h2>
          </ScrollReveal>
          <div className="brands-overview-grid">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 0.12}>
                <div className="brand-overview-card">
                  <div className="brand-overview-card__visual">
                    <img src={brand.image} alt={brand.name} />
                  </div>
                  <div className="brand-overview-card__body">
                    <h3>{brand.name}</h3>
                    <p>{brand.tagline}</p>
                    <div className="brand-overview-card__products">
                      {brand.products.map(p => (
                        <span key={p} className="tag">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DETAILED BRAND SECTIONS ===== */}
      <section className="section section-cream">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Brand Stories</span>
            <h2 className="section-title">Discover Each <span>Brand</span></h2>
          </ScrollReveal>

          <div className="brands-list-container">
            {brands.map((brand, i) => {
              // Decide which carousel items and ref to use
              let carouselItems = [];
              let carouselRef = null;
              if (brand.name.includes('Naz')) {
                carouselItems = nazCarouselItems;
                carouselRef = nazCarouselRef;
              } else if (brand.name.includes('Ajmeer')) {
                carouselItems = ajmeerCarouselItems;
                carouselRef = ajmeerCarouselRef;
              } else if (brand.name.includes('Kerala')) {
                carouselItems = keralaCarouselItems;
                carouselRef = keralaCarouselRef;
              }

              return (
                <div key={brand.name} className="brand-section-wrapper">
                  <ScrollReveal delay={0.1} className={`brand-detail ${i % 2 === 1 ? 'brand-detail--reverse' : ''}`}>
                    {/* Visual Half */}
                    <div className="brand-detail__visual">
                      <img src={brand.image} alt={brand.name} className="brand-detail__visual-img" />
                      <div className="brand-detail__visual-overlay" />
                      <div className="brand-detail__visual-content">
                        <span className="brand-detail__emoji">{brand.emoji}</span>
                        <span className="brand-detail__badge" style={{ background: brand.tagBg, color: brand.tagColor }}>
                          {brand.name}
                        </span>
                        <div className="brand-detail__markets">
                          <strong>Key Markets</strong>
                          {brand.markets}
                        </div>
                      </div>
                    </div>

                    {/* Content Half */}
                    <div className="brand-detail__content">
                      <div className="brand-accent-bar" style={{ background: brand.accent }} />
                      <h2 className="brand-detail__name">{brand.name}</h2>
                      <p className="brand-detail__tagline" style={{ color: brand.accent }}>{brand.tagline}</p>
                      <p className="brand-detail__desc">{brand.desc}</p>

                      <div className="brand-detail__products">
                        <strong>Product Range</strong>
                        <div className="brand-product-list">
                          {brand.products.map(p => (
                            <span key={p} className="brand-product-tag" style={{ borderColor: `${brand.accent}30`, color: 'var(--dark)' }}>
                              <Check size={12} style={{ marginRight: 6, color: brand.accent, display: 'inline' }} />
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="brand-story">
                        <div className="brand-story__title">
                          <Star size={14} style={{ color: brand.accent }} />
                          Brand Story
                        </div>
                        <p>{brand.story}</p>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Brand Carousel Section */}
                  {carouselItems.length > 0 && (
                    <ScrollReveal delay={0.2} className="brand-carousel-container">
                      <div className="brand-carousel-header">
                        <h3 className="brand-carousel-title" style={{ borderLeft: `4px solid ${brand.accent}` }}>
                          {brand.name === 'Ajmeer Gate' ? 'Basmati Rice Pack Sizes' : `${brand.name} Showcase`}
                        </h3>
                        <div className="brand-carousel-nav">
                          <button className="brand-carousel-nav-btn" onClick={() => scroll(carouselRef, 'left')} aria-label="Previous">
                            ‹
                          </button>
                          <button className="brand-carousel-nav-btn" onClick={() => scroll(carouselRef, 'right')} aria-label="Next">
                            ›
                          </button>
                        </div>
                      </div>

                      <div className="brand-carousel-wrap" ref={carouselRef}>
                        {carouselItems.map((item, idx) => (
                          <div key={idx} className="brand-carousel-card">
                            <div className="brand-carousel-card__image-wrap">
                              <img src={item.image} alt={item.name} className="brand-carousel-card__image" />
                            </div>
                            <div className="brand-carousel-card__footer" style={{ backgroundColor: brand.accent }}>
                              <span className="brand-carousel-card__pack-name" style={{ color: '#ffffff' }}>
                                {item.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal className="brand-cta-box" style={{ background: 'var(--grad-green)', color: 'var(--white)', padding: '64px 48px', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'var(--gold)', position: 'relative', zIndex: 2 }}>B2B & Distribution</span>
            <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: 20, position: 'relative', zIndex: 2 }}>Interested in Distributing Our Brands?</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', margin: '0 auto 36px', maxWidth: '600px', position: 'relative', zIndex: 2 }}>
              We partner with established distributors, retail chains, and wholesale importers worldwide to supply our premium product range.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Become a Partner</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Request Product Catalog</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import brandNaz from '../assets/brand_nazfarmfresh.png'
import brandAjmeer from '../assets/brand_ajmeergate.png'
import brandKerala from '../assets/brand_keralafarm.png'
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
    accent: '#C9A227',
    bg: 'linear-gradient(135deg, #1f1405 0%, #2f1e09 100%)',
    image: brandAjmeer,
    products: ['Premium Rice', 'Jeerakasala Rice', 'Biriyani Rice', 'Ponni Rice'],
    markets: 'UAE · Malaysia · Singapore · United Kingdom · Saudi Arabia',
    emoji: '👑',
    tagBg: 'rgba(201, 162, 39, 0.15)',
    tagColor: '#C9A227',
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

export default function BrandsPage() {
  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="page-hero brands-hero" style={{ background: 'var(--grad-hero)', minHeight: '60vh' }}>
        <div className="container page-hero-content" style={{ padding: 'calc(var(--navbar-h) + 96px) 0 96px' }}>
          <ScrollReveal>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Our Brand Portfolio</span>
            <h1 className="section-title" style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)' }}>
              Three Distinct Brands,<br /><span style={{ color: 'var(--gold)' }}>One Trust</span>
            </h1>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 0 }}>
              Each brand is crafted for a specific market segment — from everyday essentials to premium luxury products for discerning buyers worldwide.
            </p>
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
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 0.1} className={`brand-detail ${i % 2 === 1 ? 'brand-detail--reverse' : ''}`}>
                {/* Visual Half */}
                <div className="brand-detail__visual">
                  <img src={brand.image} alt={brand.name} className="brand-detail__visual-img" />
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
            ))}
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

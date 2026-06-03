import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import riceImg from '../assets/rice_collection.png'
import pulsesImg from '../assets/pulses_seeds.png'
import spicesImg from '../assets/spices_display.png'
import oilsImg from '../assets/oils_natural.png'
import fruitsImg from '../assets/fruits_vegetables.png'
import datesImg from '../assets/dates_luxury.png'
import productsBannerBg from '../assets/products_banner_bg.png'
import { ShieldCheck, Leaf, PackageCheck } from 'lucide-react'
import './ProductsPage.css'

const categories = [
  {
    id: 'rice',
    emoji: '🌾',
    name: 'Rice',
    desc: 'Premium aged rice varieties sourced from India\'s finest paddy fields — from aromatic long-grain basmati to traditional Kerala specialty rice.',
    image: riceImg,
    badgeText: 'Export Grade • Aged',
    products: [
      { name: 'Basmati Rice', icon: '🌾' },
      { name: 'Jeerakasala Rice', icon: '🍚' },
      { name: 'Ponni Rice', icon: '🍙' },
      { name: 'Matta Rice', icon: '🟤' },
      { name: 'Biriyani Rice', icon: '🥘' },
    ],
  },
  {
    id: 'pulses',
    emoji: '🫘',
    name: 'Pulses & Seeds',
    desc: 'High-protein pulses and nutrient-rich seeds — carefully cleaned, graded, and packed for bulk export and retail distribution worldwide.',
    image: pulsesImg,
    badgeText: 'High Protein • Natural',
    products: [
      { name: 'Green Gram', icon: '🟢' },
      { name: 'Black Gram', icon: '⚫' },
      { name: 'Red Kidney Beans', icon: '🔴' },
      { name: 'Chia Seeds', icon: '🌱' },
      { name: 'Flax Seeds', icon: '🟡' },
      { name: 'Sesame Seeds', icon: '⚪' },
    ],
  },
  {
    id: 'spices',
    emoji: '🌶️',
    name: 'Spices & Curry Powders',
    desc: 'Authentic Indian spices from Kerala\'s legendary spice gardens — whole spices, ground powders, and signature curry blends for global palates.',
    image: spicesImg,
    badgeText: 'Organic • FSSAI',
    products: [
      { name: 'Whole Spices', icon: '🌿' },
      { name: 'Curry Powders', icon: '🫙' },
      { name: 'Dry Chilli', icon: '🌶️' },
      { name: 'Chilli Flakes', icon: '🔥' },
    ],
  },
  {
    id: 'oils',
    emoji: '🥥',
    name: 'Oils & Natural Products',
    desc: 'Cold-pressed virgin coconut oil, pure wild honey, and organic jaggery — natural, unprocessed, and rich in traditional goodness.',
    image: oilsImg,
    badgeText: 'Cold Pressed • Pure',
    products: [
      { name: 'Coconut Oil', icon: '🥥' },
      { name: 'Honey', icon: '🍯' },
      { name: 'Jaggery', icon: '🟫' },
    ],
  },
  {
    id: 'fruits',
    emoji: '🍎',
    name: 'Fruits & Vegetables',
    desc: 'Fresh seasonal produce sourced from certified farms — premium onions, tomatoes, exotic fruits, and more for international markets.',
    image: fruitsImg,
    badgeText: 'Farm Fresh • Seasonal',
    products: [
      { name: 'Onion', icon: '🧅' },
      { name: 'Tomato', icon: '🍅' },
      { name: 'Potato', icon: '🥔' },
      { name: 'Pomegranate', icon: '🫐' },
      { name: 'Grapes', icon: '🍇' },
      { name: 'Apples', icon: '🍎' },
    ],
  },
  {
    id: 'dates',
    emoji: '🌴',
    name: 'Premium Dates',
    desc: 'World-class Saudi Arabian dates — hand-selected premium varieties for retail, gifting, and bulk export to discerning global buyers.',
    image: datesImg,
    badgeText: 'Grade A • Halal',
    products: [
      { name: 'Sukkari', icon: '✨' },
      { name: 'Ajwa', icon: '🌙' },
      { name: 'Mabroom', icon: '👑' },
      { name: 'Safawi', icon: '🌑' },
      { name: 'Sagai', icon: '🌟' },
    ],
  },
]

export default function ProductsPage() {
  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="products-page-hero">
        <div className="products-page-hero__container">
          <ScrollReveal className="products-page-hero__text">
            <span className="products-page-hero__script">Premium Quality</span>
            <h1 className="products-page-hero__title">
              Our Premium<br />
              Food <span>Products</span>
            </h1>
            <p className="products-page-hero__desc">
              A wide range of premium food products sourced from the finest farms and delivered to the world with integrity and excellence.
            </p>
            
            <div className="products-page-hero__trust">
              <div className="products-page-hero__trust-item">
                <div className="products-page-hero__trust-icon">
                  <ShieldCheck size={16} strokeWidth={2.5} />
                </div>
                <div className="products-page-hero__trust-text">
                  <h4>100% Natural</h4>
                  <p>Premium Quality</p>
                </div>
              </div>

              <div className="products-page-hero__trust-item">
                <div className="products-page-hero__trust-icon">
                  <Leaf size={16} strokeWidth={2.5} />
                </div>
                <div className="products-page-hero__trust-text">
                  <h4>Hygienically</h4>
                  <p>Processed</p>
                </div>
              </div>

              <div className="products-page-hero__trust-item">
                <div className="products-page-hero__trust-icon">
                  <PackageCheck size={16} strokeWidth={2.5} />
                </div>
                <div className="products-page-hero__trust-text">
                  <h4>Export Grade</h4>
                  <p>Secure Packaging</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="products-page-hero__visual" delay={0.2}>
            <img src={productsBannerBg} alt="NAZ Global Premium Products Banner" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRODUCTS COMPACT GRID SECTION ===== */}
      <section className="products-compact-section">
        <div className="container">
          <div className="products-compact-grid">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.08}>
                <div className="compact-category-card">
                  <div className="compact-category-card__image-wrap">
                    <img src={cat.image} alt={cat.name} className="compact-category-card__image" />
                    <div className="compact-category-card__image-overlay" />
                  </div>
                  <div className="compact-category-card__body">
                    <h3 className="compact-category-card__title">{cat.name}</h3>
                    <p className="compact-category-card__desc">{cat.desc}</p>
                    
                    <div className="compact-category-card__products">
                      {cat.products.map(p => (
                        <span key={p.name} className="compact-product-tag">
                          <span className="compact-product-tag__icon">{p.icon}</span>
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="compact-category-card__footer">
                    {cat.id === 'dates' ? (
                      <Link to="/dates" className="compact-category-card__btn compact-category-card__btn--dates">
                        Explore Collection <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Link to="/contact" className="compact-category-card__btn">
                        Request Quote <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-green" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 16 }}>
              Need Custom <span style={{ color: 'var(--gold)' }}>Product Specifications</span>?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              We accommodate custom grades, packaging sizes, and private label requirements for all product categories.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">Request Custom Quote</Link>
              <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}

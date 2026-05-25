import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Send } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import './ContactPage.css'

const offices = [
  {
    country: '🇮🇳 India',
    title: 'Head Office — Calicut',
    address: 'NAZ Global Ventures Pvt Ltd\nCalicut, Kerala — 673001\nIndia',
    phone: '+91 99999 99999',
    email: 'india@nazglobalventures.com',
    hours: 'Mon–Sat: 9 AM – 6 PM IST',
  },
  {
    country: '🇦🇪 UAE',
    title: 'Dubai Office',
    address: 'NAZ Global Ventures LLC\nDeira, Dubai\nUnited Arab Emirates',
    phone: '+971 50 999 9999',
    email: 'dubai@nazglobalventures.com',
    hours: 'Sun–Thu: 9 AM – 6 PM GST',
  },
  {
    country: '🇲🇾 Malaysia',
    title: 'Kuala Lumpur Office',
    address: 'NAZ Global Ventures Sdn Bhd\nKuala Lumpur\nMalaysia',
    phone: '+60 12 999 9999',
    email: 'kl@nazglobalventures.com',
    hours: 'Mon–Fri: 9 AM – 6 PM MYT',
  },
]

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    alert('Thank you for your message! We will respond within 24 hours.')
    reset()
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--grad-hero)', minHeight: '60vh' }}>
        <div className="container page-hero-content" style={{ padding: 'calc(var(--navbar-h) + 96px) 0 96px' }}>
          <ScrollReveal>
            <span className="section-label">Get In Touch</span>
            <h1 className="section-title" style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3.2rem)' }}>
              Let's <span style={{ color: '#C9A227' }}>Start a Conversation</span>
            </h1>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Whether you're looking for bulk supply, private labelling, or just want to learn more — we're here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section section-cream">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal>
              <div className="contact-form-wrap">
                <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: 8 }}>
                  Send Us a <span>Message</span>
                </h2>
                <p style={{ color: 'var(--gray)', marginBottom: 32, fontSize: '0.9rem' }}>
                  We typically respond within 24 business hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your full name"
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name && <span className="form-error">{errors.name.message}</span>}
                    </div>
                    <div className="contact-form__field">
                      <label>Company Name</label>
                      <input {...register('company')} placeholder="Your company" />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        placeholder="you@company.com"
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                    <div className="contact-form__field">
                      <label>Phone / WhatsApp</label>
                      <input {...register('phone')} placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Country / Location</label>
                    <input {...register('country')} placeholder="Your country" />
                  </div>
                  <div className="contact-form__field">
                    <label>Inquiry Type</label>
                    <select {...register('type')}>
                      <option value="">Select inquiry type</option>
                      <option>Bulk Product Sourcing</option>
                      <option>Private Labelling</option>
                      <option>Export Partnership</option>
                      <option>Distribution Agreement</option>
                      <option>Sample Request</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="contact-form__field">
                    <label>Message *</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      placeholder="Tell us about your requirements, products of interest, quantities, and target markets..."
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="form-error">{errors.message.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info Panel */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="contact-info-panel">
                  <h3>Quick Contact</h3>
                  <div className="contact-quick-items">
                    <a href="tel:+919999999999" className="contact-quick-item">
                      <div className="contact-quick-item__icon"><Phone size={18} /></div>
                      <div>
                        <strong>Call India Office</strong>
                        <span>+91 99999 99999</span>
                      </div>
                    </a>
                    <a href="mailto:info@nazglobalventures.com" className="contact-quick-item">
                      <div className="contact-quick-item__icon"><Mail size={18} /></div>
                      <div>
                        <strong>Email Us</strong>
                        <span>info@nazglobalventures.com</span>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919999999999?text=Hello%20NAZ%20Global%20Ventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-quick-item contact-quick-item--whatsapp"
                    >
                      <div className="contact-quick-item__icon" style={{ background: '#25D366' }}>
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <strong>WhatsApp</strong>
                        <span>Chat with us directly</span>
                      </div>
                    </a>
                    <div className="contact-quick-item">
                      <div className="contact-quick-item__icon"><Clock size={18} /></div>
                      <div>
                        <strong>Business Hours</strong>
                        <span>Mon–Sat: 9 AM – 6 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="contact-response-card">
                  <div className="response-indicator" />
                  <div>
                    <strong>Usually responds within 24 hours</strong>
                    <p>Our export team is available across India, UAE, and Malaysia time zones.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section section-white">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Our Locations</span>
            <h2 className="section-title">Global <span>Offices</span></h2>
          </ScrollReveal>
          <div className="offices-grid">
            {offices.map((office, i) => (
              <ScrollReveal key={office.title} delay={i * 0.1}>
                <div className="office-card">
                  <div className="office-card__flag">{office.country.split(' ')[0]}</div>
                  <h3 className="office-card__title">{office.title}</h3>
                  <p className="office-card__country">{office.country.split(' ').slice(1).join(' ')}</p>
                  <div className="office-details">
                    <div className="office-detail">
                      <MapPin size={14} />
                      <span style={{ whiteSpace: 'pre-line' }}>{office.address}</span>
                    </div>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="office-detail office-detail--link">
                      <Phone size={14} />
                      <span>{office.phone}</span>
                    </a>
                    <a href={`mailto:${office.email}`} className="office-detail office-detail--link">
                      <Mail size={14} />
                      <span>{office.email}</span>
                    </a>
                    <div className="office-detail">
                      <Clock size={14} />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62718.70792779498!2d75.74872088357059!3d11.258752863826898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x323333e0ae84921!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NAZ Global Ventures Office Location"
        />
      </section>
    </PageTransition>
  )
}

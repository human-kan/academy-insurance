import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Home, Car, HeartPulse, Briefcase, Star, ArrowRight, CheckCircle2, Award, RefreshCw, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/images/hero.jpg";
import testimonialBg from "@/assets/images/testimonial-bg.jpg";

const personalServices = [
  { icon: Home, title: "Homeowners, Rental & Condo", desc: "HO3 policies with automatic re-shopping at every renewal." },
  { icon: Car, title: "Personal Auto Insurance", desc: "Multiple carriers, including exclusive options not available to the public." },
  { icon: Shield, title: "Flood & Wind/Hurricane", desc: "Florida-specific coverage for storm and water damage." },
  { icon: Briefcase, title: "Watercraft & RV", desc: "Coverage for boats, RVs, and recreational vehicles." },
  { icon: HeartPulse, title: "Dental & Vision", desc: "Individual dental and vision coverage plans." },
  { icon: Heart, title: "Pet Insurance", desc: "Keep your pets covered with trusted pet insurance." },
  { icon: Gem, title: "Luxury & Collectibles", desc: "Jewelry, fine art, classic cars, and high-value collectibles." },
  { icon: Umbrella, title: "Special Events & Umbrella", desc: "One-day event coverage and personal umbrella liability." },
];

const whyUs = [
  { stat: "75+", label: "Years Combined Experience", desc: "Our team brings 75+ years of combined expertise in the insurance industry." },
  { stat: "A+", label: "BBB Accredited", desc: "Better Business Bureau accredited with an A+ rating — the highest possible." },
  { stat: "100%", label: "Independent Agency", desc: "We represent YOU, not any single carrier. Our loyalty is to our clients." },
  { stat: "Top 35", label: "St. Pete Agency", desc: "Recognized by Expertise.com as a Top 35 St. Petersburg Homeowners Agency." },
  { stat: "Auto", label: "Re-Shop Every Renewal", desc: "We automatically re-shop your rates at every renewal to find you the best deal." },
  { stat: "Women", label: "Women-Led Agency", desc: "Proudly women-led, based right here in St. Petersburg, FL." },
];

const faqs = [
  {
    q: "I'm buying my first home. What insurance do I need?",
    a: "You'll need an HO3 Homeowners Policy. Just provide us your name and property address and we'll get you a quote quickly."
  },
  {
    q: "I'm starting a business. What coverage do I need?",
    a: "Most businesses start with General Liability + Commercial Property. Commercial Property even covers your interior build-out if you're renting."
  },
  {
    q: "What is the minimum auto insurance required in Florida?",
    a: "Florida requires PIP ($10,000 minimum, no-fault) and Property Damage ($10,000 minimum). Bodily Injury is not mandatory but is highly recommended."
  },
  {
    q: "What is a deductible?",
    a: "Your deductible is your share of a covered loss. If your loss is less than your deductible, you pay it entirely out-of-pocket."
  },
  {
    q: "When is Workers Comp required in Florida?",
    a: "Workers Comp is required when you have 3 or more employees — except in construction, where it's required from employee #1."
  },
];

import { Heart, Gem, Umbrella } from "lucide-react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-serif font-bold text-primary text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 text-secondary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/80" />

        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center lg:text-left pt-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Independent. Women-Led. 75 Years of Combined Experience.</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Florida's Trusted <br className="hidden md:block" />
              <span className="text-secondary italic">Insurance Experts.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Serving all of Florida — from Miami to Jacksonville. We shop the market so you don't have to.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl" data-testid="button-hero-quote">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <a
                href="tel:7273430419"
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold text-white border border-white/30 hover:bg-white/10 bg-transparent rounded-lg flex items-center justify-center gap-2 transition-colors"
                data-testid="link-hero-phone"
              >
                Call Us: (727) 343-0419
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              { icon: Award, label: "A+ BBB Rated" },
              { icon: Star, label: "Top 35 St. Pete Agency" },
              { icon: RefreshCw, label: "We Re-Shop Every Renewal" },
              { icon: MapPin, label: "All of Florida Covered" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 text-primary font-semibold text-sm">
                <Icon className="h-5 w-5 text-secondary shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Insurance */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Personal Insurance</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Protecting what matters most to you and your family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-card border-t-4 border-t-secondary p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                data-testid={`card-personal-service-${index}`}
              >
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-md" data-testid="button-personal-more">
              <Link href="/services">Explore All Personal Coverage <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Insurance */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Commercial Insurance</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-white/70 text-lg">Comprehensive business protection for Florida companies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "General Liability", desc: "Protection against third-party bodily injury & property damage claims." },
              { title: "Commercial Property", desc: "Covers your business location, equipment & interior build-out." },
              { title: "Workers Compensation", desc: "Required for 3+ employees in Florida; mandatory in construction." },
              { title: "Commercial Auto", desc: "Fleet and business vehicle coverage." },
              { title: "Professional Liability", desc: "E&O coverage for professional service providers." },
              { title: "Bonding", desc: "Contractor and employee dishonesty bonds." },
              { title: "Contractors & Subcontractors", desc: "Specialized trades coverage for all construction types." },
              { title: "Employee Dental & Vision", desc: "Group benefits to attract and retain your best team." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
                data-testid={`card-commercial-service-${i}`}
              >
                <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-secondary/20 border border-secondary/40 p-8 rounded-2xl text-center max-w-xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Not sure what you need?</h3>
            <p className="text-white/70 mb-4">Let our experts guide you to the right commercial coverage.</p>
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-commercial-help">
              <Link href="/quote">Help Me Decide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Academy Insurance?</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Six reasons thousands of Floridians trust us with what matters most.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-8 border rounded-2xl hover:shadow-lg transition-all duration-300"
                data-testid={`card-why-us-${i}`}
              >
                <p className="font-serif text-5xl font-bold text-secondary mb-2">{item.stat}</p>
                <h3 className="font-bold text-primary text-lg mb-3">{item.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={testimonialBg} alt="Clients" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "When our home was damaged in a hurricane, Academy was there immediately. They handled everything and fought to get us a full settlement. We couldn't have done it without Rose and her team.", author: "Michael & Karen S.", role: "St. Petersburg Homeowners" },
              { quote: "As a small contractor, I was overpaying and underinsured. Academy re-shopped my policy, got me better coverage at a lower price, and I sleep better at night knowing I'm protected.", author: "James R.", role: "Florida Contractor" },
              { quote: "They re-shop every year automatically. I've saved money three years in a row without lifting a finger. The team is responsive and genuinely cares about their clients.", author: "Elena M.", role: "Tampa Business Owner" }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
              >
                <div className="mb-4 opacity-40">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
                </div>
                <p className="text-white text-lg leading-relaxed mb-6 italic">"{test.quote}"</p>
                <div>
                  <p className="text-white font-bold font-serif">{test.author}</p>
                  <p className="text-secondary text-sm">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>
          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Covered?</h2>
              <p className="text-xl text-white/80 mb-4">
                It takes 60 seconds to start. Our team will shop the market and find you the best rate — at no extra cost.
              </p>
              <p className="text-white/60 mb-10 text-sm">We typically respond within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-10 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl" data-testid="button-bottom-quote">
                  <Link href="/quote">Request Your Free Quote</Link>
                </Button>
                <a
                  href="tel:7273430419"
                  className="h-14 px-10 text-lg font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                  data-testid="link-bottom-phone"
                >
                  (727) 343-0419
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

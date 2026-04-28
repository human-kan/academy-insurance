import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Home, Star, ArrowRight, Award, RefreshCw, MapPin, ChevronDown, Briefcase, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBgImg from "@/assets/images/hero.jpg";
import testimonialBgImg from "@/assets/images/testimonial-bg.jpg";

const testimonials = [
  { quote: "We have been with Academy Insurance over ten years and have always found them to be very responsive to all our needs. When our previous Insurance Carrier pulled out of Florida Rose and her team were right on top of it getting a new quote for us. I highly recommend Academy for your insurance needs.", author: "Andrew N.", role: "Customer since 2016" },
  { quote: "Excellent rates and great customer service. Rose has always gone above and beyond for us. We own a geodesic dome home and Rose was the only broker who took the time to find great coverage and rates.", author: "Tina O.", role: "Customer since 2018" },
  { quote: "I am very satisfied with Academy Insurance Agency and Rose Wainwright. I've been a customer for over a decade and my husband, much longer than that. Their service is exceptional and we always get prompt responses to all of our questions. Very professional.", author: "Nancy R.", role: "Customer since 2014" },
  { quote: "The staff are very friendly, informed and knowledgeable. They go the extra mile to get the best quotes and make sure you have the coverage you need.", author: "Lynn Z.", role: "Customer since 2019" },
  { quote: "I love the personal service. Never feel that I'm ignored. Everyone I've dealt with is knowledgeable and helpful. I've needed them in the past (leaky roof), and it was handled well and quickly.", author: "Marcelo A.", role: "Customer since 2011" },
  { quote: "Rose has been very good at getting me the best rates for my boat, car and now my home. She is excellent at getting back to me and making sure all details are addressed.", author: "John L.", role: "Customer since 2021" },
];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
  const next = () => { setDirection(1); setIndex((i) => (i + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + testimonials.length) % testimonials.length); };

  const current = testimonials[index];

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-testid="testimonial-carousel"
    >
      <div className="relative">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 min-h-[340px] md:min-h-[300px] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <GoogleG className="h-7 w-7" />
              <div className="leading-tight">
                <p className="text-white text-sm font-semibold">Google Review</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 text-secondary fill-secondary" />)}
                </div>
              </div>
            </div>
            <span className="text-white/50 text-xs font-mono" data-testid="testimonial-counter">
              {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="text-white text-base md:text-lg leading-relaxed italic mb-6" data-testid="testimonial-quote">
                  "{current.quote}"
                </p>
                <div>
                  <p className="text-white font-bold font-serif" data-testid="testimonial-author">{current.author}</p>
                  <p className="text-secondary text-sm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:bg-secondary hover:text-primary transition-colors"
          data-testid="testimonial-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 bg-white text-primary p-2 md:p-3 rounded-full shadow-lg hover:bg-secondary hover:text-primary transition-colors"
          data-testid="testimonial-next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Select review">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            aria-selected={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-secondary" : "w-2 bg-white/30 hover:bg-white/60"}`}
            data-testid={`testimonial-dot-${i}`}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.google.com/search?q=Academy+Insurance+Agency+Inc+St+Petersburg+FL+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/80 hover:text-secondary text-sm font-medium underline-offset-4 hover:underline transition-colors"
          data-testid="link-view-all-google-reviews"
        >
          <GoogleG className="h-4 w-4" />
          View all reviews on Google
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

const heroBg = heroBgImg;

const personalServices = [
  "Homeowners, Rental & Condo",
  "Personal Auto Insurance",
  "Flood & Wind/Hurricane",
  "Watercraft & RV",
  "Dental & Vision",
  "Pet Insurance",
  "Luxury & Collectibles",
  "Special Events & Umbrella",
];

const commercialServices = [
  "General Liability",
  "Commercial Property",
  "Workers Compensation",
  "Commercial Auto",
  "Professional Liability",
  "Bonding",
  "Contractors & Subcontractors",
  "Employee Dental & Vision",
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
  { q: "I'm buying my first home. What insurance do I need?", a: "You'll need an HO3 Homeowners Policy. Just provide us your name and property address and we'll get you a quote quickly." },
  { q: "I'm starting a business. What coverage do I need?", a: "Most businesses start with General Liability + Commercial Property. Commercial Property even covers your interior build-out if you're renting." },
  { q: "What is the minimum auto insurance required in Florida?", a: "Florida requires PIP ($10,000 minimum, no-fault) and Property Damage ($10,000 minimum). Bodily Injury is not mandatory but is highly recommended." },
  { q: "What is a deductible?", a: "Your deductible is your share of a covered loss. If your loss is less than your deductible, you pay it entirely out-of-pocket." },
  { q: "When is Workers Comp required in Florida?", a: "Workers Comp is required when you have 3 or more employees — except in construction, where it's required from employee #1." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
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
      {/* Hero */}
      <section className="relative pt-4 pb-12 md:pt-6 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center 65%' }} />
        <div className="absolute inset-0 z-10 bg-primary/90" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center lg:text-left">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Independent. Women-Led. 75 Years of Combined Experience.</span>
              </div>
            </motion.div>
            <motion.h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Florida's Trusted <br className="hidden md:block" />
              <span className="text-secondary italic">Insurance Experts.</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Serving all of Florida — from Miami to Jacksonville. We shop the market so you don't have to.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <a href="tel:7273430419" className="w-full sm:w-auto h-14 px-8 text-base font-semibold text-white border border-white/30 hover:bg-white/10 bg-transparent rounded-lg flex items-center justify-center gap-2 transition-colors">
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

      {/* Coverage — compact boxes (Personal + Commercial side by side) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Coverage Built Around You</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">From your family home to your growing business — we've got Florida covered.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Personal box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary">Personal Insurance</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Protecting what matters most — your home, car, family, and everything in between.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8 text-sm text-foreground/80 flex-1">
                {personalServices.map((title) => (
                  <li key={title} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full bg-primary text-white hover:bg-primary/90 mt-auto">
                <Link href="/services">View Personal Insurance <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>

            {/* Commercial box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary text-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Briefcase className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Commercial Insurance</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Comprehensive business protection for Florida companies of all sizes.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8 text-sm text-white/80 flex-1">
                {commercialServices.map((title) => (
                  <li key={title} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold mt-auto">
                <Link href="/commercial">View Commercial Insurance <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center p-8 border rounded-2xl hover:shadow-lg transition-all duration-300">
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
          <img src={testimonialBgImg} alt="Clients" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <GoogleG className="h-4 w-4" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">Verified Google Reviews</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />)}
              </div>
              <span className="text-white/80 text-sm font-medium ml-2">5.0 from real customers</span>
            </div>
          </div>
          <TestimonialCarousel />
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
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
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
              <p className="text-xl text-white/80 mb-4">It takes 60 seconds to start. Our team will shop the market and find you the best rate — at no extra cost.</p>
              <p className="text-white/60 mb-10 text-sm">We typically respond within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-10 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl">
                  <Link href="/quote">Request Your Free Quote</Link>
                </Button>
                <a href="tel:7273430419" className="h-14 px-10 text-lg font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
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

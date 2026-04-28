import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Home, Car, HeartPulse, Briefcase, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/images/hero.jpg";
import testimonialBg from "@/assets/images/testimonial-bg.jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/80 backdrop-blur-[2px]" />
        
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center lg:text-left pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Trusted by 10,000+ Families</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Protecting What <br className="hidden md:block" />
              <span className="text-secondary italic">Matters Most.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive insurance solutions tailored for your unique life. Experience peace of mind with advisory-led coverage designed to secure your future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="xl" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl" data-testid="button-hero-quote">
                <Link href="/quote">Get Your Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto h-14 px-8 text-base font-semibold text-white border-white/30 hover:bg-white/10 bg-transparent" data-testid="button-hero-services">
                <Link href="/services">Explore Coverage</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale">
            {/* Logos represented by stylized text for the mockup */}
            <div className="text-xl font-bold font-serif">A-Rated Carriers</div>
            <div className="text-xl font-bold font-serif">J.D. Power 2024</div>
            <div className="text-xl font-bold font-serif">BBB Accredited</div>
            <div className="text-xl font-bold font-serif">Forbes 5-Star</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Tailored Coverage for Every Stage</h2>
            <p className="text-muted-foreground text-lg">We don't just sell policies; we build comprehensive protection strategies that evolve as your life changes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Auto Insurance", icon: Car, desc: "Premium protection for your vehicles with comprehensive liability and collision coverage." },
              { title: "Home Insurance", icon: Home, desc: "Safeguard your most valuable asset against damage, theft, and natural disasters." },
              { title: "Life Insurance", icon: HeartPulse, desc: "Secure your family's financial future with term and whole life policy options." },
              { title: "Business Coverage", icon: Briefcase, desc: "Robust protection strategies designed specifically to shield your enterprise." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors group/link" data-testid={`link-service-card-${index}`}>
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">The Pinnacle Difference</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike direct writers or algorithms, we are independent advisors. We shop the market to find the precise coverage you need at the best possible value, standing by your side when you need to file a claim.
                </p>

                <div className="space-y-4">
                  {[
                    "Independent agents working for you, not the carrier",
                    "Annual policy reviews to ensure optimal coverage",
                    "Dedicated claims advocacy and support",
                    "Customized packages bundling home, auto, and life"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="mt-10" size="lg" data-testid="button-home-about">
                  <Link href="/about">Learn Our Story</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Financial Advisor Meeting" 
                  className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={testimonialBg} alt="Happy clients" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />)}
            </div>
            <p className="text-primary-foreground/80 text-lg">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "When our home was damaged by the storm, Pinnacle was there immediately. They handled the entire claims process and fought to get us everything we deserved.", author: "Sarah & Mark T.", role: "Homeowners" },
              { quote: "As a small business owner, liability is terrifying. The team at Pinnacle audited my previous policies, found critical gaps, and actually lowered my total premiums.", author: "James R.", role: "CEO, TechFlow Inc." },
              { quote: "Setting up our life insurance was surprisingly simple. Our advisor explained complex terms in plain English, allowing us to make confident decisions for our children.", author: "Elena M.", role: "Mother of two" }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
              >
                <div className="mb-6 opacity-50">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
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

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Ready for Absolute Certainty?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                It takes 60 seconds to start the process. Get a comprehensive review and a competitive quote from our expert advisors today.
              </p>
              <Button asChild size="xl" className="h-14 px-10 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl" data-testid="button-bottom-quote">
                <Link href="/quote">Request Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

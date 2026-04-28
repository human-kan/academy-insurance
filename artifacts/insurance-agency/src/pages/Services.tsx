import { motion } from "framer-motion";
import { Link } from "wouter";
import { Car, Home, HeartPulse, Briefcase, Activity, Shield, Umbrella, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceAuto from "@/assets/images/service-auto.jpg";
import serviceHome from "@/assets/images/service-home.jpg";
import serviceLife from "@/assets/images/service-life.jpg";
import serviceBusiness from "@/assets/images/service-business.jpg";
import serviceHealth from "@/assets/images/service-health.jpg";

export default function ServicesPage() {
  const services = [
    {
      id: "auto",
      title: "Auto Insurance",
      icon: Car,
      image: serviceAuto,
      description: "Comprehensive coverage for your vehicles, keeping you safe on the road.",
      details: "From mandatory liability coverage to comprehensive protection against theft and natural disasters, we tailor auto policies that reflect your driving habits and vehicle value. We ensure you're never left stranded.",
      features: ["Collision & Comprehensive", "Uninsured Motorist Protection", "Roadside Assistance", "Rental Reimbursement"]
    },
    {
      id: "home",
      title: "Homeowners Insurance",
      icon: Home,
      image: serviceHome,
      description: "Fortify your greatest asset and everything inside it against the unexpected.",
      details: "Your home is more than an investment; it's where your life happens. Our robust homeowners policies cover structural damage, personal property loss, and liability, providing complete peace of mind.",
      features: ["Dwelling Coverage", "Personal Property Protection", "Personal Liability", "Loss of Use Coverage"]
    },
    {
      id: "life",
      title: "Life Insurance",
      icon: HeartPulse,
      image: serviceLife,
      description: "Ensure your family's financial stability, no matter what tomorrow brings.",
      details: "Life insurance is the ultimate act of love. We help you navigate the complexities of term vs. whole life, calculating precise coverage needs to protect mortgages, education funds, and legacy wealth.",
      features: ["Term Life Insurance", "Whole Life Policies", "Universal Life", "Estate Planning Solutions"]
    },
    {
      id: "business",
      title: "Business & Commercial",
      icon: Briefcase,
      image: serviceBusiness,
      description: "Shield your enterprise from operational risks, liabilities, and interruptions.",
      details: "You built your business with sweat and capital. Don't let a lawsuit or disaster tear it down. We provide comprehensive commercial packages customized for your specific industry risks.",
      features: ["General Liability (CGL)", "Commercial Property", "Workers' Compensation", "Cyber Liability"]
    },
    {
      id: "health",
      title: "Health & Medical",
      icon: Activity,
      image: serviceHealth,
      description: "Access top-tier medical care with comprehensive individual and group health plans.",
      details: "Navigating the healthcare market is daunting. Our advisors help you compare networks, deductibles, and benefits to find the optimal health insurance strategy for your family or your employees.",
      features: ["Individual & Family Plans", "Group Employer Benefits", "Dental & Vision Add-ons", "Medicare Supplements"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 md:py-28 text-center px-4">
        <div className="container mx-auto">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Protection
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We don't sell generic policies. We engineer sophisticated safety nets designed specifically for your life, assets, and business.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-wider uppercase text-sm mb-4">
                    <Shield className="h-4 w-4" />
                    Coverage Area
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-xl font-medium text-foreground mb-4">{service.description}</p>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.details}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-secondary/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-secondary-foreground" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 shadow-md group" data-testid={`button-quote-${service.id}`}>
                    <Link href={`/quote?type=${service.id}`}>
                      Get a {service.title} Quote
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umbrella / Bundling CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <Umbrella className="h-16 w-16 text-secondary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">The Power of Bundling</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Consolidate your policies. When you bundle home, auto, and life with Pinnacle, you don't just eliminate administrative headaches—you unlock significant multi-line discounts and seamless claims handling.
          </p>
          <Button asChild size="xl" className="h-14 px-10 text-lg font-bold bg-white text-primary hover:bg-gray-100 shadow-xl" data-testid="button-bundle-quote">
            <Link href="/quote?type=bundle">Request a Bundle Review</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

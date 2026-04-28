import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, ArrowRight, Check, Briefcase, Users, Truck, FileText, ClipboardList, HardHat, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceBusiness from "@/assets/images/service-business.jpg";
import serviceAuto from "@/assets/images/service-auto.jpg";
import serviceHome from "@/assets/images/service-home.jpg";
import serviceHealth from "@/assets/images/service-health.jpg";
import serviceLife from "@/assets/images/service-life.jpg";

const commercialServices = [
  {
    icon: Shield,
    title: "General Liability",
    image: serviceBusiness,
    desc: "Protection against third-party bodily injury & property damage claims.",
    details: "General Liability is the foundation of most commercial policies. It protects your business from third-party claims involving bodily injury, property damage, and personal/advertising injury that occur on your premises or as a result of your operations.",
    features: ["Bodily Injury Coverage", "Property Damage Liability", "Personal & Advertising Injury", "Products & Completed Operations"],
  },
  {
    icon: Briefcase,
    title: "Commercial Property",
    image: serviceHome,
    desc: "Covers your business location, equipment & interior build-out.",
    details: "Commercial Property insurance protects the physical assets of your business — whether you own or lease. It covers your building, equipment, inventory, and even the interior build-out of your rented space if something goes wrong.",
    features: ["Building Coverage", "Business Personal Property", "Business Income/Extra Expense", "Interior Build-Out Coverage"],
  },
  {
    icon: Users,
    title: "Workers Compensation",
    image: serviceLife,
    desc: "Required for 3+ employees in Florida; mandatory in construction.",
    details: "Workers Compensation covers medical expenses and lost wages for employees who are injured on the job. In Florida, it is required when you have 3 or more employees — and in construction, it's required from employee number one.",
    features: ["Medical Expense Coverage", "Lost Wage Replacement", "Employer Liability", "Florida Compliance"],
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    image: serviceAuto,
    desc: "Fleet and business vehicle coverage.",
    details: "Commercial Auto insurance covers vehicles used for business purposes, including your fleet, company trucks, and any vehicle used to transport goods or employees. It protects against liability and physical damage.",
    features: ["Fleet Coverage", "Business Vehicle Liability", "Non-Owned Auto Coverage", "Physical Damage Protection"],
  },
  {
    icon: FileText,
    title: "Professional Liability",
    image: serviceBusiness,
    desc: "E&O coverage for professional service providers.",
    details: "Professional Liability (also known as Errors & Omissions) protects your business from claims that your services or advice caused financial harm to a client. Essential for consultants, agents, accountants, attorneys, and more.",
    features: ["Errors & Omissions", "Claims-Made Policies", "Defense Cost Coverage", "Retroactive Date Protection"],
  },
  {
    icon: ClipboardList,
    title: "Bonding",
    image: serviceHome,
    desc: "Contractor and employee dishonesty bonds.",
    details: "Bonds protect your clients and your business. Contractor license bonds satisfy state licensing requirements, while employee dishonesty bonds protect against losses from fraudulent employee acts.",
    features: ["Contractor License Bonds", "Employee Dishonesty Bonds", "Performance Bonds", "Fidelity Bonds"],
  },
  {
    icon: HardHat,
    title: "Contractors & Subcontractors",
    image: serviceLife,
    desc: "Specialized trades coverage for all construction types.",
    details: "We specialize in coverage for contractors and subcontractors across all trades. Whether you're a general contractor, electrician, plumber, or roofer, we build a policy package that protects your tools, your crew, and your work.",
    features: ["General Contractors", "Specialty Trades", "Subcontractor Coverage", "Tools & Equipment"],
  },
  {
    icon: HeartPulse,
    title: "Employee Dental & Vision",
    image: serviceHealth,
    desc: "Group benefits to attract and retain your best team.",
    details: "Offering group dental and vision benefits is one of the most cost-effective ways to attract and retain quality employees. We design flexible group benefit plans that fit your business size and budget.",
    features: ["Group Dental Plans", "Group Vision Plans", "Flexible Benefit Designs", "Competitive Group Rates"],
  },
];

export default function CommercialServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with bg image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-primary/85" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6"
          >
            <Briefcase className="h-4 w-4 text-secondary" />
            Commercial Insurance
          </motion.div>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Commercial Insurance Coverage
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive business protection for Florida companies of all sizes. We shop the market so your business gets the right coverage at the best price.
          </motion.p>
        </div>
      </section>

      {/* Commercial Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Commercial Insurance</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Comprehensive business protection for Florida companies of all sizes.</p>
          </div>

          <div className="space-y-24">
            {commercialServices.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                    <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-wider uppercase text-sm mb-4">
                    <Briefcase className="h-4 w-4" />Commercial Coverage
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-xl font-medium text-foreground mb-4">{service.desc}</p>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.details}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="bg-secondary/20 p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="shadow-md group">
                    <Link href="/quote?type=commercial">
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Remaining commercial services as cards */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.slice(4).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border-t-4 border-t-secondary p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                <Link href="/quote?type=commercial" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors group/link">
                  Get a Quote <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secondary/20 border border-secondary/40 p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Not sure what your business needs?</h3>
            <p className="text-white/70 mb-6">Our commercial specialists will guide you to the right coverage — no pressure, no obligation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold">
                <Link href="/quote?type=commercial">Get a Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a href="tel:7273430419" className="h-11 px-8 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                Call (727) 343-0419
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

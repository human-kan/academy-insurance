import { motion } from "framer-motion";
import { Link } from "wouter";
import { Car, Home, HeartPulse, Briefcase, Shield, ArrowRight, Check, Anchor, Eye, PawPrint, Gem, CalendarDays, Truck, Users, HardHat, FileText, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceAuto from "@/assets/images/service-auto.jpg";
import serviceHome from "@/assets/images/service-home.jpg";
import serviceLife from "@/assets/images/service-life.jpg";
import serviceBusiness from "@/assets/images/service-business.jpg";
import serviceHealth from "@/assets/images/service-health.jpg";

const personalServices = [
  {
    icon: Home,
    title: "Homeowners, Rental & Condo",
    image: serviceHome,
    desc: "HO3 policies with automatic re-shopping at every renewal.",
    details: "Whether you own a home, rent, or live in a condo, we find the right policy from top Florida-rated carriers. We automatically re-shop your rates at every renewal so you always get the best deal.",
    features: ["HO3 Homeowners Policies", "Condo & Rental Coverage", "Automatic Rate Re-Shopping", "Dwelling & Personal Property Protection"],
  },
  {
    icon: Car,
    title: "Personal Auto Insurance",
    image: serviceAuto,
    desc: "Multiple carriers, including exclusive options not available to the public.",
    details: "Florida requires PIP and Property Damage minimums, but we recommend going beyond the minimum. We compare multiple carriers — including exclusive options — to find you the best combination of coverage and price.",
    features: ["PIP & Property Damage", "Collision & Comprehensive", "Uninsured Motorist Protection", "Exclusive Carrier Access"],
  },
  {
    icon: Shield,
    title: "Flood & Wind/Hurricane",
    image: serviceLife,
    desc: "Florida-specific coverage for storm and water damage.",
    details: "Standard homeowners policies don't cover flood or wind. In Florida, this is critical. We help you navigate NFIP and private flood options, as well as windstorm and hurricane coverage — properly.",
    features: ["NFIP & Private Flood Options", "Windstorm Coverage", "Hurricane Protection", "Storm Surge Coverage"],
  },
  {
    icon: Anchor,
    title: "Watercraft & RV",
    image: serviceAuto,
    desc: "Coverage for boats, RVs, and recreational vehicles.",
    details: "Your boat or RV is a major investment. We protect it whether it's on the water, the road, or in storage — with comprehensive liability and physical damage coverage.",
    features: ["Boat & Yacht Coverage", "RV Insurance", "Liability Protection", "Agreed Value Policies"],
  },
  {
    icon: Eye,
    title: "Dental & Vision",
    image: serviceHealth,
    desc: "Individual dental and vision coverage plans.",
    details: "Protect your smile and your sight. We offer individual dental and vision plans that fit your budget and provide meaningful benefits for routine and emergency care.",
    features: ["Individual Dental Plans", "Vision Coverage", "Preventive Care Benefits", "Flexible Plan Options"],
  },
  {
    icon: PawPrint,
    title: "Pet Insurance",
    image: serviceLife,
    desc: "Keep your pets covered with trusted pet insurance.",
    details: "Your pets are family. Pet insurance helps cover unexpected vet bills so you can focus on what matters — getting your pet the care they need without financial stress.",
    features: ["Accident & Illness Coverage", "Routine Care Options", "Multiple Pet Discounts", "Top-Rated Pet Carriers"],
  },
  {
    icon: Gem,
    title: "Luxury & Collectibles",
    image: serviceHome,
    desc: "Jewelry, fine art, classic cars, and high-value collectibles.",
    details: "Standard homeowners policies have strict limits on jewelry and valuables. We provide scheduled personal property coverage for high-value items at their full appraised value.",
    features: ["Jewelry & Fine Art", "Classic & Collector Cars", "Scheduled Personal Property", "Agreed Value Coverage"],
  },
  {
    icon: CalendarDays,
    title: "Special Events & Umbrella",
    image: serviceBusiness,
    desc: "One-day event coverage and personal umbrella liability.",
    details: "Hosting a wedding or large event? Need an extra layer of protection over your home and auto policies? We offer event insurance and personal umbrella policies for added peace of mind.",
    features: ["Wedding & Event Insurance", "One-Day Event Policies", "Personal Umbrella Liability", "$1M–$5M+ Coverage Limits"],
  },
];

const commercialServices = [
  {
    icon: Shield,
    title: "General Liability",
    desc: "Protection against third-party bodily injury & property damage claims.",
    features: ["Bodily Injury Coverage", "Property Damage Liability", "Personal & Advertising Injury", "Products & Completed Operations"],
  },
  {
    icon: Briefcase,
    title: "Commercial Property",
    desc: "Covers your business location, equipment & interior build-out.",
    features: ["Building Coverage", "Business Personal Property", "Business Income/Extra Expense", "Interior Build-Out Coverage"],
  },
  {
    icon: Users,
    title: "Workers Compensation",
    desc: "Required for 3+ employees in Florida; mandatory in construction.",
    features: ["Medical Expense Coverage", "Lost Wage Replacement", "Employer Liability", "Florida Compliance"],
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    desc: "Fleet and business vehicle coverage.",
    features: ["Fleet Coverage", "Business Vehicle Liability", "Non-Owned Auto Coverage", "Physical Damage Protection"],
  },
  {
    icon: FileText,
    title: "Professional Liability",
    desc: "E&O coverage for professional service providers.",
    features: ["Errors & Omissions", "Claims-Made Policies", "Defense Cost Coverage", "Retroactive Date Protection"],
  },
  {
    icon: ClipboardList,
    title: "Bonding",
    desc: "Contractor and employee dishonesty bonds.",
    features: ["Contractor License Bonds", "Employee Dishonesty Bonds", "Performance Bonds", "Fidelity Bonds"],
  },
  {
    icon: HardHat,
    title: "Contractors & Subcontractors",
    desc: "Specialized trades coverage for all construction types.",
    features: ["General Contractors", "Specialty Trades", "Subcontractor Coverage", "Tools & Equipment"],
  },
  {
    icon: HeartPulse,
    title: "Employee Dental & Vision",
    desc: "Group benefits to attract and retain your best team.",
    features: ["Group Dental Plans", "Group Vision Plans", "Flexible Benefit Designs", "Competitive Group Rates"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-20 md:py-28 text-center px-4">
        <div className="container mx-auto">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Insurance Coverage
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Personal and commercial insurance solutions for every Floridian. We shop the market so you get the best coverage at the best price.
          </motion.p>
        </div>
      </section>

      {/* Personal Insurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Personal Insurance</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Protecting what matters most to you and your family.</p>
          </div>
          <div className="space-y-24">
            {personalServices.slice(0, 4).map((service, index) => (
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
                    <Shield className="h-4 w-4" />Personal Coverage
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
                  <Button asChild size="lg" className="shadow-md group" data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Link href="/quote">
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Remaining personal services as cards */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.slice(4).map((service, i) => (
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
                <Link href="/quote" className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors group/link">
                  Get a Quote <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Insurance */}
      <section id="commercial" className="py-20 bg-primary scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Commercial Insurance</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-white/70 text-lg">Comprehensive business protection for Florida companies of all sizes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {commercialServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
                data-testid={`card-commercial-${i}`}
              >
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <service.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/60 text-xs">
                      <Check className="h-3 w-3 text-secondary shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-secondary/20 border border-secondary/40 p-8 rounded-2xl text-center max-w-xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Not sure what your business needs?</h3>
            <p className="text-white/70 mb-5">Let our commercial specialists guide you to the right coverage.</p>
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-commercial-quote">
              <Link href="/quote?type=commercial">Help Me Decide <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

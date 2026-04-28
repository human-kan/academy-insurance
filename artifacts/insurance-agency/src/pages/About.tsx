import { motion } from "framer-motion";
import { Award, Shield, Users, Clock, CheckCircle } from "lucide-react";

import aboutTeamBg from "@/assets/images/about-team.jpg";
import officeBuilding from "@/assets/images/office-building.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built on integrity, sustained by trust. We've spent over two decades securing the futures of families and businesses across the country.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-muted rounded-3xl -z-10 transform -rotate-3"></div>
              <img 
                src={officeBuilding} 
                alt="Pinnacle Insurance Headquarters" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary text-primary p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-5xl font-serif font-bold mb-2">25+</p>
                <p className="font-bold uppercase tracking-wider text-sm">Years of Excellence</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">A Legacy of Protection</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pinnacle Insurance Group was founded in 1998 with a simple but radical premise: insurance should be an act of profound care, not a transactional commodity.
                </p>
                <p>
                  Our founder, Michael Sterling, started the agency after experiencing firsthand how inadequate coverage could devastate a family during a crisis. He envisioned an advisory firm that would sit on the same side of the table as the client.
                </p>
                <p>
                  Today, we remain fiercely independent. We aren't beholden to any single carrier's quotas or shareholders. Our allegiance is strictly to you—our clients. We analyze the market, decode the fine print, and construct robust safety nets that allow you to live and work with absolute confidence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-2 border-secondary pl-4">
                  <p className="text-3xl font-bold text-primary font-serif">10k+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Families Protected</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <p className="text-3xl font-bold text-primary font-serif">$2B+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">In Assets Secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide every recommendation we make and every claim we file.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Unwavering Integrity", desc: "We recommend what you need, nothing more, nothing less. Transparency is our baseline." },
              { icon: Users, title: "Fierce Advocacy", desc: "When the worst happens, we don't just file your claim—we fight for your right to a fair resolution." },
              { icon: Clock, title: "Long-term Perspective", desc: "We aren't looking for a quick sale. We build relationships designed to span generations." }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border text-center">
                <div className="mx-auto h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Meet the Leadership</h2>
            <p className="text-muted-foreground text-lg">Expertise. Empathy. Execution. The people securing your future.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Michael Sterling", role: "Founder & Principal", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Head of Commercial Lines", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
              { name: "David Chen", role: "Director of Private Client", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Chief Claims Advocate", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-2">Connect on LinkedIn</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-primary text-white border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/3">
              <h2 className="font-serif text-3xl font-bold mb-4">Credentials & Awards</h2>
              <p className="text-primary-foreground/80">Recognized globally for our commitment to excellence, advisory standards, and client satisfaction.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                "Top 100 Independent Agencies 2023",
                "Best Place to Work in Finance",
                "Platinum Carrier Status",
                "Excellence in Claims Resolution"
              ].map((award, i) => (
                <div key={i} className="text-center">
                  <Award className="h-10 w-10 text-secondary mx-auto mb-4" />
                  <p className="text-sm font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Award, Shield, Users, RefreshCw } from "lucide-react";

import aboutTeamBg from "@/assets/images/about-team.jpg";

const team = [
  {
    initials: "RW",
    name: "Rose Wainwright",
    role: "Agency Owner & Licensed Agent",
    ext: "Ext. 101",
    bio: "Rose loves meeting and helping clients protect what they've worked hard for. When she's not in the office, she's scuba diving or dreaming about traveling Europe.",
  },
  {
    initials: "HS",
    name: "Heather Swartz-Brewer",
    role: "Personal Lines / Client Advisor",
    ext: "Ext. 102",
    bio: "Heather brings deep expertise in personal lines coverage and takes pride in finding each client the perfect policy at the best possible rate.",
  },
  {
    initials: "CG",
    name: "Christina Guzman",
    role: "Office Manager / Personal Lines Advisor",
    ext: "Ext. 103",
    bio: "Christina keeps the agency running smoothly and ensures every client receives prompt, professional service from start to finish.",
  },
  {
    initials: "SD",
    name: "Shazari Diaz",
    role: "Commercial Lines / Renewal Retention Specialist",
    ext: "Ext. 104",
    bio: "Shazari is passionate about protecting your business and personal assets. Outside of work, she loves to sing and read to escape reality.",
  },
  {
    initials: "MD",
    name: "Megan Davis",
    role: "Licensed Agent",
    ext: "Ext. 105",
    bio: "Megan is dedicated to educating clients so they can make confident, informed decisions about their coverage.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-primary/85" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Academy Insurance
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Independent. Women-Led. Florida's Own.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-muted rounded-3xl -z-10 transform -rotate-3" />
              <img
                src={aboutTeamBg}
                alt="Academy Insurance Agency Team"
                className="rounded-2xl shadow-xl w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary text-primary p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-5xl font-serif font-bold mb-2">75+</p>
                <p className="font-bold uppercase tracking-wider text-sm">Years Combined Experience</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
              <div className="w-12 h-1 bg-secondary mb-6" />
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Academy Insurance Agency Inc. is an independent, women-led insurance agency based in St. Petersburg, Florida. We proudly serve clients from Miami to Jacksonville and everywhere in between.
                </p>
                <p>
                  As an independent agency, we aren't tied to any single insurance company. That means we work for YOU. We shop multiple top-rated carriers to find coverage that fits your life — and we re-shop your rates at every single renewal automatically, so you're always getting the best deal.
                </p>
                <p>
                  With 75+ years of combined team experience, we bring deep expertise to every policy — whether you're insuring your first home, protecting your business, or shopping for life coverage for your family.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-3xl font-bold text-primary font-serif">A+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">BBB Accredited</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-3xl font-bold text-primary font-serif">Top 35</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">St. Pete Homeowners Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">The principles that guide every recommendation we make and every claim we file.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "100% Independent", desc: "We represent YOU — not any single carrier. Our allegiance is to finding you the best coverage at the best price." },
              { icon: Users, title: "Fierce Advocacy", desc: "When the worst happens, we don't just file your claim — we fight for your right to a fair resolution." },
              { icon: RefreshCw, title: "Auto Re-Shop Every Renewal", desc: "We automatically re-shop your rates at every renewal. You get the best deal without lifting a finger." },
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

      {/* Team */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Real people. Real expertise. Here for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center group"
                data-testid={`card-team-${i}`}
              >
                <div className="mx-auto h-24 w-24 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow border-4 border-secondary">
                  <span className="font-serif text-2xl font-bold text-secondary">{member.initials}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{member.ext}</p>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/3">
              <h2 className="font-serif text-3xl font-bold mb-4">Credentials & Recognition</h2>
              <p className="text-white/70">Recognized for our commitment to excellence, client advocacy, and community service.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                "A+ BBB Accredited",
                "Top 35 St. Pete Homeowners Agency",
                "Women-Led Business",
                "Independent Agency Certified"
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

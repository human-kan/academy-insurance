import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3" data-testid="link-footer-logo">
              <div className="bg-white/10 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-none text-white">Academy Insurance</span>
                <span className="text-[10px] font-sans tracking-widest text-white/70 uppercase leading-none mt-1">Agency Inc.</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs italic">
              "Independent. Trusted. Florida's Own."
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary/30 p-2 rounded-full text-white/70 hover:text-secondary transition-colors" data-testid="link-social-facebook" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary/30 p-2 rounded-full text-white/70 hover:text-secondary transition-colors" data-testid="link-social-instagram" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary/30 p-2 rounded-full text-white/70 hover:text-secondary transition-colors" data-testid="link-social-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Personal Insurance */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-secondary uppercase tracking-wider">Personal Insurance</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["Homeowners, Rental & Condo", "Personal Auto Insurance", "Flood & Wind/Hurricane", "Watercraft & RV", "Dental & Vision", "Pet Insurance", "Luxury & Collectibles", "Special Events & Umbrella"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-secondary transition-colors" data-testid={`link-footer-personal-${item.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Insurance */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-secondary uppercase tracking-wider">Commercial Insurance</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["General Liability", "Commercial Property", "Workers Compensation", "Commercial Auto", "Professional Liability", "Bonding", "Contractors & Subcontractors", "Employee Dental & Vision"].map((item) => (
                <li key={item}>
                  <Link href="/services#commercial" className="hover:text-secondary transition-colors" data-testid={`link-footer-commercial-${item.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-5 text-secondary uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80 mb-6">
              <li><Link href="/about" className="hover:text-secondary transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors" data-testid="link-footer-contact">Client Services</Link></li>
              <li><Link href="/quote" className="hover:text-secondary transition-colors" data-testid="link-footer-quote">Get a Quote</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Use</a></li>
            </ul>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>6798 Crosswinds Dr N #C108<br />St. Petersburg, FL 33710</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:7273430419" className="hover:text-secondary transition-colors">(727) 343-0419</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:accountadvisor@academyagents.com" className="hover:text-secondary transition-colors text-xs">accountadvisor@academyagents.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; 2026 Academy Insurance Agency Inc. | Managed by SMTHIN' TECHNOLOGIES</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 inline-block" data-testid="link-footer-logo">
              <div className="bg-white/10 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none tracking-tight text-white">Pinnacle</span>
                <span className="text-[10px] font-sans tracking-widest text-white/70 uppercase leading-none mt-1">Insurance Group</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Protecting families and businesses since 1998. We offer comprehensive insurance solutions tailored to your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors" data-testid="link-social-facebook" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors" data-testid="link-social-twitter" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors" data-testid="link-social-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors" data-testid="link-social-instagram" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-secondary transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-services">Our Services</Link></li>
              <li><Link href="/quote" className="hover:text-secondary transition-colors" data-testid="link-footer-quote">Get a Quote</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-service-auto">Auto Insurance</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-service-home">Home Insurance</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-service-life">Life Insurance</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-service-business">Business Insurance</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="link-footer-service-health">Health Insurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>100 Financial Plaza, Suite 400<br />Boston, MA 02110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>(800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>hello@pinnacleinsurance.example</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {currentYear} Pinnacle Insurance Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link, useLocation } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none tracking-tight text-primary">Pinnacle</span>
            <span className="text-[10px] font-sans tracking-widest text-muted-foreground uppercase leading-none mt-1">Insurance Group</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location === link.href ? "text-secondary" : "text-foreground"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="ml-4 font-semibold shadow-md" data-testid="button-nav-quote">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 absolute top-20 left-0 w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium px-4 py-2 rounded-md ${
                  location === link.href ? "bg-muted text-secondary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-2 w-full font-semibold" data-testid="button-mobile-nav-quote">
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link, useLocation } from "wouter";
import { Menu, X, Phone, PhoneCall } from "lucide-react";
import logoImg from "@assets/insurance_1777396126533.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  insuranceType: z.string().min(1, "Please select an insurance type"),
  message: z.string().min(5, "Please include a message"),
});

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", insuranceType: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/vapi-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          subject: values.insuranceType,
          message: values.message,
        }),
      });

      const data = await response.json() as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        toast({ title: "Message Received!", description: data.error ?? "We'll follow up by phone shortly." });
      } else {
        toast({ title: "We're Calling You Now!", description: "Our agent is dialing your number — pick up and we'll help you right away." });
      }
    } catch {
      toast({ title: "Message Received!", description: "We'll reach out to you shortly." });
    } finally {
      setIsSubmitting(false);
      form.reset();
      setIsModalOpen(false);
    }
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Personal Insurance" },
    { href: "/commercial", label: "Commercial Insurance" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Client Services" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img
              src={logoImg}
              alt="Academy Insurance Agency"
              className="h-14 w-14 object-contain rounded-full border border-border shadow-sm"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    location === link.href ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col items-end gap-1 ml-2">
              <Button
                size="sm"
                className="font-semibold shadow-md bg-secondary text-primary hover:bg-secondary/90"
                onClick={() => setIsModalOpen(true)}
                data-testid="button-nav-contact"
              >
                Contact Now
              </Button>
              <a
                href="tel:7273430419"
                className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors"
                data-testid="link-nav-phone"
              >
                <Phone className="h-3 w-3" />
                (727) 343-0419
              </a>
            </div>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-background p-4 absolute top-20 left-0 w-full shadow-lg z-50">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium px-4 py-2 rounded-md ${
                    location === link.href ? "bg-muted text-secondary" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="lg"
                className="mt-2 w-full font-semibold bg-secondary text-primary hover:bg-secondary/90"
                onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
                data-testid="button-mobile-nav-contact"
              >
                Contact Now
              </Button>
              <a
                href="tel:7273430419"
                className="flex items-center justify-center gap-2 text-primary font-semibold text-sm"
                data-testid="link-mobile-phone"
              >
                <Phone className="h-4 w-4" /> (727) 343-0419
              </a>
            </nav>
          </div>
        )}
      </header>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader className="bg-primary -mx-6 -mt-6 px-6 pt-6 pb-4 rounded-t-lg">
            <DialogTitle className="font-serif text-2xl text-white">Get In Touch With Us</DialogTitle>
            <p className="text-white/70 text-sm mt-1 flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 shrink-0" />
              Enter your phone number and we'll call you instantly.
            </p>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2" data-testid="form-modal-contact">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl><Input placeholder="Jane Smith" {...field} data-testid="input-modal-name" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="jane@email.com" {...field} data-testid="input-modal-email" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl><Input type="tel" placeholder="(727) 555-0000" {...field} data-testid="input-modal-phone" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="insuranceType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-modal-type">
                        <SelectValue placeholder="Select type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="not-sure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="How can we help you?" {...field} data-testid="input-modal-message" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-modal-submit">
                {isSubmitting ? (
                  <><PhoneCall className="mr-2 h-4 w-4 animate-pulse" />Connecting…</>
                ) : (
                  <><PhoneCall className="mr-2 h-4 w-4" />Call Me Now</>
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

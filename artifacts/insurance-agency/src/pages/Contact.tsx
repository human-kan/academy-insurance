import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Please provide more detail in your message"),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  function onSubmit() {
    toast({ title: "Message Sent!", description: "We typically respond within 24 hours. Thank you for reaching out." });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with bg image */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-primary/85" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you have a question, need a policy review, or want to file a claim — we're here for you.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">Get in Touch</h2>
                <div className="w-12 h-1 bg-secondary mb-8" />
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Office</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        6798 Crosswinds Dr N #C108<br />
                        St. Petersburg, FL 33710
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0"><Phone className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <a href="tel:7273430419" className="text-muted-foreground hover:text-primary transition-colors font-medium">(727) 343-0419</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0"><Mail className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>
                          <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">General</p>
                          <a href="mailto:accountadvisor@academyagents.com" className="hover:text-primary transition-colors break-all">accountadvisor@academyagents.com</a>
                        </div>
                        <div className="pt-2">
                          <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Quotes</p>
                          <a href="mailto:rose@academyagents.com" className="hover:text-primary transition-colors">rose@academyagents.com</a>
                        </div>
                        <div className="pt-2">
                          <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Brokers</p>
                          <a href="mailto:brokers@academyagents.com" className="hover:text-primary transition-colors">brokers@academyagents.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0"><Clock className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Response Time</h3>
                      <p className="text-muted-foreground">Typically respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-card border p-8 md:p-12 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 border-b pb-4">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="Jane Doe" {...field} className="h-12 bg-muted/30" data-testid="input-contact-name" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl><Input type="email" placeholder="jane@example.com" {...field} className="h-12 bg-muted/30" data-testid="input-contact-email" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl><Input type="tel" placeholder="(727) 555-0000" {...field} className="h-12 bg-muted/30" data-testid="input-contact-phone" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl><Input placeholder="How can we help?" {...field} className="h-12 bg-muted/30" data-testid="input-contact-subject" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please describe your inquiry..." className="min-h-[150px] bg-muted/30 resize-none" {...field} data-testid="input-contact-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-10 font-bold shadow-md" data-testid="button-submit-contact">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Google Maps Embed */}
      <section className="w-full h-[420px] relative overflow-hidden border-t">
        <iframe
          title="Academy Insurance Agency Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.5!2d-82.73577!3d27.78972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e32d0584de5b%3A0x69c65bc3858d0a5b!2sAcademy%20Insurance%20Agency!5e0!3m2!1sen!2sus!4v1685000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

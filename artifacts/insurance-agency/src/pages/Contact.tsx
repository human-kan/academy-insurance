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
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will respond shortly.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/95"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you need a policy review, have a claim, or just a question. Our advisors are here for you.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0 text-secondary-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Corporate Headquarters</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        100 Financial Plaza, Suite 400<br />
                        Boston, MA 02110
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0 text-secondary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-1">Toll-free: (800) 555-0199</p>
                      <p className="text-muted-foreground">Local: (617) 555-0198</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0 text-secondary-foreground">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">hello@pinnacleinsurance.example</p>
                      <p className="text-muted-foreground">claims@pinnacleinsurance.example</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-xl shrink-0 text-secondary-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                      <p className="text-muted-foreground mb-1">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-muted-foreground">24/7 Emergency Claims Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-card border p-8 md:p-12 rounded-3xl shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6 border-b pb-4">Send us a message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} className="h-12 bg-muted/30" data-testid="input-contact-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" {...field} className="h-12 bg-muted/30" data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} className="h-12 bg-muted/30" data-testid="input-contact-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} className="h-12 bg-muted/30" data-testid="input-contact-subject" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your inquiry in detail..." 
                              className="min-h-[150px] bg-muted/30 resize-none" 
                              {...field} 
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="xl" className="w-full md:w-auto h-14 px-10 text-base font-bold shadow-md" data-testid="button-submit-contact">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary text-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-3 transform -translate-y-8">
            <div className="bg-secondary p-3 rounded-full text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="font-serif font-bold text-xl">Boston Headquarters</p>
          </div>
        </div>
      </section>
    </div>
  );
}

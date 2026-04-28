import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Shield, Clock, Phone, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  coverageType: z.string().min(1, "Please select a coverage type"),
  message: z.string().optional(),
});

export default function QuotePage() {
  const { toast } = useToast();
  const [location] = useLocation();
  
  // Extract query param if available (basic approach for mockup)
  const urlParams = new URLSearchParams(window.location.search);
  const defaultType = urlParams.get('type') || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      coverageType: defaultType,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Quote Request Received",
      description: "One of our advisors will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-primary py-16 md:py-20 text-center px-4">
        <div className="container mx-auto">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Your Free Quote
          </motion.h1>
          <motion.p 
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take the first step toward absolute peace of mind. Fast, secure, and zero obligation.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* Form Column */}
            <div className="lg:w-2/3 bg-card p-8 md:p-12 rounded-3xl shadow-xl border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-4">Coverage Details</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-quote">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="h-12 bg-muted/50" data-testid="input-firstname" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="h-12 bg-muted/50" data-testid="input-lastname" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} className="h-12 bg-muted/50" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} className="h-12 bg-muted/50" data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="coverageType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">What do you need to protect?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/50" data-testid="select-coverage">
                              <SelectValue placeholder="Select a coverage type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="auto">Auto Insurance</SelectItem>
                            <SelectItem value="home">Homeowners Insurance</SelectItem>
                            <SelectItem value="life">Life Insurance</SelectItem>
                            <SelectItem value="business">Business & Commercial</SelectItem>
                            <SelectItem value="health">Health Insurance</SelectItem>
                            <SelectItem value="bundle">Bundle (Multi-policy)</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your current situation or specific needs..." 
                            className="min-h-[120px] bg-muted/50 resize-none" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="xl" className="w-full h-14 text-lg font-bold shadow-lg" data-testid="button-submit-quote">
                    Request Secure Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is encrypted and secure. We will never sell your data to third parties.
                  </p>
                </form>
              </Form>
            </div>

            {/* Info Column */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6">What Happens Next?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Data Analysis</h4>
                      <p className="text-primary-foreground/80 text-sm">We securely review your information to understand your risk profile.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Market Shopping</h4>
                      <p className="text-primary-foreground/80 text-sm">Our advisors compare rates across 40+ A-rated carriers to find the best value.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Expert Consultation</h4>
                      <p className="text-primary-foreground/80 text-sm">We'll call you within 24 hours to present options and answer questions.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border p-8 rounded-3xl shadow-sm text-center">
                <p className="text-muted-foreground mb-4">Need immediate assistance?</p>
                <p className="font-serif text-3xl font-bold text-primary mb-2">(800) 555-0199</p>
                <p className="text-sm text-muted-foreground">Available Mon-Fri, 8am-6pm EST</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

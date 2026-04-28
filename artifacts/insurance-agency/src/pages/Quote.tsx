import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Shield, Clock, Phone, ArrowRight } from "lucide-react";

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
  phone: z.string().min(7, "Valid phone number is required"),
  coverageType: z.string().min(1, "Please select a coverage type"),
  message: z.string().optional(),
});

export default function QuotePage() {
  const { toast } = useToast();

  const urlParams = new URLSearchParams(window.location.search);
  const defaultType = urlParams.get("type") || "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", coverageType: defaultType, message: "" },
  });

  function onSubmit() {
    toast({ title: "Quote Request Received!", description: "One of our advisors will contact you within 24 hours." });
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 z-0 bg-primary/87" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get a Free Quote
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            No obligation. No pressure. We shop the market and present you the best options for your life.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

            <div className="lg:w-2/3 bg-card p-8 md:p-12 rounded-3xl shadow-xl border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-8 border-b pb-4">Your Coverage Details</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-quote">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input placeholder="Jane" {...field} className="h-12 bg-muted/50" data-testid="input-firstname" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl><Input placeholder="Doe" {...field} className="h-12 bg-muted/50" data-testid="input-lastname" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="jane@example.com" {...field} className="h-12 bg-muted/50" data-testid="input-email" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input type="tel" placeholder="(727) 555-0000" {...field} className="h-12 bg-muted/50" data-testid="input-phone" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="coverageType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you need to protect?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-muted/50" data-testid="select-coverage">
                            <SelectValue placeholder="Select a coverage type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="homeowners">Homeowners, Rental & Condo</SelectItem>
                          <SelectItem value="auto">Personal Auto Insurance</SelectItem>
                          <SelectItem value="flood">Flood & Wind/Hurricane</SelectItem>
                          <SelectItem value="watercraft">Watercraft & RV</SelectItem>
                          <SelectItem value="dental">Dental & Vision</SelectItem>
                          <SelectItem value="pet">Pet Insurance</SelectItem>
                          <SelectItem value="luxury">Luxury & Collectibles</SelectItem>
                          <SelectItem value="commercial">Commercial Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your property, vehicles, or specific needs..." className="min-h-[120px] bg-muted/50 resize-none" {...field} data-testid="input-message" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-lg" data-testid="button-submit-quote">
                    Request Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is secure. We never sell your data. We typically respond within 24 hours.
                  </p>
                </form>
              </Form>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6">What Happens Next?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0"><Shield className="h-5 w-5 text-secondary" /></div>
                    <div>
                      <h4 className="font-bold mb-1">We Review Your Needs</h4>
                      <p className="text-white/70 text-sm">We securely review your information and identify the right coverage types for your situation.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0"><Clock className="h-5 w-5 text-secondary" /></div>
                    <div>
                      <h4 className="font-bold mb-1">We Shop the Market</h4>
                      <p className="text-white/70 text-sm">Our advisors compare rates across multiple top-rated Florida carriers to find the best value.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit shrink-0"><Phone className="h-5 w-5 text-secondary" /></div>
                    <div>
                      <h4 className="font-bold mb-1">We Contact You</h4>
                      <p className="text-white/70 text-sm">We'll reach out within 24 hours to present your options and answer any questions.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border p-8 rounded-3xl shadow-sm text-center">
                <p className="text-muted-foreground mb-4">Prefer to call us directly?</p>
                <a href="tel:7273430419" className="font-serif text-3xl font-bold text-primary mb-2 block hover:text-secondary transition-colors" data-testid="link-quote-phone">(727) 343-0419</a>
                <p className="text-sm text-muted-foreground">Academy Insurance Agency Inc.</p>
                <p className="text-xs text-muted-foreground mt-1">Typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

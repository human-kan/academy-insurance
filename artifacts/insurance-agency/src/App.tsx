import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import CommercialServicesPage from "@/pages/CommercialServices";
import QuotePage from "@/pages/Quote";
import ContactPage from "@/pages/Contact";
import BlogPage from "@/pages/Blog";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/commercial" component={CommercialServicesPage} />
      <Route path="/quote" component={QuotePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <ChatWidget />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

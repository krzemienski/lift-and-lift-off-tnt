import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Calisthenics from "@/pages/programs/Calisthenics";
import Flexibility from "@/pages/programs/Flexibility";
import Boxing from "@/pages/programs/Boxing";
import Strength from "@/pages/programs/Strength";
import FatLoss from "@/pages/programs/FatLoss";
import Trainer from "@/pages/Trainer";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
import Instagram from "@/pages/Instagram";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/calisthenics" component={Calisthenics} />
      <Route path="/programs/flexibility" component={Flexibility} />
      <Route path="/programs/boxing" component={Boxing} />
      <Route path="/programs/strength" component={Strength} />
      <Route path="/programs/fat-loss" component={FatLoss} />
      <Route path="/trainer" component={Trainer} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/results" component={Results} />
      <Route path="/instagram" component={Instagram} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Skip navigation link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Router />
        </main>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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
  // Custom sidebar width for TNT Fitness
  const style = {
    "--sidebar-width": "17rem",       // 272px for better content
    "--sidebar-width-icon": "3rem",   // default icon width
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties} defaultOpen={true}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <SidebarInset>
              {/* Mobile/Tablet header with sidebar trigger */}
              <header className="sticky top-0 z-40 flex items-center justify-between p-2 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-[#D4A017]">TNT FITNESS</span>
                </div>
              </header>
              
              {/* Desktop header */}
              <header className="sticky top-0 z-40 hidden md:flex items-center justify-between p-2 px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle-desktop" />
                  <h1 className="font-display text-lg font-semibold">Today, Not Tomorrow</h1>
                </div>
              </header>
              
              {/* Main content area */}
              <main id="main-content" tabIndex={-1} className="flex-1 overflow-auto focus:outline-none">
                <Router />
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

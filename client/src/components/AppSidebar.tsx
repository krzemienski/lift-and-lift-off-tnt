import { Home, Trophy, User, ClipboardCheck, Award, Instagram, Mail, Dumbbell, Target, Shield, Activity, Flame } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import tntIcon from "@assets/generated_images/TNT_hexagon_logo_transparent_53aa9f60.png";

// Main navigation items - per master build spec
const mainNavItems = [
  {
    title: "Programs",
    url: "/programs",
    icon: Trophy,
    subItems: [
      {
        title: "Calisthenics",
        url: "/programs/calisthenics",
        icon: Activity,
      },
      {
        title: "Flexibility",
        url: "/programs/flexibility",
        icon: Target,
      },
      {
        title: "Boxing",
        url: "/programs/boxing",
        icon: Shield,
      },
      {
        title: "Strength Training",
        url: "/programs/strength",
        icon: Dumbbell,
      },
      {
        title: "Fat Loss",
        url: "/programs/fat-loss",
        icon: Flame,
      },
    ],
  },
  {
    title: "Trainer",
    url: "/trainer",
    icon: User,
  },
  {
    title: "Assessment",
    url: "/assessment",
    icon: ClipboardCheck,
  },
  {
    title: "Results",
    url: "/results",
    icon: Award,
  },
  {
    title: "Instagram",
    url: "/instagram",
    icon: Instagram,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar className="border-r border-[#D4A017]/20">
      <SidebarHeader className="border-b border-[#D4A017]/20 p-4">
        <Link href="/" data-testid="link-sidebar-logo">
          <div className="flex items-center gap-3">
            <img 
              src={tntIcon} 
              alt="TNT Fitness"
              className="h-12 w-12 object-contain"
              data-testid="img-sidebar-logo"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-[#D4A017] tracking-wider group-data-[collapsible=icon]:hidden" data-testid="text-sidebar-title">
                TNT FITNESS
              </span>
              <span className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden" data-testid="text-sidebar-tagline">
                Today, Not Tomorrow
              </span>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = location === item.url || 
                  (item.subItems && item.subItems.some(sub => location === sub.url));
                
                if (item.subItems) {
                  return (
                    <Collapsible key={item.title} defaultOpen={isActive}>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            data-active={isActive}
                            className="w-full hover:bg-[#243B6B]/10 data-[active=true]:bg-[#0B2545]/10 data-[active=true]:text-[#D4A017]"
                            data-testid={`button-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton 
                                  asChild
                                  data-active={location === subItem.url}
                                  className="hover:bg-[#243B6B]/10 data-[active=true]:bg-[#0B2545]/10 data-[active=true]:text-[#D4A017]"
                                  data-testid={`link-sidebar-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <Link href={subItem.url}>
                                    <subItem.icon className="h-3 w-3" />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      data-active={isActive}
                      className="hover:bg-[#243B6B]/10 data-[active=true]:bg-[#0B2545]/10 data-[active=true]:text-[#D4A017]"
                      data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-semibold"
                  data-testid="button-sidebar-assessment"
                >
                  <Link href="/assessment">
                    <ClipboardCheck className="h-4 w-4" />
                    <span>Book Free Assessment</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-[#D4A017]/20 p-4">
        <div className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          <p className="font-semibold text-[#D4A017] mb-1" data-testid="text-sidebar-contact-title">Contact Info</p>
          <p data-testid="text-sidebar-email">coach@tntfitness.com</p>
          <p data-testid="text-sidebar-instagram">@tntfitness</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
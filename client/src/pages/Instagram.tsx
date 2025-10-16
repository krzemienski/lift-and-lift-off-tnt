import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import InstagramFeed from "@/components/InstagramFeed";
import { useQuery } from "@tanstack/react-query";
import type { InstagramPost } from "@shared/schema";

export default function Instagram() {
  const { data: instagramData, isLoading } = useQuery<{ posts: InstagramPost[] }>({
    queryKey: ["/api/instagram/posts"],
  });

  const instagramPosts = instagramData?.posts || [];

  return (
    <div className="min-h-screen">
      <VideoCarousel />
      <StickyNav />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              STAY ACCOUNTABLE
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <InstagramIcon className="h-8 w-8 text-primary" />
              <p className="text-2xl md:text-3xl font-display font-bold text-primary" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                @tntfitness
              </p>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Latest posts and behind-the-scenes training.
            </p>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://www.instagram.com/tntfitness", "_blank")}
              data-testid="button-follow-instagram"
            >
              <InstagramIcon className="h-5 w-5" />
              Follow on Instagram
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          <Card className="backdrop-blur-sm bg-card/90 p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">750+</p>
                <p className="text-sm text-muted-foreground">Posts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Client Transformations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Daily</p>
                <p className="text-sm text-muted-foreground">New Content</p>
              </div>
            </div>
          </Card>

          <InstagramFeed
            username="tntfitness"
            posts={instagramPosts}
            profileUrl="https://www.instagram.com/tntfitness"
          />

          <div className="text-center mt-12">
            <Card className="backdrop-blur-sm bg-primary/10 border-primary/30 inline-block">
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Join the TNT Community</h2>
                <p className="text-lg mb-6 max-w-2xl">
                  Get daily motivation, exclusive workout content, and be part of a community that pushes each other to be better every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.open("https://www.instagram.com/tntfitness", "_blank")}
                    data-testid="button-instagram-cta"
                  >
                    Follow @tntfitness
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.location.href = "/#contact"}
                    data-testid="button-contact-cta"
                  >
                    Start Training
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer
        instagramUrl="https://www.instagram.com/tntfitness"
        location="New York, NY"
        email="rico@tntfitness.com"
      />
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle, Bookmark, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
  timestamp?: string;
}

export default function GalleryBlock() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  
  const { data, isLoading } = useQuery<{ posts: InstagramPost[] }>({
    queryKey: ["/api/instagram/posts"],
  });

  const posts = data?.posts || [];

  // Mock engagement data for display
  const getEngagement = (index: number) => ({
    likes: Math.floor(Math.random() * 500) + 100,
    comments: Math.floor(Math.random() * 50) + 10
  });

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            <Instagram className="h-3 w-3 mr-2" />
            Instagram Feed
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Stay <span className="text-[#D4A017]">accountable.</span>
          </h2>
          <p className="text-lg text-white/90 drop-shadow-md">
            Latest posts and behind‑the‑scenes training.
          </p>
          
          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-[#D4A017]">10K+</p>
              <p className="text-sm text-white/80 drop-shadow-md">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D4A017]">750+</p>
              <p className="text-sm text-white/80 drop-shadow-md">Posts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D4A017]">Daily</p>
              <p className="text-sm text-white/80 drop-shadow-md">New Content</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <Card key={i} className="aspect-square animate-pulse bg-muted" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {posts.slice(0, 9).map((post, index) => {
              const engagement = getEngagement(index);
              return (
                <Card 
                  key={post.id}
                  className="group relative aspect-square overflow-hidden cursor-pointer border-0"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                  data-testid={`instagram-post-${index}`}
                >
                  <a 
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.caption}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-200 ${
                      hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-white text-center space-y-2">
                        <div className="flex items-center justify-center gap-4">
                          <div className="flex items-center gap-1">
                            <Heart className="h-5 w-5 fill-white" />
                            <span className="text-sm font-semibold">{engagement.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-5 w-5 fill-white" />
                            <span className="text-sm font-semibold">{engagement.comments}</span>
                          </div>
                        </div>
                        {post.caption && (
                          <p className="text-xs px-4 line-clamp-2">{post.caption}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Corner Icon */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center space-y-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
            asChild
          >
            <a 
              href="https://instagram.com/tntfitness" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="button-follow-instagram"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
          
          <p className="text-sm text-white/80 drop-shadow-md">
            Join our community of 10K+ fitness enthusiasts
          </p>
        </div>
      </div>
    </section>
  );
}
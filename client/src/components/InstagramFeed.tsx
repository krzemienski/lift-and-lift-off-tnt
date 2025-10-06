import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
}

interface InstagramFeedProps {
  username: string;
  posts: InstagramPost[];
  profileUrl: string;
}

export default function InstagramFeed({ username, posts, profileUrl }: InstagramFeedProps) {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Follow My Journey
            </h2>
          </div>
          <p className="text-lg text-white/80 mb-6" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            @{username}
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            data-testid="button-instagram-follow"
          >
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              data-testid={`instagram-post-${post.id}`}
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {hoveredPost === post.id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 transition-opacity duration-300">
                  <p className="text-white text-sm line-clamp-4 text-center">
                    {post.caption}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CoachProfileProps {
  name: string;
  location: string;
  imageSrc?: string;
  bio: string;
  certifications: string[];
  stats?: { label: string; value: string }[];
}

export default function CoachProfile({
  name,
  location,
  imageSrc,
  bio,
  certifications,
  stats = [],
}: CoachProfileProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-background/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Avatar className="w-full h-full rounded-2xl">
                <AvatarImage src={imageSrc} alt={name} className="object-cover" />
                <AvatarFallback className="text-6xl rounded-2xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-coach-name">
              {name}
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-coach-location">
              From {location}
            </p>
            
            <p className="text-lg leading-relaxed mb-8" data-testid="text-coach-bio">
              {bio}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm" data-testid={`badge-cert-${index}`}>
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} data-testid={`stat-${index}`}>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

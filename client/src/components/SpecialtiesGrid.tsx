import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Specialty {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SpecialtiesGridProps {
  specialties: Specialty[];
}

export default function SpecialtiesGrid({ specialties }: SpecialtiesGridProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-black/35 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Training Specialties
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Personalized programs designed to meet your unique fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-specialty-${index}`}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10">
                  <specialty.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

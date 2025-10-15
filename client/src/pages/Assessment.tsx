import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const assessmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  fitnessLevel: z.string().min(1, "Please select your fitness level"),
  goals: z.string().min(10, "Please describe your goals in detail"),
  injuries: z.string().optional(),
  availability: z.string().min(1, "Please select your availability"),
  preferredTime: z.string().min(1, "Please select your preferred time"),
});

type AssessmentFormData = z.infer<typeof assessmentSchema>;

const programs = [
  "Calisthenics - Control your body",
  "Flexibility - Move pain-free",
  "Boxing - Conditioning + technique",
  "Strength Training - Durable gains",
  "Fat Loss - Nutrition + conditioning",
  "Not sure - Need guidance"
];

const fitnessLevels = [
  "Beginner - Just starting out",
  "Intermediate - 6 months to 2 years experience",
  "Advanced - 2+ years consistent training",
  "Athletic - Competitive athlete or former athlete"
];

const availability = [
  "1-2 days per week",
  "3-4 days per week",
  "5+ days per week",
  "Flexible schedule"
];

const preferredTimes = [
  "Early morning (5am - 8am)",
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 5pm)",
  "Evening (5pm - 9pm)",
  "Flexible"
];

export default function Assessment() {
  const { toast } = useToast();
  
  const form = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      fitnessLevel: "",
      goals: "",
      injuries: "",
      availability: "",
      preferredTime: "",
    },
  });

  const onSubmit = (data: AssessmentFormData) => {
    console.log(data);
    toast({
      title: "Assessment Booked!",
      description: "Coach Rico will contact you within 24 hours to schedule your free assessment.",
      duration: 5000,
    });
    form.reset();
  };

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
              FREE ASSESSMENT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Let's create a personalized training plan that fits your goals, schedule, and fitness level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 1</CardTitle>
                <CardDescription>Book Your Assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Fill out the form below with your information and goals</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <User className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 2</CardTitle>
                <CardDescription>Meet Coach Rico</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Discuss your fitness history, goals, and create a custom plan</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Step 3</CardTitle>
                <CardDescription>Start Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Begin your transformation with expert guidance and support</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <Card className="backdrop-blur-sm bg-primary/10 border-primary mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>45-minute consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Body composition analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Movement assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Custom program design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>Nutrition guidelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/90">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-4">PT Manager</h3>
                  <div className="space-y-2">
                    <p className="font-semibold">Martin Bradley</p>
                    <p className="text-sm text-muted-foreground">Assessment Coordinator</p>
                    <p className="text-sm text-muted-foreground">Will contact you within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <Card className="backdrop-blur-sm bg-card/90">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Book Your Free Assessment</CardTitle>
                  <CardDescription>Fill out this form and we'll contact you to schedule your session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} data-testid="input-assessment-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} data-testid="input-assessment-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-assessment-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Program of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-program">
                                  <SelectValue placeholder="Select a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {programs.map((program) => (
                                  <SelectItem key={program} value={program}>
                                    {program}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fitnessLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Fitness Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-fitness-level">
                                  <SelectValue placeholder="Select your level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {fitnessLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Training Availability</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-availability">
                                    <SelectValue placeholder="Days per week" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {availability.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="preferredTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-time">
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {preferredTimes.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fitness Goals</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your fitness goals and what you hope to achieve..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="textarea-goals"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="injuries"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Injuries or Limitations (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any injuries, surgeries, or physical limitations we should know about?"
                                className="min-h-[80px]"
                                {...field}
                                data-testid="textarea-injuries"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full" data-testid="button-book-assessment">
                        Book My Free Assessment
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
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
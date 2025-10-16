import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const assessmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactInfo: z.string().min(3, "Please enter your email or Instagram handle"),
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  preferredTime: z.string().min(1, "Please select your preferred time"),
  notes: z.string().optional(),
});

type AssessmentFormData = z.infer<typeof assessmentSchema>;

const programGoals = [
  { id: "calisthenics", label: "Calisthenics - Master bodyweight movements" },
  { id: "flexibility", label: "Flexibility - Improve mobility and reduce pain" },
  { id: "boxing", label: "Boxing - Build conditioning and technique" },
  { id: "strength", label: "Strength Training - Build muscle and power" },
  { id: "fatloss", label: "Fat Loss - Transform body composition" },
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
      contactInfo: "",
      goals: [],
      preferredTime: "",
      notes: "",
    },
  });

  const onSubmit = (data: AssessmentFormData) => {
    console.log(data);
    toast({
      title: "Assessment Booked!",
      description: "Thanks! We'll reply within 24 hours with next steps.",
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <VideoCarousel />
      <Navigation />
      
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
              20-min call · Movement screen · Program fit · Next steps.
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
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-assessment-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email / Instagram</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com or @instagram" {...field} data-testid="input-assessment-contact" />
                            </FormControl>
                            <FormDescription>
                              Enter your email address or Instagram handle
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="goals"
                        render={() => (
                          <FormItem>
                            <FormLabel>Goals (Select all that apply)</FormLabel>
                            <FormDescription>
                              Choose the programs you're interested in
                            </FormDescription>
                            {programGoals.map((goal) => (
                              <FormField
                                key={goal.id}
                                control={form.control}
                                name="goals"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={goal.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(goal.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, goal.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== goal.id
                                                  )
                                                )
                                          }}
                                          data-testid={`checkbox-goal-${goal.id}`}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal cursor-pointer">
                                        {goal.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
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
                                  <SelectValue placeholder="Select your preferred training time" />
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

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any additional information you'd like to share..."
                                className="min-h-[100px]"
                                {...field}
                                data-testid="textarea-notes"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold" data-testid="button-book-assessment">
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
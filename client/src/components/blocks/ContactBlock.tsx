import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  trainingGoal: z.string()
    .min(1, "Please select a training goal"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    description: "Mon-Fri 6AM-8PM"
  },
  {
    icon: Mail,
    title: "Email",
    value: "coach@tntfitness.com",
    description: "24/7 response"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Manhattan, NYC",
    description: "Multiple locations"
  },
  {
    icon: Clock,
    title: "Hours",
    value: "6AM - 8PM",
    description: "7 days a week"
  }
];

export default function ContactBlock() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      trainingGoal: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("/api/contact", "POST", data),
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-[#D4A017]">talk.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Send a quick message with your goals. We'll respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Tell us about your fitness goals and we'll create a personalized plan for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 animate-bounce" />
                    <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Thank you for reaching out. We'll review your message and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field}
                                  data-testid="input-contact-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="john@example.com" 
                                  {...field}
                                  data-testid="input-contact-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="(555) 123-4567" 
                                  {...field}
                                  data-testid="input-contact-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="trainingGoal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Training Goal</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                data-testid="select-training-goal"
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your primary goal" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                                  <SelectItem value="strength">Strength Training</SelectItem>
                                  <SelectItem value="flexibility">Flexibility</SelectItem>
                                  <SelectItem value="endurance">Endurance</SelectItem>
                                  <SelectItem value="general-fitness">General Fitness</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your fitness journey and what you hope to achieve..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="textarea-contact-message"
                              />
                            </FormControl>
                            <FormDescription>
                              Share any relevant details about your fitness level, schedule, or specific needs
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold"
                        disabled={contactMutation.isPending}
                        data-testid="button-contact-submit"
                      >
                        {contactMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-l-4 border-l-[#D4A017]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#D4A017]/10">
                      <info.icon className="h-5 w-5 text-[#D4A017]" />
                    </div>
                    <div>
                      <p className="font-semibold">{info.title}</p>
                      <p className="text-[#D4A017]">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick Response Card */}
            <Card className="bg-[#D4A017]/10 border-[#D4A017]/30">
              <CardContent className="p-6 text-center space-y-3">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/30">
                  Quick Response
                </Badge>
                <p className="font-semibold">We're Here to Help</p>
                <p className="text-sm text-muted-foreground">
                  Coach Rico personally responds to every message within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import ContactForm from "../ContactForm";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormExample() {
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
  };

  return (
    <ContactForm
      onSubmit={handleSubmit}
      trainingGoals={[
        "Middle Age Fitness",
        "Muscle Gain",
        "Sports Training",
        "Weight Loss",
        "Yoga",
        "General Fitness",
      ]}
      contactInfo={{
        email: "lillian@rolletraining.com",
        phone: "+1 (305) 555-0123",
        location: "Miami, FL",
        instagram: "https://www.instagram.com/ellorylil",
      }}
    />
  );
}

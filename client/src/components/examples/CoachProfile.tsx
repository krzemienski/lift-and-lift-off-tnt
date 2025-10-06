import CoachProfile from "../CoachProfile";

export default function CoachProfileExample() {
  return (
    <CoachProfile
      name="Lillian Rolle"
      location="Havana, Cuba"
      imageSrc="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&auto=format&fit=crop"
      bio="With a passion for transforming lives through fitness, I bring authentic Cuban energy and certified expertise to every training session. My approach combines proven techniques with personalized attention to help you achieve sustainable results, no matter your age or fitness level."
      certifications={["ECP - EFTI/Lionel (NBFE)", "Certified Yoga Instructor", "Sports Nutrition Specialist"]}
      stats={[
        { label: "Years Experience", value: "8+" },
        { label: "Clients Trained", value: "500+" },
        { label: "Success Stories", value: "200+" },
      ]}
    />
  );
}

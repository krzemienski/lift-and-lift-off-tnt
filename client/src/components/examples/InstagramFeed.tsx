import InstagramFeed from "../InstagramFeed";

export default function InstagramFeedExample() {
  const mockPosts = [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop",
      caption: "Morning HIIT session! 🔥 Let's crush those fitness goals together",
      permalink: "https://www.instagram.com/p/example1/",
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop",
      caption: "Yoga flow for flexibility and inner peace 🧘‍♀️",
      permalink: "https://www.instagram.com/p/example2/",
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop",
      caption: "Client success story! Down 20lbs and feeling stronger than ever 💪",
      permalink: "https://www.instagram.com/p/example3/",
    },
    {
      id: "4",
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&auto=format&fit=crop",
      caption: "Outdoor training in beautiful weather ☀️",
      permalink: "https://www.instagram.com/p/example4/",
    },
    {
      id: "5",
      imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&auto=format&fit=crop",
      caption: "Strength training fundamentals - proper form is everything! 🏋️‍♀️",
      permalink: "https://www.instagram.com/p/example5/",
    },
    {
      id: "6",
      imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&auto=format&fit=crop",
      caption: "Nutrition tips: Fuel your body right for maximum results 🥗",
      permalink: "https://www.instagram.com/p/example6/",
    },
    {
      id: "7",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop",
      caption: "Boxing for cardio and stress relief 🥊",
      permalink: "https://www.instagram.com/p/example7/",
    },
    {
      id: "8",
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop",
      caption: "Recovery is just as important as training! 💆‍♀️",
      permalink: "https://www.instagram.com/p/example8/",
    },
  ];

  return (
    <InstagramFeed
      username="ellorylil"
      posts={mockPosts}
      profileUrl="https://www.instagram.com/ellorylil"
    />
  );
}

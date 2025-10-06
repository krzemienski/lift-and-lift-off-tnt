import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, type InstagramPost } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Instagram API endpoint
  app.get("/api/instagram/posts", async (req, res) => {
    try {
      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      
      if (!accessToken) {
        return res.json({
          posts: [
            {
              id: "1",
              imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop",
              caption: "Morning HIIT session - Let's crush those fitness goals together",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "2",
              imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop",
              caption: "Yoga flow for flexibility and inner peace",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "3",
              imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop",
              caption: "Client success story - Down 20lbs and feeling stronger than ever",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "4",
              imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&auto=format&fit=crop",
              caption: "Outdoor training in beautiful weather",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "5",
              imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&auto=format&fit=crop",
              caption: "Strength training fundamentals - proper form is everything",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "6",
              imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&auto=format&fit=crop",
              caption: "Nutrition tips - Fuel your body right for maximum results",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "7",
              imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop",
              caption: "Boxing for cardio and stress relief",
              permalink: "https://www.instagram.com/ellorylil",
            },
            {
              id: "8",
              imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop",
              caption: "Recovery is just as important as training",
              permalink: "https://www.instagram.com/ellorylil",
            },
          ]
        });
      }

      // Fetch from Instagram Basic Display API
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
      }

      const data = await response.json();
      
      const posts: InstagramPost[] = data.data
        .filter((post: any) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM")
        .slice(0, 8)
        .map((post: any) => ({
          id: post.id,
          imageUrl: post.media_url,
          caption: post.caption || "",
          permalink: post.permalink,
          timestamp: post.timestamp,
        }));

      res.json({ posts });
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
      res.status(500).json({ error: "Failed to fetch Instagram posts" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        success: true, 
        message: "Your message has been received. I'll get back to you within 24 hours!",
        id: message.id 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(400).json({ error: "Failed to submit contact form" });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { Client } from "@replit/object-storage";

const client = new Client();

async function getVideoURLs() {
  try {
    console.log("\nGenerating URLs for videos in object storage:");
    
    const videos = [
      "public/portrait1.mp4",
      "public/portrait2.mp4",
      "public/portrait3.mp4",
      "public/landscape1.mp4",
      "public/landscape2.mp4",
      "public/landscape3.mp4"
    ];
    
    for (const video of videos) {
      const url = client.getPublicUrl(video);
      console.log(`${video}: ${url}`);
    }
    
  } catch (error) {
    console.error("Error:", error);
  }
}

getVideoURLs();
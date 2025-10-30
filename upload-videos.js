import { Client } from "@replit/object-storage";
import { readFileSync } from "fs";
import path from "path";

const client = new Client();

async function uploadVideos() {
  try {
    console.log("Starting video upload to object storage...");
    
    // Portrait videos mapping
    const portraitVideos = [
      { src: "attached_assets/download 3_2_1761787228408.MP4", dest: "public/portrait1.mp4" },
      { src: "attached_assets/download 4_2_1761787228408.MP4", dest: "public/portrait2.mp4" },
      { src: "attached_assets/download 2_2_1761787228408.MP4", dest: "public/portrait3.mp4" },
    ];
    
    // Landscape videos mapping
    const landscapeVideos = [
      { src: "attached_assets/download_2_1761787228407.MP4", dest: "public/landscape1.mp4" },
      { src: "attached_assets/download 6_2_1761787228408.MP4", dest: "public/landscape2.mp4" },
      { src: "attached_assets/download 5_2_1761787228408.MP4", dest: "public/landscape3.mp4" },
    ];
    
    // Upload portrait videos
    console.log("\nUploading portrait videos...");
    for (const video of portraitVideos) {
      console.log(`Uploading ${video.dest}...`);
      const buffer = readFileSync(video.src);
      await client.uploadFromBytes(video.dest, buffer);
      console.log(`✅ Uploaded ${video.dest}`);
    }
    
    // Upload landscape videos
    console.log("\nUploading landscape videos...");
    for (const video of landscapeVideos) {
      console.log(`Uploading ${video.dest}...`);
      const buffer = readFileSync(video.src);
      await client.uploadFromBytes(video.dest, buffer);
      console.log(`✅ Uploaded ${video.dest}`);
    }
    
    console.log("\n✨ All videos uploaded successfully!");
    
    // List uploaded files to verify
    console.log("\nVerifying uploaded files:");
    const files = await client.list({ prefix: "public/" });
    for (const file of files) {
      if (file.key.endsWith('.mp4')) {
        console.log(`  - ${file.key} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      }
    }
    
  } catch (error) {
    console.error("Error uploading videos:", error);
    process.exit(1);
  }
}

uploadVideos();
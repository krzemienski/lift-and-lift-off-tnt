import { Client } from '@replit/object-storage';
import fs from 'fs';
import path from 'path';

const client = new Client();

async function uploadVideos() {
  const videos = [
    // Landscape videos (1280x704)
    {
      source: 'attached_assets/download_2_1761794567030.MP4',
      destination: 'public/landscape1.mp4'
    },
    {
      source: 'attached_assets/download 6_2_1761794567031.MP4',
      destination: 'public/landscape2.mp4'
    },
    {
      source: 'attached_assets/download 5_2_1761794567031.MP4',
      destination: 'public/landscape3.mp4'
    },
    // Portrait videos (704x1280)
    {
      source: 'attached_assets/download 3_2_1761794708837.MP4',
      destination: 'public/portrait1.mp4'
    },
    {
      source: 'attached_assets/download 4_2_1761794708838.MP4',
      destination: 'public/portrait2.mp4'
    },
    {
      source: 'attached_assets/download 2_2_1761794708838.MP4',
      destination: 'public/portrait3.mp4'
    }
  ];

  for (const video of videos) {
    try {
      console.log(`📤 Uploading ${video.source} -> ${video.destination}...`);
      
      const fileBuffer = fs.readFileSync(video.source);
      await client.uploadFromBytes(video.destination, fileBuffer, {
        contentType: 'video/mp4'
      });
      
      const stats = fs.statSync(video.source);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      console.log(`✅ Uploaded ${video.destination} (${sizeMB} MB)`);
    } catch (error) {
      console.error(`❌ Failed to upload ${video.source}:`, error.message);
    }
  }

  console.log('\n✅ All videos uploaded to object storage!');
}

uploadVideos().catch(console.error);

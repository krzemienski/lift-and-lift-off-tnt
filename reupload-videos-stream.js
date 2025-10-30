import { Client } from '@replit/object-storage';
import fs from 'fs';

const client = new Client();

async function uploadVideoStream(sourcePath, destKey) {
  try {
    console.log(`📤 Uploading ${sourcePath} -> ${destKey}...`);
    
    const stream = fs.createReadStream(sourcePath);
    await client.uploadFromStream(destKey, stream, {
      contentType: 'video/mp4'
    });
    
    const stats = fs.statSync(sourcePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`✅ Uploaded ${destKey} (${sizeMB} MB)`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to upload ${sourcePath}:`, error.message);
    return false;
  }
}

async function reuploadAll() {
  const videos = [
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

  let successCount = 0;
  for (const video of videos) {
    const success = await uploadVideoStream(video.source, video.destination);
    if (success) successCount++;
  }

  console.log(`\n✅ Successfully uploaded ${successCount}/${videos.length} videos!`);
}

reuploadAll().catch(console.error);

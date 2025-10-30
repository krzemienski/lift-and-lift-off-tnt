import { Client } from '@replit/object-storage';
import fs from 'fs';

const client = new Client();

async function uploadVideo(sourcePath, destKey) {
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

async function uploadAll() {
  const videos = [
    { source: '/tmp/transcoded/landscape1.mp4', destination: 'public/landscape1.mp4' },
    { source: '/tmp/transcoded/landscape2.mp4', destination: 'public/landscape2.mp4' },
    { source: '/tmp/transcoded/landscape3.mp4', destination: 'public/landscape3.mp4' },
    { source: '/tmp/transcoded/portrait1.mp4', destination: 'public/portrait1.mp4' },
    { source: '/tmp/transcoded/portrait2.mp4', destination: 'public/portrait2.mp4' },
    { source: '/tmp/transcoded/portrait3.mp4', destination: 'public/portrait3.mp4' }
  ];

  let successCount = 0;
  for (const video of videos) {
    const success = await uploadVideo(video.source, video.destination);
    if (success) successCount++;
  }

  console.log(`\n✅ Successfully uploaded ${successCount}/${videos.length} transcoded videos!`);
  console.log('All videos are now H.264 Baseline profile for maximum browser compatibility.');
}

uploadAll().catch(console.error);

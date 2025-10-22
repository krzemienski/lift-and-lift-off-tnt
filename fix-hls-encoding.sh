#!/bin/bash

# Create simple HLS with no codec issues
echo "Creating simplified HLS streams..."

# Desktop video - just use one video for testing
ffmpeg -i client/public/videos/download5.mp4 \
  -c:v libx264 -profile:v baseline -level:v 3.0 -crf 23 \
  -c:a aac -b:a 128k -ar 44100 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -f hls \
  -hls_time 4 \
  -hls_playlist_type vod \
  -hls_segment_type mpegts \
  -hls_flags independent_segments \
  -hls_segment_filename "client/public/videos/hls/desktop-simple%03d.ts" \
  client/public/videos/hls/desktop-simple.m3u8 -y

# Mobile video - use a different video
ffmpeg -i client/public/videos/download2.mp4 \
  -c:v libx264 -profile:v baseline -level:v 3.0 -crf 23 \
  -c:a aac -b:a 128k -ar 44100 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -f hls \
  -hls_time 4 \
  -hls_playlist_type vod \
  -hls_segment_type mpegts \
  -hls_flags independent_segments \
  -hls_segment_filename "client/public/videos/hls/mobile-simple%03d.ts" \
  client/public/videos/hls/mobile-simple.m3u8 -y

echo "Simple HLS streams created!"
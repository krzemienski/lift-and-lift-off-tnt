#!/bin/bash

# Create HLS directory structure
mkdir -p client/public/videos/hls/desktop
mkdir -p client/public/videos/hls/mobile

# Convert desktop videos (landscape - videos 5,6,7,8)
echo "Converting desktop videos..."
for i in 5 6 7 8; do
    num=$((i-4))
    echo "Processing desktop video$num from download$i.mp4..."
    mkdir -p client/public/videos/hls/desktop/video$num
    
    ffmpeg -i client/public/videos/download$i.mp4 \
        -c:v libx264 -profile:v baseline -level 3.0 \
        -c:a aac -ar 44100 -b:a 128k \
        -f hls -hls_time 4 -hls_playlist_type vod \
        -hls_segment_filename "client/public/videos/hls/desktop/video$num/segment%03d.ts" \
        client/public/videos/hls/desktop/video$num/playlist.m3u8 -y
done

# Convert mobile videos (portrait - videos 1,2,3,4)  
echo "Converting mobile videos..."
for i in 1 2 3 4; do
    if [ -f "client/public/videos/download$i.mp4" ]; then
        echo "Processing mobile video$i from download$i.mp4..."
        mkdir -p client/public/videos/hls/mobile/video$i
        
        ffmpeg -i client/public/videos/download$i.mp4 \
            -c:v libx264 -profile:v baseline -level 3.0 \
            -c:a aac -ar 44100 -b:a 128k \
            -f hls -hls_time 4 -hls_playlist_type vod \
            -hls_segment_filename "client/public/videos/hls/mobile/video$i/segment%03d.ts" \
            client/public/videos/hls/mobile/video$i/playlist.m3u8 -y
    else
        echo "Warning: download$i.mp4 not found, using fallback video"
        # Use download5.mp4 as fallback for missing mobile videos
        mkdir -p client/public/videos/hls/mobile/video$i
        ffmpeg -i client/public/videos/download5.mp4 \
            -c:v libx264 -profile:v baseline -level 3.0 \
            -c:a aac -ar 44100 -b:a 128k \
            -f hls -hls_time 4 -hls_playlist_type vod \
            -hls_segment_filename "client/public/videos/hls/mobile/video$i/segment%03d.ts" \
            client/public/videos/hls/mobile/video$i/playlist.m3u8 -y
    fi
done

echo "HLS conversion complete!"
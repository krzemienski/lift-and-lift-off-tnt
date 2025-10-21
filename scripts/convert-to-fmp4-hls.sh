#!/bin/bash

# Convert all videos to fMP4 HLS format (better browser compatibility)
# fMP4 segments work better with MediaSource Extensions than MPEG-TS

# Navigate to video directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VIDEO_DIR="$SCRIPT_DIR/../client/public/videos"
cd "$VIDEO_DIR" || exit 1

# Create output directory
rm -rf hls_fmp4
mkdir -p hls_fmp4

# Convert mobile videos to fMP4 HLS
echo "Converting mobile videos to fMP4..."
for i in {1..4}; do
  if [ $i -eq 1 ]; then
    input="download.mp4"
  else
    input="download${i}.mp4"
  fi
  
  echo "Processing mobile video $i (source: $input)..."
  output_dir="hls_fmp4/mobile/video${i}"
  mkdir -p "$output_dir"
  
  # Run FFmpeg from inside the output directory
  (cd "$output_dir" && ffmpeg -i "$VIDEO_DIR/$input" \
    -c:v copy \
    -c:a copy \
    -f hls \
    -hls_time 8 \
    -hls_playlist_type vod \
    -hls_segment_type fmp4 \
    -hls_fmp4_init_filename "init.mp4" \
    -hls_segment_filename "segment%03d.m4s" \
    -hls_flags independent_segments \
    playlist.m3u8)
done

# Convert desktop videos to fMP4 HLS
echo "Converting desktop videos to fMP4..."
for i in {5..8}; do
  video_num=$((i - 4))
  echo "Processing desktop video $video_num (source: download${i}.mp4)..."
  output_dir="hls_fmp4/desktop/video${video_num}"
  mkdir -p "$output_dir"
  
  # Run FFmpeg from inside the output directory
  (cd "$output_dir" && ffmpeg -i "$VIDEO_DIR/download${i}.mp4" \
    -c:v copy \
    -c:a copy \
    -f hls \
    -hls_time 8 \
    -hls_playlist_type vod \
    -hls_segment_type fmp4 \
    -hls_fmp4_init_filename "init.mp4" \
    -hls_segment_filename "segment%03d.m4s" \
    -hls_flags independent_segments \
    playlist.m3u8)
done

echo "fMP4 conversion complete!"

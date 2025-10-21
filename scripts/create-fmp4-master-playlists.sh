#!/bin/bash

# Create master HLS playlists that concatenate all videos with EXT-X-DISCONTINUITY

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VIDEO_DIR="$SCRIPT_DIR/../client/public/videos/hls_fmp4"
cd "$VIDEO_DIR" || exit 1

# Create mobile master playlist (concatenates 4 portrait videos)
echo "Creating mobile master playlist..."
cat > mobile_master.m3u8 << 'EOF'
#EXTM3U
#EXT-X-VERSION:7
#EXT-X-TARGETDURATION:8
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-MAP:URI="mobile/video1/init.mp4"
#EXTINF:8.333333,
mobile/video1/segment000.m4s
#EXTINF:1.366667,
mobile/video1/segment001.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="mobile/video2/init.mp4"
#EXTINF:8.333333,
mobile/video2/segment000.m4s
#EXTINF:1.366667,
mobile/video2/segment001.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="mobile/video3/init.mp4"
#EXTINF:8.333333,
mobile/video3/segment000.m4s
#EXTINF:1.366667,
mobile/video3/segment001.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="mobile/video4/init.mp4"
#EXTINF:8.333333,
mobile/video4/segment000.m4s
#EXTINF:1.366667,
mobile/video4/segment001.m4s
#EXT-X-ENDLIST
EOF

# Create desktop master playlist (concatenates 4 landscape videos)
echo "Creating desktop master playlist..."
cat > desktop_master.m3u8 << 'EOF'
#EXTM3U
#EXT-X-VERSION:7
#EXT-X-TARGETDURATION:8
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-MAP:URI="desktop/video1/init.mp4"
#EXTINF:8.333333,
desktop/video1/segment000.m4s
#EXTINF:1.366667,
desktop/video1/segment001.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="desktop/video2/init.mp4"
#EXTINF:8.333333,
desktop/video2/segment000.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="desktop/video3/init.mp4"
#EXTINF:8.333333,
desktop/video3/segment000.m4s
#EXTINF:1.366667,
desktop/video3/segment001.m4s
#EXT-X-DISCONTINUITY
#EXT-X-MAP:URI="desktop/video4/init.mp4"
#EXTINF:8.333333,
desktop/video4/segment000.m4s
#EXTINF:1.366667,
desktop/video4/segment001.m4s
#EXT-X-ENDLIST
EOF

echo "Master playlists created!"
ls -lh *.m3u8

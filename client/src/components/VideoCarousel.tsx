import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define video playlists
  // Mobile: Portrait videos (704x1280)
  const mobilePlaylist = [
    "/videos/portrait1.mp4",
    "/videos/portrait2.mp4",
    "/videos/portrait3.mp4"
  ];

  // Desktop: Landscape videos (1280x704)
  const desktopPlaylist = [
    "/videos/landscape1.mp4",
    "/videos/landscape2.mp4",
    "/videos/landscape3.mp4"
  ];

  // Get current playlist based on screen size
  const playlist = isMobile ? mobilePlaylist : desktopPlaylist;
  const currentVideoSrc = playlist[currentVideoIndex];
  
  // Get poster frame for current video
  const posterSrc = isMobile 
    ? `/images/posters/mobile-${currentVideoIndex + 1}.jpg`
    : `/images/posters/desktop-${currentVideoIndex + 1}.jpg`;

  // Manual play function for when autoplay is blocked
  const handleManualPlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play()
        .then(() => {
          console.log('[VideoCarousel] Manual play successful');
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch((err) => {
          console.error('[VideoCarousel] Manual play failed:', err);
        });
    }
  };

  // Detect mobile/desktop on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced parallax scrolling effect with smooth transitions
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const scrollY = window.scrollY;
            containerRef.current.style.transform = `translateY(-${scrollY * 0.12}px) scale(${1 + scrollY * 0.0001})`;
            containerRef.current.style.willChange = 'transform';
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset video index when screen size changes
  useEffect(() => {
    setCurrentVideoIndex(0);
    setHasError(false);
    setIsLoading(true);
    setAutoplayBlocked(false);
  }, [isMobile]);

  // Handle video loading and playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.log('[VideoCarousel] No video ref');
      return;
    }

    console.log('[VideoCarousel] Loading video:', currentVideoSrc);
    setIsLoading(true);
    setHasError(false);
    setAutoplayBlocked(false); // Reset autoplay blocked state for new video

    const handleCanPlay = () => {
      console.log('[VideoCarousel] Video can play');
      setIsLoading(false);
      video.play()
        .then(() => {
          console.log('[VideoCarousel] Video playing');
          setIsPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch((err) => {
          console.warn("[VideoCarousel] Autoplay blocked:", err.message);
          setIsPlaying(false);
          setAutoplayBlocked(true); // Show play button when autoplay is blocked
        });
    };

    const handleVideoEnded = () => {
      setIsPlaying(false); // Reset playing state during transition
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % playlist.length;
        return nextIndex;
      });
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      const errorDetails = target.error ? {
        code: target.error.code,
        message: target.error.message
      } : 'Unknown error';
      console.error("[VideoCarousel] Video error details:", errorDetails, "Source:", currentVideoSrc);
      setIsLoading(false);
      setIsPlaying(false);
      setHasError(true);
    };

    const handleLoadedData = () => {
      console.log('[VideoCarousel] Video data loaded');
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleVideoEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    // Note: No need to call video.load() since React handles src updates automatically

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleVideoEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [currentVideoSrc, playlist.length]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main gradient background - always visible */}
      <div 
        className="absolute inset-0 w-full h-full animate-gradient-shift"
        style={{
          background: `linear-gradient(135deg, #0B2545 0%, #1a3758 25%, #0B2545 50%, #1a3758 75%, #0B2545 100%)`,
        }}
      />

      {/* Animated gold accent */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 animate-gold-pulse"
        style={{
          background: `radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%)`,
        }}
      />

      {/* Parallax container */}
      <div
        ref={containerRef}
        className="absolute inset-0 -top-[20vh] transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Poster Frame - show while video is loading or not playing */}
        {!hasError && (
          <img
            src={posterSrc}
            alt="Video poster"
            className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-500 ${
              !isPlaying ? "opacity-90" : "opacity-0"
            }`}
            style={{
              transformOrigin: 'center',
            }}
          />
        )}

        {/* Video Player - only show when loaded and no error */}
        {!hasError && (
          <video
            ref={videoRef}
            autoPlay
            loop={false}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-1000 ${
              isPlaying ? "opacity-90" : "opacity-0"
            }`}
            style={{
              transformOrigin: 'center',
            }}
            data-testid="video-carousel"
          >
            <source 
              src={currentVideoSrc} 
              type='video/mp4; codecs="avc1.42E01E"' 
            />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Overlay for text readability - always present */}
        <div className="absolute inset-0 h-[140vh]">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/85 via-[#0B2545]/70 to-[#0B2545]/90" />
          
          {/* Gold accent overlay at top */}
          <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-[#D4A017]/15 via-[#D4A017]/5 to-transparent" />
          
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0B2545]/95 to-transparent" />
          
          {/* Vignette effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, transparent 30%, #0B2545 100%)`,
              opacity: 0.6,
            }}
          />
        </div>
      </div>

      {/* Play button overlay - shows when autoplay is blocked */}
      {autoplayBlocked && !isPlaying && !isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={handleManualPlay}
            className="group relative flex items-center justify-center w-24 h-24 bg-[#0B2545]/80 rounded-full border-2 border-[#D4A017] hover:bg-[#0B2545]/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#D4A017]/50"
            aria-label="Play video"
            data-testid="play-button-overlay"
          >
            <Play className="w-10 h-10 text-[#D4A017] ml-1" fill="currentColor" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#D4A017] text-sm whitespace-nowrap opacity-80">
              Click to play
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define video playlists
  const mobilePlaylist = [
    "/videos/download.mp4",
    "/videos/download2.mp4",
    "/videos/download3.mp4",
    "/videos/download4.mp4"
  ];

  const desktopPlaylist = [
    "/videos/download5.mp4",
    "/videos/download6.mp4",
    "/videos/download7.mp4",
    "/videos/download8.mp4"
  ];

  // Get current playlist based on screen size
  const playlist = isMobile ? mobilePlaylist : desktopPlaylist;
  const currentVideoSrc = playlist[currentVideoIndex];

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

    const handleCanPlay = () => {
      console.log('[VideoCarousel] Video can play');
      setIsLoading(false);
      video.play()
        .then(() => {
          console.log('[VideoCarousel] Video playing');
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("[VideoCarousel] Autoplay blocked:", err.message);
          setIsPlaying(false);
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
          background: `linear-gradient(135deg, #0A2340 0%, #1a3758 25%, #0A2340 50%, #1a3758 75%, #0A2340 100%)`,
        }}
      />

      {/* Animated gold accent */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 animate-gold-pulse"
        style={{
          background: `radial-gradient(circle at 20% 50%, #F7C948 0%, transparent 50%)`,
        }}
      />

      {/* Parallax container */}
      <div
        ref={containerRef}
        className="absolute inset-0 -top-[20vh] transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Video Player - only show when loaded and no error */}
        {!hasError && (
          <video
            ref={videoRef}
            src={currentVideoSrc}
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
          />
        )}
        
        {/* Overlay for text readability - always present */}
        <div className="absolute inset-0 h-[140vh]">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2340]/60 via-[#0A2340]/30 to-[#0A2340]/70" />
          
          {/* Gold accent overlay at top */}
          <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-[#F7C948]/15 via-[#F7C948]/5 to-transparent" />
          
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#0A2340]/90 to-transparent" />
          
          {/* Vignette effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, #0A2340 100%)`,
              opacity: 0.4,
            }}
          />
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-[#F7C948] opacity-50">
            <div className="w-16 h-16 border-4 border-[#F7C948]/30 border-t-[#F7C948] rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}

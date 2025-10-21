import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile/desktop on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
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

  // Load HLS playlist when video ref is ready or screen size changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    setIsPlaying(false);

    // Load from local directory since videos are there
    const playlistUrl = isMobile 
      ? "/videos/hls/mobile_master.m3u8"
      : "/videos/hls/desktop_master.m3u8";

    console.log(`[VideoCarousel] Loading HLS playlist: ${playlistUrl}`);

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Check if HLS is supported
    if (Hls.isSupported()) {
      const hls = new Hls({
        debug: false, // Reduce console noise
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
        maxBufferLength: 30,
        maxBufferSize: 60,
        maxLoadingDelay: 4,
      });

      hlsRef.current = hls;

      hls.loadSource(playlistUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("[VideoCarousel] HLS manifest parsed, starting playback");
        setIsLoading(false);
        video.play()
          .then(() => {
            console.log("[VideoCarousel] Video playing successfully");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("[VideoCarousel] Autoplay blocked:", err.message);
            setIsPlaying(true); // Show video anyway
          });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("[VideoCarousel] HLS error:", data.type, data.details);
        
        // On error, ensure gradient is visible
        if (data.fatal) {
          setIsLoading(false);
          setIsPlaying(false);
          
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.log("[VideoCarousel] Fatal network error, showing fallback");
              // Don't try to recover, just show the gradient
              hls.destroy();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("[VideoCarousel] Fatal media error, showing fallback");
              hls.destroy();
              break;
            default:
              console.log("[VideoCarousel] Unrecoverable error, showing fallback");
              hls.destroy();
              break;
          }
        }
      });

      hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
        console.log("[VideoCarousel] Level loaded:", data.level, "duration:", data.details.totalduration);
      });

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari, iOS)
      console.log("[VideoCarousel] Using native HLS support");
      video.src = playlistUrl;
      video.addEventListener('loadedmetadata', () => {
        console.log("[VideoCarousel] Native HLS metadata loaded");
        setIsLoading(false);
        video.play()
          .then(() => {
            console.log("[VideoCarousel] Native HLS playing successfully");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("[VideoCarousel] Native HLS autoplay blocked:", err.message);
            setIsPlaying(true);
          });
      });
      
      video.addEventListener('error', (e) => {
        console.error("[VideoCarousel] Native HLS error:", e);
        setIsLoading(false);
        setIsPlaying(false);
      });
    }

    // Set a timeout to show fallback if loading takes too long
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.log("[VideoCarousel] Loading timeout, showing fallback");
        setIsLoading(false);
      }
    }, 5000);

    // Cleanup
    return () => {
      clearTimeout(loadingTimeout);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [isMobile]); // Reload when screen size changes

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
        {/* HLS Video Player - only show when loaded */}
        <video
          ref={videoRef}
          autoPlay
          loop={true}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-2000 ${
            isPlaying && !isLoading ? "opacity-90" : "opacity-0"
          }`}
          style={{
            transformOrigin: 'center',
          }}
          data-testid="video-carousel-hls"
        />
        
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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-[#F7C948] opacity-50">
            <div className="w-16 h-16 border-4 border-[#F7C948]/30 border-t-[#F7C948] rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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

    // Select appropriate HLS playlist based on screen size
    const playlistUrl = isMobile 
      ? "/public-objects/hls/mobile_master.m3u8"
      : "/public-objects/hls/desktop_master.m3u8";

    console.log(`[VideoCarousel] Loading HLS playlist: ${playlistUrl}`);

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Check if HLS is supported
    if (Hls.isSupported()) {
      const hls = new Hls({
        debug: true,
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hlsRef.current = hls;

      hls.loadSource(playlistUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("[VideoCarousel] HLS manifest parsed, starting playback");
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
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.log("[VideoCarousel] Fatal network error, trying to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("[VideoCarousel] Fatal media error, trying to recover");
              hls.recoverMediaError();
              break;
            default:
              console.log("[VideoCarousel] Unrecoverable error");
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
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [isMobile]); // Reload when screen size changes

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="absolute inset-0 -top-[20vh] transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Enhanced fallback background with TNT brand gradient */}
        <div 
          className="absolute inset-0 h-[140vh] w-full"
          style={{
            background: `linear-gradient(135deg, #0B2545 0%, #243B6B 50%, #0B2545 100%)`,
            transformOrigin: 'center',
          }}
        >
          {/* Optional hero image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(/images/hero_action.png)`,
            }}
          />
        </div>
        
        {/* HLS Video Player */}
        <video
          ref={videoRef}
          autoPlay
          loop={false}
          muted
          playsInline
          preload="auto"
          poster="/images/hero_action.png"
          className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-1000 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transformOrigin: 'center',
            backgroundColor: '#0B2545',
          }}
          data-testid="video-carousel-hls"
        />
        
        {/* Subtle blue and gold overlay for text readability */}
        <div className="absolute inset-0">
          {/* Base blue gradient overlay - reduced opacity to show videos */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/30 via-[#243B6B]/20 to-[#0B2545]/40" />
          
          {/* Gold accent overlay at top */}
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#D4A017]/10 to-transparent" />
          
          {/* Subtle vignette effect for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0B2545]/30" />
        </div>
      </div>
    </div>
  );
}

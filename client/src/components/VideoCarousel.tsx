import { useEffect, useRef, useState } from "react";

// Portrait videos for mobile (vertical orientation)
const portraitVideos = [
  "/videos/download.mp4",   // Portrait 1
  "/videos/download2.mp4",  // Portrait 2
  "/videos/download3.mp4",  // Portrait 3
  "/videos/download4.mp4",  // Portrait 4
];

// Landscape videos for desktop (horizontal orientation)
const landscapeVideos = [
  "/videos/download5.mp4",  // Landscape 1
  "/videos/download6.mp4",  // Landscape 2
  "/videos/download7.mp4",  // Landscape 3
  "/videos/download8.mp4",  // Landscape 4
];

export default function VideoCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [showFirstVideo, setShowFirstVideo] = useState(false); // Show when loaded
  const [firstVideoLoaded, setFirstVideoLoaded] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Select appropriate videos based on screen size
  const videos = isMobile ? portraitVideos : landscapeVideos;

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
            // Smoother parallax with enhanced depth perception
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

  // Load and play videos immediately on mount - runs when videos array changes
  useEffect(() => {
    // Reset video loading when screen size changes (mobile/desktop switch)
    setVideosLoaded(false);
    setCurrentVideoIndex(0);
    setNextVideoIndex(1);
  }, [videos]);

  // Load videos once refs are ready
  useEffect(() => {
    if (!videosLoaded) {
      // Wait for refs to be populated
      const timer = setTimeout(() => {
        console.log("[VideoCarousel] Loading videos:", videos);
        
        // Load first video immediately
        const firstVideo = videoRefs.current[0];
        if (firstVideo) {
          console.log("[VideoCarousel] Loading first video:", videos[0]);
          
          // Show video once it has loaded data
          firstVideo.addEventListener('loadeddata', () => {
            console.log("[VideoCarousel] First video loaded successfully");
            setShowFirstVideo(true);
            setFirstVideoLoaded(true);
          }, { once: true });
          
          // Also show on canplay as fallback
          firstVideo.addEventListener('canplay', () => {
            console.log("[VideoCarousel] First video can play");
            setShowFirstVideo(true);
          }, { once: true });
          
          firstVideo.load();
          firstVideo.play().catch((error) => {
            console.warn("[VideoCarousel] Autoplay blocked, showing video anyway:", error.message);
            // Show video even if autoplay fails
            setShowFirstVideo(true);
          });
        }
        
        // Preload next 2 videos
        videoRefs.current.slice(1, 3).forEach((video, index) => {
          if (video) {
            console.log("[VideoCarousel] Preloading video:", videos[index + 1]);
            video.load();
          }
        });
        
        // Load remaining videos after delay
        setTimeout(() => {
          videoRefs.current.slice(3).forEach((video, index) => {
            if (video) {
              video.load();
            }
          });
        }, 3000);
        
        setVideosLoaded(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [videosLoaded, videos]);

  const handleVideoEnd = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setNextVideoIndex((currentVideoIndex + 1) % videos.length);
    
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setIsTransitioning(false);
      
      const nextVideo = videoRefs.current[(currentVideoIndex + 1) % videos.length];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(console.error);
      }
    }, 1000);
  };

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
        {videos.map((videoSrc, index) => (
          <video
            key={`${videoSrc}-${index}`}
            ref={(el) => (videoRefs.current[index] = el)}
            autoPlay={index === 0}
            loop={false}
            muted
            playsInline
            preload={index < 2 ? "auto" : "metadata"}
            poster={index === 0 ? "/images/hero_action.png" : undefined}
            onEnded={index === currentVideoIndex ? handleVideoEnd : undefined}
            onLoadedData={() => {
              if (index === 0) {
                console.log(`[VideoCarousel] Video ${index} loaded data`);
                setShowFirstVideo(true);
              }
            }}
            onError={(e) => {
              console.error(`[VideoCarousel] Error loading video ${videoSrc}:`, e);
              // Show first video anyway even if there's an error
              if (index === 0) setShowFirstVideo(true);
            }}
            className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-1000 ${
              index === currentVideoIndex || (index === 0 && showFirstVideo)
                ? "opacity-100"
                : index === nextVideoIndex && isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              transformOrigin: 'center',
              backgroundColor: index === 0 ? '#0B2545' : 'transparent',
            }}
          >
            <source src={videoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
        {/* Subtle blue and gold overlay for text readability - lighter to show videos */}
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
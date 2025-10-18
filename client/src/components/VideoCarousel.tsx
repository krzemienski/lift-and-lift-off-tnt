import { useEffect, useRef, useState } from "react";

const videos = [
  "/videos/download.mp4",   // Portrait 1
  "/videos/download5.mp4",  // Landscape 1
  "/videos/download2.mp4",  // Portrait 2
  "/videos/download6.mp4",  // Landscape 2
  "/videos/download3.mp4",  // Portrait 3
  "/videos/download7.mp4",  // Landscape 3
  "/videos/download4.mp4",  // Portrait 4
  "/videos/download8.mp4",  // Landscape 4
];

export default function VideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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

  // Load videos only when in view
  useEffect(() => {
    if (isInView && !videosLoaded) {
      // Preload only the first few videos initially
      const videosToPreload = 3; 
      videoRefs.current.slice(0, videosToPreload).forEach((video, index) => {
        if (video) {
          video.load();
          if (index === 0) {
            // Play the first video with retry mechanism
            const playVideo = () => {
              video.play().catch((error) => {
                console.error("Error playing video:", error);
                // Retry after a short delay
                setTimeout(playVideo, 1000);
              });
            };
            playVideo();
          }
        }
      });
      
      // Load remaining videos after a delay
      setTimeout(() => {
        videoRefs.current.slice(videosToPreload).forEach((video) => {
          if (video) {
            video.load();
          }
        });
      }, 2000);
      
      setVideosLoaded(true);
    }
  }, [isInView, videosLoaded]);

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
        {/* Fallback poster image for when videos aren't loaded */}
        <div 
          className="absolute inset-0 h-[140vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/hero_poster_desktop.jpg)`,
            transformOrigin: 'center',
          }}
        />
        {videos.map((videoSrc, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={videoSrc}
            autoPlay={index === 0}
            loop={false}
            muted
            playsInline
            preload={index < 2 ? "auto" : "metadata"}
            onEnded={index === currentVideoIndex ? handleVideoEnd : undefined}
            className={`absolute inset-0 h-[140vh] w-full object-cover object-center transition-opacity duration-1000 ${
              index === currentVideoIndex
                ? "opacity-100"
                : index === nextVideoIndex && isTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              transformOrigin: 'center',
            }}
          />
        ))}
        {/* Enhanced blue and gold overlay for better text readability */}
        <div className="absolute inset-0">
          {/* Base blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/70 via-[#243B6B]/50 to-[#0B2545]/80" />
          
          {/* Gold accent overlay at top */}
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#D4A017]/20 to-transparent" />
          
          {/* Additional blue tint for text areas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 via-transparent to-[#243B6B]/40" />
          
          {/* Vignette effect for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0B2545]/50" />
        </div>
      </div>
    </div>
  );
}
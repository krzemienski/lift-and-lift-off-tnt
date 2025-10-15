import { useEffect, useRef, useState } from "react";
import video1 from "@assets/download_1760497007100.mp4";
import video2 from "@assets/download 2_1760497007100.mp4";
import video3 from "@assets/download 3_1760497007100.mp4";
import video4 from "@assets/download 4_1760497007100.mp4";
import video5 from "@assets/download 5_1760497007100.mp4";
import video6 from "@assets/download 6_1760497007100.mp4";
import video7 from "@assets/download 7_1760497007100.mp4";
import video8 from "@assets/download 8_1760497007100.mp4";
import video9 from "@assets/download_1760056534924.mp4";

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
];

export default function VideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const scrollY = window.scrollY;
            containerRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.src = videos[index];
        if (index === 0) {
          video.play().catch(console.error);
        }
      }
    });
  }, []);

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
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 -top-[20vh]"
      >
        {videos.map((_, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            autoPlay={index === 0}
            loop={false}
            muted
            playsInline
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>
    </div>
  );
}
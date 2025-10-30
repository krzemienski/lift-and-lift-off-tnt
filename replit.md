# TNT Fitness - Coach Rico's Personal Training Website

## Overview
TNT Fitness is a production-ready personal training website for Coach Rico, focusing on "Today, Not Tomorrow" explosive fitness programs. The platform features HLS-compliant video playlists, dynamic Instagram integration, and a professional service showcase. It is designed for optimal performance and user experience, incorporating a modern UI with a strong brand identity. The project aims to provide a robust online presence for Coach Rico, enabling client engagement and showcasing his specialized fitness programs.

## User Preferences
The user wants a clear and visually engaging website that effectively communicates Coach Rico's fitness brand. They prioritize a modern aesthetic with strong branding (gold, navy, indigo) and a smooth, interactive user experience, particularly with video content. All critical information should be easily accessible and readable.

## System Architecture
The application is built with a React frontend, leveraging Vite, Tailwind CSS, and Shadcn UI for a modern and responsive user interface. The backend is powered by Express.js, handling API requests and data storage.

**UI/UX Decisions:**
- **Color Scheme:** Primary brand colors are Gold (#D4A017), Navy (#0B2545), and Indigo (#243B6B), used consistently across the site for backgrounds, text, and accents.
- **Typography:** Montserrat for headings (`font-heading font-extrabold`) and Inter for body text, ensuring readability and brand consistency.
- **Video System:** Features a responsive 8-video carousel with separate playlists for mobile (portrait) and desktop (landscape), ensuring optimal viewing across devices. Videos are MP4 (H.264 Baseline profile, no audio) for maximum browser compatibility and optimized file size. A parallax scrolling effect enhances visual appeal.
- **Overlay System:** Blue and gold overlays with multi-layer gradients and backdrop blur are used to ensure text readability over dynamic video backgrounds.
- **Branding:** A clean, minimalist logo system (square icon for mobile, horizontal logo with tagline for desktop) is consistently applied.
- **Navigation:** A collapsible sticky navigation appears on scroll, providing easy access to key sections with smooth scroll functionality.

**Technical Implementations & Feature Specifications:**
- **Video Playback:** Videos served from Replit Object Storage with H.264 Constrained Baseline profile for maximum browser compatibility. Features:
  - 6 videos total: 3 landscape (1280x704) and 3 portrait (704x1280)
  - Transcoded with ffmpeg using `-profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart`
  - All videos muted (no audio track) to ensure silent autoplay
  - Responsive playlist switching at 768px breakpoint (portrait <768px, landscape ≥768px)
  - JavaScript-based auto-progression handling `ended` events for seamless carousel transitions
  - Preloading system caches all playlist videos for instant switching
  - Poster frames extracted from actual video content for proper placeholder images
  - Parallax scrolling effect: video background transforms on scroll with `translateY(-${scrollY * 0.12}px)`
  - Error handling with fallback to animated gradient background
- **Object Storage:** Videos served via `/public/:filePath(*)` route using ObjectStorageService with proper content-type (`video/mp4`) and caching headers (`max-age=3600`)
- **Asset Management:** All brand assets (logos, program icons) are high-quality PNGs with proper alpha channel transparency, generated in TNT gold.
- **Instagram Integration:** Dynamic feed fetching from Instagram Basic Display API via a backend route (`/api/instagram/posts`), with placeholder fallback.
- **Contact Form:** Backend endpoint (`/api/contact`) to store submissions in in-memory storage, with an admin endpoint (`/api/contact/messages`) to retrieve them.
- **Responsive Design:** Comprehensive testing on desktop (1920x1080) and mobile (390x844) ensures full responsiveness and aesthetic integrity.
- **Docker Configuration:** Includes Docker setup for consistent deployment.
- **Timestamped Logging:** Implemented for monitoring and debugging.
- **Design Tokens:** CSS variables for colors, typography, spacing, and shadows defined in `client/src/index.css`.

## External Dependencies
- **Instagram Basic Display API:** Used for fetching and displaying dynamic Instagram feeds from @tntfitness.
- **Google Fonts:** For loading Orbitron, Montserrat, and Inter typefaces.
- **FFmpeg:** Used for video re-encoding and optimization to H.264 Baseline profile.
- **MemStorage:** In-memory storage solution for contact form submissions.
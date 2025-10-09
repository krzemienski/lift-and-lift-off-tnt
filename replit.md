# TNT Fitness - Coach Rico's Personal Training Website

## Project Overview
Modern, responsive personal trainer website for TNT Fitness (Today, Not Tomorrow) featuring Coach Rico's explosive fitness programs with parallax video backgrounds, dynamic Instagram integration, and professional service showcase.

## Recent Changes
- **TNT Fitness Branding Implementation for Coach Rico** (October 2025)
  - **Complete Brand Transformation**: Updated entire website from Lillian Rolle to TNT Fitness (Today, Not Tomorrow) featuring Coach Rico
  - **Colors**: Updated color scheme to TNT brand colors
    * Gold #D4A017 (HSL: 46 84% 46%) - Primary buttons and calls-to-action
    * Navy #0B2545 (HSL: 213 60% 16%) - Text and backgrounds
    * Indigo #243B6B (HSL: 219 48% 30%) - Secondary colors and accents
    * All colors properly configured with light/dark mode support
  - **Content Updates**:
    * Hero section: "TODAY, NOT TOMORROW" messaging
    * Coach profile: Updated to Coach Rico with ISSA certifications
    * Training programs: Calisthenics, Flexibility, Boxing, Strength Training, Fat Loss
    * Contact info: New York location and TNT Fitness contact details
  - **Video Integration**: Integrated Coach Rico's training videos
  - **Social Media**: Updated Instagram to @tntfitness

- **Previous Lily Rolle Fitness Branding** (October 9, 2025)
  - **Colors**: Updated entire color scheme to neon cyberpunk aesthetic
    * Hot Pink #FF2D95 (HSL: 328 100% 59%) - Primary buttons and accents
    * Electric Purple #9B5DE5 - Secondary colors and gradients
    * Carbon Black #0E0E0E (HSL: 0 0% 5%) - Dark mode backgrounds
    * All colors properly configured with light/dark mode support
  - **Typography**: Complete font system integration
    * Orbitron (700/800): Display font for hero title and major headlines
    * Montserrat (700/800): Heading font for all section titles and subheadings
    * Inter (400/600): Body font for all text content
    * Loaded via Google Fonts with proper CSS variables (--font-display, --font-heading)
  - **Brand Assets**: 
    * Favicon updated to /attached_assets/favicon.svg (kettlebell icon)
    * StickyNav uses kettlebell icon (replaced generic dumbbell)
    * Brand kit assets from lilyfit.training domain available in attached_assets/
  - **Border Radius**: Updated to brand standard (16px base)
    * All rounded corners derive from --radius variable for consistency
    * Cards: 12px, Buttons: 16px, Inputs: 8px, Minor elements: 4px
  - **Testing**: Comprehensively verified on desktop (1920x1080) and mobile (390x844)
  
- **Sticky Navigation Menu**: Added collapsible sticky navigation that appears when scrolling (October 2025)
  - Appears automatically when scrolling past 70% of viewport height
  - Collapsible menu with toggle button to show/hide navigation links
  - Smooth scroll navigation to Home, About, Specialties, and Contact sections
  - Semi-transparent background with backdrop blur for modern appearance
  - Properly stacked z-index to avoid conflicts with other UI elements
  
- **Global Parallax Video Background**: Extended parallax effect across all sections (October 2025)
  - Video background is now fixed and spans entire page with smooth scrolling effect
  - Video overlay reduced to 30% opacity (bg-black/30) for maximum visibility
  - All sections use semi-transparent black backgrounds (35-45% opacity) with backdrop blur
  - White text with text shadows ensures readability against video
  - Creates cohesive, dynamic visual experience throughout the site
  
- **Instagram Integration**: Set up dynamic Instagram feed fetching from @ellorylil using Instagram Basic Display API
  - Backend route: `/api/instagram/posts`
  - Falls back to placeholder images when `INSTAGRAM_ACCESS_TOKEN` is not set
  - To enable live Instagram feed: Set `INSTAGRAM_ACCESS_TOKEN` secret with a valid Instagram Basic Display API access token
  
- **Contact Form**: Implemented backend endpoint to store contact form submissions
  - Backend route: `/api/contact` (POST)
  - Messages are stored in memory storage
  - Admin endpoint: `/api/contact/messages` (GET) to view all submissions
  
- **Email Integration**: User dismissed Resend integration setup
  - Contact form currently stores messages without email notifications
  - To add email notifications in the future: Set up Resend or another email service and update `/api/contact` endpoint

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, Shadcn UI
- Backend: Express.js
- Storage: In-memory (MemStorage)
- Key Features: Parallax video, Instagram API integration, responsive design

## Environment Variables
- `INSTAGRAM_ACCESS_TOKEN` - Instagram Basic Display API access token (optional, uses fallback images if not set)
- `SESSION_SECRET` - Session secret for Express (already configured)

## User Information
- Coach: Rico (TNT Fitness)
- Location: New York, NY
- Instagram: @tntfitness (https://www.instagram.com/tntfitness)
- Certifications: ISSA Certified, Athletic Performance Specialist, Bodyweight Training Expert
- Specialties: Calisthenics, Flexibility, Boxing, Strength Training, Fat Loss

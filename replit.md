# Lillian Rolle - Personal Trainer Website

## Project Overview
Modern, responsive personal trainer website for Lillian Rolle featuring parallax video backgrounds, dynamic Instagram integration, and professional service showcase.

## Recent Changes
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
- Coach: Lillian Rolle
- Location: Havana, Cuba
- Instagram: @ellorylil (https://www.instagram.com/ellorylil)
- Certifications: ECP - EFTI/Lionel (NBFE)
- Specialties: Middle Age Fitness, Muscle Gain, Sports Training, Weight Loss, Yoga

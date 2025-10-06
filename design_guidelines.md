# Design Guidelines for Lillian Rolle Personal Trainer Website

## Design Approach
**Reference-Based Approach** drawing inspiration from premium fitness platforms (Peloton, Equinox Digital, Nike Training Club) with a focus on aspirational, energetic aesthetics that convey transformation and expertise.

## Core Design Principles
- **Energetic Professionalism**: Balance high-energy fitness imagery with credible expertise
- **Personal Connection**: Showcase Lillian's Cuban heritage and authentic personality
- **Action-Oriented**: Every section drives toward client engagement and booking

## Color Palette

### Dark Mode (Primary)
- **Primary Brand**: 280 65% 45% (Deep energetic purple - strength and transformation)
- **Accent**: 340 80% 55% (Vibrant coral pink - energy and movement)
- **Background Base**: 280 15% 8% (Rich dark purple-black)
- **Surface**: 280 12% 12%
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 280 5% 70%

### Light Mode (Alternative)
- **Primary Brand**: 280 70% 40%
- **Accent**: 340 75% 50%
- **Background Base**: 0 0% 99%
- **Surface**: 280 5% 95%
- **Text Primary**: 280 15% 10%
- **Text Secondary**: 280 8% 45%

## Typography
- **Headings**: "Inter" (700-800 weight) - Strong, modern, athletic
- **Body**: "Inter" (400-500 weight) - Clean readability
- **Accent/Stats**: "DM Sans" (600 weight) - Numerical impact

**Scale**:
- H1: text-5xl md:text-7xl font-bold
- H2: text-4xl md:text-5xl font-bold
- H3: text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg
- Small: text-sm

## Layout System
**Spacing Primitives**: Consistently use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8 md:p-16
- Section spacing: py-20 md:py-32
- Grid gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8

**Container Strategy**:
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl mx-auto px-6
- Text content: max-w-3xl for optimal reading

## Page Sections & Structure

### 1. Hero Section with Parallax Video (100vh)
- **Full-screen parallax video background** showing dynamic fitness content (HIIT, yoga flow, strength training)
- Dark overlay (bg-black/60) for text contrast
- Centered content: Large headline "Transform Your Body, Elevate Your Life" + subheadline + dual CTAs
- Video should showcase energy and variety of training styles
- Scroll indicator with smooth fade-out

### 2. Coach Introduction (Two-column split)
- **Left**: Professional portrait of Lillian in action/coaching pose
- **Right**: Personal story, Cuban heritage highlight, philosophy statement
- Credential badges/icons for certifications displayed elegantly
- Stats row: Years experience, Clients trained, Success stories (if available)

### 3. Specialties Grid (3-column desktop, 1-column mobile)
Each specialty card features:
- Custom icon (Heroicons)
- Specialty name as heading
- Brief description of approach/benefits
- Subtle hover elevation effect
Cards: Middle Age Fitness, Muscle Gain, Sports Training, Weight Loss, Yoga

### 4. Instagram Feed Integration
- **Heading**: "Follow My Journey @ellorylil"
- **Layout**: 4-column masonry grid (2-col tablet, 1-col mobile)
- Pull recent 8-12 posts with smooth fade-in load
- Each image: Subtle hover overlay with post caption preview
- Direct link to Instagram profile prominently displayed

### 5. Transformation/Results Showcase
- Before/after slider component (if testimonials available)
- Client testimonial cards with photos
- 3-column layout with rotating testimonials
- Focus on diverse age groups and goals

### 6. Contact Section (Split layout)
- **Left (40%)**: Contact information, response time, social links, location (if applicable)
- **Right (60%)**: Contact form with fields: Name, Email, Phone, Training Goal dropdown (Specialties), Message
- Form styling: Soft rounded inputs, accent color focus states
- Primary CTA button: "Start Your Transformation"

### 7. Footer
- **Top**: Newsletter signup (Stay motivated - fitness tips)
- **Middle**: Quick links (Specialties, About, Contact), Social media icons
- **Bottom**: Copyright, Privacy/Terms, "Built with passion in [Location]"

## Component Library

### Buttons
- **Primary**: Accent color fill, white text, rounded-lg, px-8 py-4
- **Secondary**: Outline variant with blur background when over images/video
- **Ghost**: Text-only with hover underline for tertiary actions

### Cards
- Rounded-2xl with subtle shadow
- Surface background color
- Hover: Slight elevation (translate-y-1) and shadow increase
- Inner padding: p-6 md:p-8

### Form Elements
- Rounded-lg inputs with border focus transition
- Accent color focus ring
- Helper text in secondary color
- Error states in red-500

## Animations
**Minimal & Purposeful**:
- Parallax video scroll effect (60% scroll speed)
- Fade-in on scroll for section reveals (intersection observer)
- Smooth hover transitions (300ms ease-in-out)
- Instagram feed stagger load animation
- NO distracting spinning, bouncing, or excessive motion

## Images

### Required Images:
1. **Hero Video**: High-energy fitness montage (20-30 seconds loop) - multiple training scenarios, bright and dynamic
2. **Coach Portrait**: Professional action shot of Lillian coaching or demonstrating form - authentic, energetic
3. **Instagram Feed**: Auto-pulled from @ellorylil
4. **Specialty Icons**: Use Heroicons for each specialty (dumbbell, yoga pose, running figure, etc.)
5. **Background Patterns**: Subtle geometric fitness-inspired patterns for section dividers (use CSS gradients)

### Image Treatment:
- Hero video: 60% opacity overlay for text readability
- Coach portrait: Rounded-2xl with subtle border
- Instagram images: Aspect-ratio-square with object-cover
- Testimonial photos: Circular avatars (rounded-full)

## Responsive Behavior
- **Mobile (< 768px)**: Single column, stacked sections, larger touch targets (min 44px)
- **Tablet (768-1024px)**: 2-column grids, adjusted spacing
- **Desktop (> 1024px)**: Full multi-column layouts, parallax effects active
- Touch devices: Disable parallax, use static video poster or image

## Accessibility
- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support
- Reduced motion media query support
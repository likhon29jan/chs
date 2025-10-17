# Overview

This is a Next.js-based school website for **Chalishia High School (চলিশীয়া মাধ্যমিক বিদ্যালয়)** located in Abhynagar Upazila, Jessore District, Bangladesh. The application serves as an informational portal providing school information, academic resources, results, and administrative details. The site is built with modern web technologies and supports Bengali language content with appropriate typography.

## School Information

- **Name**: চলিশীয়া মাধ্যমিক বিদ্যালয় (Chalishia High School)
- **EIIN**: 115498
- **Type**: Private (বেসরকারি)
- **Location**: Chalishia Union, Abhynagar Upazila, Jessore District
- **Union**: 3 No. Chalishia Union Parishad
- **Board**: Jessore Board of Secondary and Higher Secondary Education
- **Headmaster**: Mostak Ahmed (মোস্তাক আহম্মেদ)

# Recent Changes (October 17, 2025)

- **Complete Multi-Page Website**: Created 7 fully functional pages with proper routing (Home, About, Activities, Academic Records, Results, Photos, Contact)
- **Component-Based Architecture**: Restructured into modular React components for better maintainability
- **Adorsho Lipi Font Integration**: Implemented Adorsho Lipi Bengali font from banglawebfonts.pages.dev with preloading
- **Comprehensive SEO**: Added metadata (titles, descriptions, keywords, OpenGraph tags) to all pages
- **Google Maps Integration**: Embedded interactive Google Maps on Contact page showing school location
- **Responsive Design**: Mobile-first approach using Tailwind CSS v4 with breakpoints for all devices
- **Real-time Features**: Live date/time display in Bengali locale
- **Asset Management**: Optimized images using Next.js Image component

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
**Technology**: Next.js 15.5.5 with App Router and TypeScript

**Rationale**: Next.js App Router provides server-side rendering capabilities, improved performance, and better SEO for the school website. The App Router pattern offers a more intuitive file-based routing system and better support for server components.

**Key Features**:
- React 19.1.0 for UI components
- TypeScript for type safety and better developer experience
- Component-based architecture with separation of concerns
- Server and Client components for optimal performance

## Styling Solution
**Technology**: Tailwind CSS v4 with PostCSS

**Rationale**: Tailwind CSS provides utility-first styling that enables rapid UI development while maintaining consistency. Version 4 offers improved performance and better developer experience.

**Key Features**:
- Custom CSS variables for theming
- Responsive design with mobile-first approach
- Custom animations (marquee effect for news ticker)
- Gradient backgrounds and modern UI effects
- Light mode optimized for better readability

## Internationalization & Typography
**Technology**: Adorsho Lipi (Bengali Web Font)

**Rationale**: Since the website serves Bengali-speaking users, proper Bengali font support is essential. Adorsho Lipi provides authentic Bengali typography with excellent readability.

**Implementation**:
- Font loaded from banglawebfonts.pages.dev CDN
- Preload optimization for faster initial render
- Global CSS integration for consistent typography
- Bengali locale for date/time formatting

## Component Architecture
**Pattern**: Modular component structure with clear separation

**Components**:
- `Header`: School branding with Jessore Board logo and real-time date/time display in Bengali
- `Navigation`: Main menu navigation with Bengali menu items
- `NewsMarquee`: Animated news ticker for announcements with CSS animation
- `MainContent`: Primary content area with service links (HSC Results, Student Management, etc.) and school photo
- `Footer`: Important menu links in three columns with Jessore Board branding

**Rationale**: Each component handles a specific UI concern, making the codebase maintainable and testable. Client-side interactivity is isolated to components that need it (using 'use client' directive).

## Development Configuration
**Build Tool**: Next.js with Turbopack

**Rationale**: Turbopack provides faster build times and improved development experience compared to Webpack.

**Configuration**:
- Custom port (5000) for development and production
- Allowed dev origins for Replit environment (`*.replit.dev`, `*.repl.co`)
- TypeScript strict mode enabled
- Path aliases configured (`@/*` for root imports)

## Asset Management
**Technology**: Next.js Image component with optimized static assets

**Rationale**: Next.js Image component provides automatic image optimization, lazy loading, and responsive image support.

**Assets**:
- `/logo.png`: Jessore Board logo
- `/bg_main.gif`: Background pattern for header
- `/school-photo.jpg`: School building photo
- `/hotline.png`: Emergency hotline information
- `/banner-bg.jpeg`: Banner background image

# External Dependencies

## Core Framework Dependencies
- **Next.js 15.5.5**: React framework for production-grade applications
- **React 19.1.0 & React DOM 19.1.0**: UI library and DOM rendering

## Styling Dependencies
- **Tailwind CSS v4**: Utility-first CSS framework
- **@tailwindcss/postcss v4**: PostCSS plugin for Tailwind processing

## Typography
- **Adorsho Lipi (Bengali Web Font)**: Authentic Bengali font from banglawebfonts.pages.dev

## Development Tools
- **TypeScript v5**: Static type checking
- **@types/node, @types/react, @types/react-dom**: Type definitions for Node.js and React

## External Resources
- **Font Awesome 4.7.0** (via CDN): Icon library for UI elements
- **Jessore Board Links**: Integration with external education board websites for results and student management

## Deployment Platform
**Target**: Vercel or Replit Deployments (optimized for Next.js)

**Rationale**: Both platforms provide seamless Next.js deployment with automatic optimizations, edge functions, and global CDN distribution.

## Website Structure

### Navigation Menu (Fully Functional Pages)
- **প্রথম পাতা (Home)** - `/` - Main landing page with school overview, quick links, and latest news
- **আমাদের বিষয় (About Us)** - `/about` - Detailed school information, history, goals, and institutional details
- **কার্যাবলী (Activities)** - `/activities` - School activities, extracurricular programs, and special events
- **একাডেমিক রেকর্ড (Academic Records)** - `/academic-records` - Academic information, exam schedules, and performance data
- **ফলাফল (Results)** - `/results` - Exam results with links to Jessore Board result portals
- **ফটো (Photos)** - `/photos` - Photo gallery of school events and activities
- **যোগাযোগ (Contact)** - `/contact` - Contact information with Google Maps integration

### External Service Links
- HSC Result-2025
- Student Management System
- Head/Examiner Portal
- OTP System

### Footer Menu Categories
**Column 1**: কমিটি, জনবল, সম্পদ, ভর্তি তথ্যাদি, ভর্তি ফরম, ক্লাস রুটিন, হাজিরা
**Column 2**: সাময়িক পরীক্ষা, টিউটরিয়াল পরীক্ষা, পাবলিক পরীক্ষা, ভর্তি পরীক্ষা, ক্লাব, ছুটি, শিক্ষা পঞ্জিকা
**Column 3**: ছাত্র-ছাত্রী, ছাত্র-ছাত্রীর পরীক্ষার রেকর্ড, একাডেমিক পারফরম্যান্স, বৃত্তি, ছাত্রাবাস, অন্যান্য, নোটিশ বোর্ড

## Notable Absence
The application currently does not use a database or backend API. All content is static and hardcoded in components. Future enhancements may require:
- Database integration (PostgreSQL with Drizzle ORM)
- CMS for dynamic content management (e.g., news, notices, events)
- Authentication system for admin users
- API routes for dynamic data fetching
- Student portal for accessing records
- Online admission system

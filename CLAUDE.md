# Video Streaming Platform Development Guide

## Project Overview
This project is a Netflix-like video streaming platform with modern web technologies.

## Tech Stack
- **Frontend**: React/Next.js with TypeScript
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: Redux Toolkit / Zustand
- **Video Player**: Video.js / Plyr / HLS.js
- **Backend**: Node.js with Express / NestJS
- **Database**: PostgreSQL for metadata, Redis for caching
- **Video Storage**: AWS S3 / CloudFront CDN
- **Authentication**: JWT with refresh tokens

## Project Structure
```
src/
├── components/
│   ├── common/        # Reusable components
│   ├── video/         # Video player components
│   ├── browse/        # Browse/catalog components
│   └── auth/          # Authentication components
├── pages/             # Next.js pages or route components
├── services/          # API services
├── hooks/             # Custom React hooks
├── store/             # State management
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## Key Features Implementation

### Video Player
- Adaptive bitrate streaming (HLS/DASH)
- Multiple quality options
- Subtitles/captions support
- Picture-in-picture mode
- Keyboard shortcuts
- Progress tracking

### Content Management
- Categories and genres
- Search functionality
- Recommendations algorithm
- Continue watching feature
- Watchlist/favorites
- Content metadata (ratings, descriptions)

### Performance Optimization
- Lazy loading for images and components
- Video thumbnail previews on hover
- Infinite scroll for content lists
- CDN integration for media delivery
- Service worker for offline capabilities
- Image optimization (WebP, responsive images)

## Security Best Practices
- Content protection with DRM (Widevine/FairPlay)
- Secure video URLs with signed tokens
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- HTTPS enforcement

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Type check
npm run typecheck
```

## Testing Strategy
- Unit tests for utilities and hooks
- Component testing with React Testing Library
- E2E tests for critical user flows
- Performance testing for video playback
- Load testing for concurrent users

## Deployment Considerations
- Use Docker for containerization
- Implement CI/CD pipeline
- Monitor with tools like Sentry/LogRocket
- Set up analytics (GA4, Mixpanel)
- Configure auto-scaling for traffic spikes
- Implement graceful video fallbacks

## Code Style Guidelines
- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG)
- Optimize for mobile-first design
- Use semantic HTML elements
- Implement proper loading states

## Environment Variables
```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CDN_URL=
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
```

## Common Patterns
- Use custom hooks for data fetching
- Implement debouncing for search
- Use intersection observer for lazy loading
- Cache API responses appropriately
- Handle network errors gracefully
- Implement retry logic for failed requests

## Performance Metrics to Track
- Time to first byte (TTFB)
- First contentful paint (FCP)
- Video start time
- Rebuffering ratio
- Average bitrate
- User engagement metrics
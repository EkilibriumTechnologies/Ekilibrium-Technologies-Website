# Ekilibrium Technologies Website

B2B rental technology company website built with Next.js, TypeScript, and Tailwind CSS. Features bilingual support (English/Spanish) and enterprise-grade design for independent vehicle rental businesses.

## Tech Stack

- **Framework:** Next.js 15.5 (Page Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Form submission endpoint (optional - defaults to /api/submit-lead)
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-handler.com/submit
```

See `.env.example` for reference.

## Routes

- `/` - English homepage
- `/es` - Spanish homepage

Both routes contain identical structure with localized content:
- Hero with rental operations UI
- Rental Operations overview
- Customer Journey timeline
- Solutions showcase
- Street Rental product details
- AI Agents capabilities
- Automation features
- Integrations overview
- Case Study (Jeep Adventures PR)
- Why Ekilibrium
- About/Founder section
- Lead Form (Rental Tech Audit)
- FAQ section

## Localization

The project uses component-level localization:

- **English components:** `src/components/` and `src/components/home/`
- **Spanish components:** `src/components/Header-es.tsx`, `src/components/Footer-es.tsx`, `src/components/home/*-es.tsx`

To add a new language:
1. Create new page route (e.g., `src/pages/fr.tsx`)
2. Duplicate components with new language suffix (e.g., `Header-fr.tsx`)
3. Update language switcher in headers

## Form Integration

The lead form is located in:
- English: `src/components/home/LeadFormSection.tsx`
- Spanish: `src/components/home/LeadFormSection-es.tsx`

### Form Submission

Forms are configured to POST to an endpoint defined by `NEXT_PUBLIC_FORM_ENDPOINT` environment variable (defaults to `/api/submit-lead`).

**To connect your form handler:**

1. Set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`
2. Or implement `/api/submit-lead` endpoint in `src/pages/api/submit-lead.ts`

**Form fields:**
- `name` (required)
- `email` (required, validated)
- `phone` (required)
- `company` (required)
- `fleetSize` (required, select)
- `currentSoftware` (optional)
- `challenge` (required, textarea)

**Response states:**
- Idle: default form state
- Submitting: loading state during POST
- Success: confirmation message displayed
- Error: error message with retry option

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── home/            # Homepage sections (English)
│   ├── Header.tsx       # English navigation
│   ├── Header-es.tsx    # Spanish navigation
│   ├── Footer.tsx       # English footer
│   ├── Footer-es.tsx    # Spanish footer
│   └── SEO.tsx          # SEO meta tags component
├── pages/
│   ├── index.tsx        # English homepage
│   ├── es.tsx           # Spanish homepage
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # HTML document
│   └── api/             # API routes (form handler goes here)
├── styles/
│   └── globals.css      # Global styles + design tokens
└── lib/
    └── utils.ts         # Utility functions

public/
├── Meditative_Metallic_Logo_Design.png  # Company logo
├── og-image.png                         # Social sharing image
└── favicon.ico
```

## Design System

Color tokens defined in `src/styles/globals.css`:
- `--primary`: Deep slate (220 25% 25%)
- `--accent`: Precision teal (190 60% 45%)
- `--muted`: Cool gray (220 15% 92%)
- `--background`: Warm white (40 20% 97%)
- `--foreground`: Near black (220 25% 15%)

**Typography:**
- Headings: Sora (600, 700)
- Body: IBM Plex Sans (400, 500, 600)
- Mono: IBM Plex Mono (400, 500)

## Responsive Breakpoints

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

## External Dependencies

**Required:**
- Next.js, React, TypeScript (core framework)
- Tailwind CSS (styling)
- shadcn/ui + Radix UI (component library)
- Lucide React (icons)
- React Hook Form + Zod (form validation)

**Optional:**
- Form submission service (configure via NEXT_PUBLIC_FORM_ENDPOINT)

## SEO

- Unique page titles and meta descriptions per route
- Proper heading hierarchy (single H1, semantic H2s)
- Alt text on images
- OpenGraph tags for social sharing
- Responsive meta viewport

## Performance

- Next.js automatic code splitting
- Optimized images via Next.js Image component (where applicable)
- Minimal animation (subtle transitions only)
- Tree-shakeable icon imports from Lucide
- Production build optimizations enabled

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Build: `npm run build`
2. Start: `npm start`
3. Serve on port 3000 (configurable via PORT environment variable)

## License

Proprietary - Ekilibrium Technologies

## Support

For questions about the codebase or deployment, refer to Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
# Wind and Fire Church A/G Website

A modern, elegant church website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x with custom OKLCH colors
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Motion v12 (Framer Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner
- **Date handling**: date-fns

## Color Theme

- **Primary (Fire Red)**: `oklch(0.52 0.22 28)` - Deep crimson-red
- **Accent (Wind Blue)**: `oklch(0.56 0.18 250)` - Wind blue
- Full light and dark mode support

## Typography

- **Headings**: Playfair Display (serif) - elegant, reverent feel
- **Body**: Inter (sans-serif) - clean, readable UI text
- Both fonts loaded via Google Fonts

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout with fonts
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles with OKLCH colors
├── components/        # React components
│   └── ui/           # shadcn/ui components
├── lib/              # Utility functions
└── public/           # Static assets
```

## Features

- Responsive design
- Dark mode support
- Accessibility-compliant components
- Optimized for performance
- Type-safe with TypeScript
- Modern animations with Motion
- Form validation with Zod
- Toast notifications with Sonner

## License

Private - Wind and Fire Church A/G

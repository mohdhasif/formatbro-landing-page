# FormatBro

A responsive Next.js App Router landing page for Malaysian onsite PC and laptop software services. Built with TypeScript, Tailwind CSS 4, and Lucide icons. No external services or credentials are needed for local development.

## Development

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open port 3000 locally. `npm run lint`, `npm run typecheck`, and `npm run build` validate the project. `npm start` serves the production build after building.

## Configuration

Edit `src/config/site.ts` for WhatsApp and social URLs. Social URLs set to `null` are hidden; add verified HTTPS URLs for Instagram, Threads, TikTok, or Facebook to show their icons in the CTA and footer. Site copy is in Bahasa Melayu.

Set `NEXT_PUBLIC_SITE_URL` to the actual production origin (for example `https://your-domain.com`) in Vercel before deploying so social metadata resolves to your domain. The local fallback is a reserved example domain, not a claimed live site.

## Vercel

Import this repository in Vercel, choose the Next.js framework preset, and use the repository root. The defaults (`npm run build` and automatic output detection) work without a custom Vercel configuration. Set the production URL variable, then deploy. No database, API key, or server configuration is required.

Booking opens WhatsApp at https://wa.me/601110709875. Location, availability, scope, pricing, and software licensing should be confirmed during booking. The site advertises software services only.

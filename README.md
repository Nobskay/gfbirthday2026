# Happy Birthday, Jihan 🌸

A romantic, responsive birthday website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize it

All editable copy, the birthday date, captions, surprise messages, and photo paths live in **`content.ts`**. Search for markers like `{{LOVE_LETTER_TEXT}}`, `{{SURPRISE_MESSAGE_1}}`, and `{{MIU_MESSAGE}}`.

Replace files in **`public/photos/`** with real photos while keeping the same filenames, or change the paths in `content.ts`. Recommended: optimized JPG/WebP files under 2 MB each. Keep a mix of portrait, landscape, photo-booth, couple, and Miu images.

> The included images are generated gradient placeholders. A code comment in `content.ts` is intentionally unnecessary: the `photos` and `miu.photos` arrays are the single swap point.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and choose **Add New → Project**.
3. Import the GitHub repository.
4. Click **Deploy**. Vercel automatically detects Next.js; no environment variables are required.

## Project structure

```text
app/             App Router, metadata, global styles
components/      Hero, countdown, letter, gallery, surprises, Miu, closing
public/photos/   Replaceable image placeholders
content.ts       All personal content and image paths
tailwind.config.ts  Custom romantic palette and typography
```

## Notes

- The birthday target is `new Date('2026-08-19T00:00:00')` in `content.ts`.
- Motion respects the device's reduced-motion preference.
- Images are rendered with `next/image`.

# Shubham Raj — AI Portfolio

A dark, premium, data-focused personal portfolio built with Next.js 14 (App Router),
TypeScript and Tailwind CSS, with a server-side AI assistant ("Shubham AI")
powered by the OpenAI API.

## What's inside

- `app/` — pages, layout, global styles, and the `/api/chat` route
- `components/` — Navbar, Hero, About, Skills, Experience, Projects, Education,
  Achievements, Contact, Footer, Chatbot
- `lib/portfolio.ts` — the single source of truth for all portfolio content.
  Edit this file to update your info everywhere, including what the AI
  assistant is allowed to answer.
- `public/images/` — placeholder project + profile images (replace with your own)
- `public/resume.pdf` — placeholder resume (replace with your real PDF)

## 1. Install dependencies

```bash
npm install
```

## 2. Add your content

Open `lib/portfolio.ts` and update:
- `profile.email`, `profile.github`, `profile.linkedin`
- Any project, skill, education or experience details

Replace the placeholder files:
- `public/images/profile.jpg`
- `public/images/payment-dashboard.png`
- `public/images/customer-segmentation.png`
- `public/images/sales-dashboard.png`
- `public/images/crime-analysis.png`
- `public/images/coffee-finder.png`
- `public/resume.pdf`

## 3. Add your OpenAI API key

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set:

```
OPENAI_API_KEY=sk-...your-real-key...
```

**Never** rename this to `NEXT_PUBLIC_OPENAI_API_KEY` — that would expose it in
the browser. The key is only ever read inside `app/api/chat/route.ts`, which
runs on the server.

If `OPENAI_API_KEY` is missing, the site still works — the chatbot will just
reply that it isn't fully configured yet, instead of crashing.

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Build for production

```bash
npm run build
npm run start
```

## 6. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Shubham Raj AI portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shubham-ai-portfolio.git
git push -u origin main
```

## 7. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly at https://vercel.com/new.

## 8. Add the API key to Vercel

In the Vercel dashboard: **Project → Settings → Environment Variables**, add:

- Key: `OPENAI_API_KEY`
- Value: your real OpenAI key
- Environment: Production (and Preview if you want the assistant to work on preview deployments)

Then redeploy:

```bash
vercel --prod
```

## Notes

- The assistant only answers from `lib/portfolio.ts` — it's instructed to say
  *"That information is not listed in Shubham's portfolio."* for anything
  outside that data, so it never invents details about you.
- Colors, type and layout tokens live in `tailwind.config.ts` and
  `app/globals.css` if you want to restyle.

# Parwaaz (پرواز)

**Parwaaz** ("flight" in Urdu) connects Pakistani women with jobs, scholarships, fellowships and learning opportunities.

Users build a profile from their skills, interests and education, get personalised opportunity recommendations, and can upload a resume for AI-powered skill-gap analysis with suggested learning paths.

🌐 **Live site:** [parwaaz-pk.vercel.app](https://parwaaz-pk.vercel.app)

> 🚧 **Status:** in active development (v1).

## Features (v1)

- [ ] Sign up / sign in (email and Google)
- [ ] Profile onboarding: skills, interests, education, city
- [ ] Browse opportunities with filters (type, location, remote)
- [ ] Personalised recommendations using tag-based matching
- [ ] Save opportunities, sorted by deadline
- [ ] Resume upload (PDF)
- [ ] AI skill-gap analysis and learning-path suggestions

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) + TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Database, auth, storage | [Supabase](https://supabase.com/) (PostgreSQL) |
| AI | [Claude API](https://docs.claude.com/) |
| Hosting | [Vercel](https://vercel.com/) |

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Every push to `main` deploys automatically to Vercel.

## How recommendations work

Each opportunity is tagged (e.g. `software`, `bachelors`, `remote`, `lahore`). A user's profile produces a matching set of tags from their skills, interests, education level and city. Opportunities are scored by tag overlap, with expired deadlines filtered out, and shown highest score first, each with a short "why this matches you" explanation.

## Database

The schema is in [`supabase/schema.sql`](supabase/schema.sql):

- `profiles`: one row per user (skills, interests, education)
- `opportunities`: jobs, scholarships, fellowships and courses
- `saved_opportunities`: user bookmarks
- `resume_analyses`: results of AI resume analysis

Row Level Security is enabled on every table, so users can only read and change their own profile, bookmarks and resume data. Profiles are private by default.

## Roadmap

- Urdu language support
- Admin dashboard for adding opportunities
- Email reminders before deadlines
- Partner organisations posting opportunities directly

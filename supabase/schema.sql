-- Parwaaz database schema
-- Run this in the Supabase dashboard: SQL Editor → New query → paste → Run.

-- ============================================================
-- Profiles: one row per user, linked to Supabase Auth
-- ============================================================
create table public.profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  full_name       text,
  city            text,
  education_level text check (education_level in (
                    'matric', 'intermediate', 'bachelors', 'masters', 'phd', 'other'
                  )),
  field_of_study  text,
  skills          text[] not null default '{}',
  interests       text[] not null default '{}',
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ============================================================
-- Opportunities: jobs, scholarships, fellowships, courses
-- ============================================================
create table public.opportunities (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  type          text not null check (type in ('job', 'scholarship', 'fellowship', 'course')),
  organisation  text not null,
  description   text,
  tags          text[] not null default '{}',
  location      text,
  is_remote     boolean not null default false,
  deadline      date,
  url           text not null,
  created_at    timestamptz not null default now()
);

-- Speeds up tag matching for recommendations
create index opportunities_tags_idx on public.opportunities using gin (tags);
create index opportunities_deadline_idx on public.opportunities (deadline);

-- ============================================================
-- Saved opportunities (bookmarks)
-- ============================================================
create table public.saved_opportunities (
  user_id        uuid not null references auth.users (id) on delete cascade,
  opportunity_id uuid not null references public.opportunities (id) on delete cascade,
  created_at     timestamptz not null default now(),
  primary key (user_id, opportunity_id)
);

-- ============================================================
-- Resume analyses: results of AI skill-gap analysis
-- ============================================================
create table public.resume_analyses (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  file_path        text not null,           -- path in the private "resumes" storage bucket
  extracted_skills text[] not null default '{}',
  missing_skills   text[] not null default '{}',
  learning_path    jsonb,                   -- [{ skill, resource_title, resource_url }]
  created_at       timestamptz not null default now()
);

-- ============================================================
-- Row Level Security: users can only see and change their own data
-- ============================================================
alter table public.profiles            enable row level security;
alter table public.opportunities       enable row level security;
alter table public.saved_opportunities enable row level security;
alter table public.resume_analyses     enable row level security;

-- Profiles: private to their owner
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "Users can create own profile"
  on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Opportunities: anyone can read; only admins (via the dashboard) can write
create policy "Opportunities are public"
  on public.opportunities for select using (true);

-- Saved opportunities: private to their owner
create policy "Users can view own saved"
  on public.saved_opportunities for select using (auth.uid() = user_id);
create policy "Users can save"
  on public.saved_opportunities for insert with check (auth.uid() = user_id);
create policy "Users can unsave"
  on public.saved_opportunities for delete using (auth.uid() = user_id);

-- Resume analyses: private to their owner
create policy "Users can view own analyses"
  on public.resume_analyses for select using (auth.uid() = user_id);
create policy "Users can create own analyses"
  on public.resume_analyses for insert with check (auth.uid() = user_id);
create policy "Users can delete own analyses"
  on public.resume_analyses for delete using (auth.uid() = user_id);

-- ============================================================
-- Keep profiles.updated_at current
-- ============================================================
create function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Run this in the Supabase SQL editor for your project.
-- Creates `contact_messages` and `insights` tables with RLS policies:
--   - insights: public can SELECT only.
--   - contact_messages: public can INSERT only (no select/update/delete).

-- ============================================================
-- contact_messages
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Public (anon) can insert new messages, and nothing else.
create policy "contact_messages_public_insert"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Explicitly, no select/update/delete policies are created for anon or
-- authenticated roles, so those operations are denied by default under RLS.
-- Read access is reserved for the Supabase dashboard / service role key.

-- ============================================================
-- insights
-- ============================================================
create table if not exists public.insights (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (char_length(slug) between 1 and 200),
  title text not null check (char_length(title) between 1 and 300),
  excerpt text not null check (char_length(excerpt) between 1 and 500),
  body text not null,
  published_at timestamptz
);

alter table public.insights enable row level security;

-- Public can read only published insights.
create policy "insights_public_read_published"
  on public.insights
  for select
  to anon
  using (published_at is not null and published_at <= now());

-- Writes (insert/update/delete) are intentionally left to the service
-- role / Supabase dashboard — no public write policy is created here.

create index if not exists insights_published_at_idx
  on public.insights (published_at desc);

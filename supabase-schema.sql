-- Supabase Schema for WolfxFilms Leads Table

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone_or_handle text,
  package_tier text,
  message text,
  language text default 'en',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Policy to allow anonymous visitor insert
create policy "Allow anonymous inserts to leads"
on public.leads
for insert
to anon
with check (true);

-- Policy to allow authenticated admin users to read leads
create policy "Allow authenticated users to read leads"
on public.leads
for select
to authenticated
using (true);

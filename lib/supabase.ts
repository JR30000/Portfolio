import { createClient } from "@supabase/supabase-js";

// Public (anon-key) Supabase client. Safe to use in both server and client
// components — access is enforced entirely through RLS policies (see
// supabase/schema.sql), never by keeping this key secret.
//
// Values come from env vars only; never hardcode credentials here.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Falls back to a syntactically valid placeholder so builds (and pages
  // that don't actually query Supabase) don't hard-fail when env vars
  // aren't configured yet. Any real query will fail at runtime instead —
  // callers already handle that `error` case.
  console.warn(
    "Supabase env vars are not set. Add NEXT_PUBLIC_SUPABASE_URL and " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local (see .env.example)."
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);

export type Insight = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  published_at: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

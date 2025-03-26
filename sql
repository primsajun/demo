create table public.achievements (
  id uuid not null default extensions.uuid_generate_v4 (),
  player_id uuid null,
  title text not null,
  tournament text null,
  date timestamp with time zone null default now(),
  description text null,
  created_at timestamp with time zone null default now(),
  constraint achievements_pkey primary key (id),
  constraint achievements_player_id_fkey foreign KEY (player_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.approval_audit_logs (
  id uuid not null default extensions.uuid_generate_v4 (),
  player_id uuid null,
  admin_id uuid null,
  action text not null,
  comments text null,
  timestamp timestamp with time zone null default now(),
  created_at timestamp with time zone null default now(),
  constraint approval_audit_logs_pkey primary key (id),
  constraint approval_audit_logs_admin_id_fkey foreign KEY (admin_id) references auth.users (id),
  constraint approval_audit_logs_player_id_fkey foreign KEY (player_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.match_events (
  id uuid not null default extensions.uuid_generate_v4 (),
  match_id uuid null,
  player_id uuid null,
  event_type text not null,
  minute integer not null,
  timestamp timestamp with time zone null default now(),
  created_at timestamp with time zone null default now(),
  constraint match_events_pkey primary key (id),
  constraint match_events_match_id_fkey foreign KEY (match_id) references matches (id) on delete CASCADE,
  constraint match_events_player_id_fkey foreign KEY (player_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.match_history (
  id uuid not null default extensions.uuid_generate_v4 (),
  player_id uuid null,
  tournament text null,
  opponent text null,
  result text null,
  date timestamp with time zone null default now(),
  goals integer null default 0,
  created_at timestamp with time zone null default now(),
  constraint match_history_pkey primary key (id),
  constraint match_history_player_id_fkey foreign KEY (player_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.matches (
  id uuid not null default extensions.uuid_generate_v4 (),
  score_team_b bigint not null,
  date date not null,
  team_b text not null,
  tournament_id uuid not null,
  result text null,
  created_at timestamp with time zone null default now(),
  score_team_a bigint null,
  venue text not null,
  team_a text null,
  status text null,
  teams text not null,
  score bigint null,
  action text null,
  time time without time zone null,
  constraint matches_pkey primary key (id),
  constraint matches_tournament_id_fkey foreign KEY (tournament_id) references tournaments (id)
) TABLESPACE pg_default;

create table public.otp_sessions (
  id uuid not null default extensions.uuid_generate_v4 (),
  session_id text not null,
  phone text null,
  aadhar text null,
  otp text not null,
  type text not null,
  created_at timestamp with time zone null default now(),
  expires_at timestamp with time zone not null,
  verified boolean null default false,
  verified_at timestamp with time zone null,
  constraint otp_sessions_pkey primary key (id),
  constraint otp_sessions_session_id_key unique (session_id)
) TABLESPACE pg_default;

create table public.player_approvals (
  id uuid not null,
  player_id uuid null,
  name text not null,
  email text not null,
  phone text not null,
  aadhar text not null,
  status text not null default 'pending'::text,
  submitted_at timestamp with time zone null default now(),
  reviewed_at timestamp with time zone null,
  reviewed_by uuid null,
  comments text null,
  created_at timestamp with time zone null default now(),
  constraint player_approvals_pkey primary key (id),
  constraint player_approvals_player_id_fkey foreign KEY (player_id) references auth.users (id) on delete CASCADE,
  constraint player_approvals_reviewed_by_fkey foreign KEY (reviewed_by) references auth.users (id)
) TABLESPACE pg_default;

create table public.players (
  id uuid not null default gen_random_uuid (),
  name text not null,
  position text not null,
  team text not null,
  age integer null,
  nationality text not null,
  jersey_number integer null,
  created_at timestamp without time zone null default now(),
  constraint players_pkey1 primary key (id),
  constraint players_age_check1 check ((age > 0)),
  constraint players_jersey_number_check1 check ((jersey_number > 0))
) TABLESPACE pg_default;

create table public.profiles (
  id uuid not null default extensions.uuid_generate_v4 (),
  name text not null,
  email text not null,
  phone text null,
  aadhar text null,
  user_type text not null default 'player'::text,
  status text not null default 'pending'::text,
  created_at timestamp with time zone null default now(),
  user_id uuid null,
  position text null,
  jersey_number bigint null,
  age bigint null,
  nationality text null,
  team text null,
  joined_date date null,
  constraint profiles_pkey primary key (id),
  constraint profiles_aadhar_key unique (aadhar),
  constraint profiles_email_key unique (email),
  constraint profiles_phone_key unique (phone),
  constraint profiles_user_id_fkey foreign KEY (user_id) references auth.users (id)
) TABLESPACE pg_default;

create table public.tournaments (
  id uuid not null default extensions.uuid_generate_v4 (),
  name text not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  status text not null default 'upcoming'::text,
  created_by uuid null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  location text not null,
  description text null,
  constraint tournaments_pkey primary key (id),
  constraint tournaments_created_by_fkey foreign KEY (created_by) references auth.users (id)
) TABLESPACE pg_default;

create index IF not exists tournaments_status_idx on public.tournaments using btree (status) TABLESPACE pg_default;

create index IF not exists tournaments_start_date_idx on public.tournaments using btree (start_date) TABLESPACE pg_default;

create table public.verification_audit (
  id uuid not null default extensions.uuid_generate_v4 (),
  session_id text not null,
  phone text null,
  aadhar text null,
  type text not null,
  verified_at timestamp with time zone null default now(),
  ip_address text null,
  created_at timestamp with time zone null default now(),
  constraint verification_audit_pkey primary key (id)
) TABLESPACE pg_default;

create table public.verification_logs (
  id uuid not null default extensions.uuid_generate_v4 (),
  user_email text not null,
  phone text null,
  aadhar text null,
  verification_type text not null,
  verified boolean null default false,
  verification_time timestamp with time zone null default now(),
  created_at timestamp with time zone null default now(),
  constraint verification_logs_pkey primary key (id)
) TABLESPACE pg_default;

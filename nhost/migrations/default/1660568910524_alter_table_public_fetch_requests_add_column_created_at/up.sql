alter table "public"."fetch_requests" add column "created_at" timestamptz
 null default now();

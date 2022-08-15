CREATE TABLE "public"."fetch_requests" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "page" integer NOT NULL DEFAULT 1, "all" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;

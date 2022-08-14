CREATE TABLE "public"."vacancies" (
    "id" integer NOT NULL,
    "title" text NOT NULL,
    "category" text NOT NULL,
    "agency" text NOT NULL,
    "salary" text NOT NULL,
    "posted" date,
    "job_type" text,
    "closing_date" date,
    "staff_group" text NOT NULL,
    "job_ref" text NOT NULL,
    PRIMARY KEY ("id")
);


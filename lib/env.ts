import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  DIRECT_URL: z.string().min(1),
  AUTH_SECRET: z.string().min(1),
  AUTH_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string().min(1).optional(),
  GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),
  GOOGLE_CALENDAR_SYNC_WINDOW_DAYS: z.coerce.number().int().positive().default(7),
  GOOGLE_GMAIL_CONTEXT_ENABLED: z.enum(["true", "false"]).default("false"),
  OPENAI_API_KEY: z.string().min(1).optional(),
  OPENAI_MODEL_ASSISTANT: z.string().min(1).default("gpt-4o"),
  OPENAI_MODEL_ASSISTANT_FALLBACK: z.string().min(1).default("gpt-4o-mini"),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_FLAG_DEMO_MODE: z.enum(["true", "false"]).default("false")
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success && process.env.NODE_ENV === "development") {
  console.error("Invalid environment configuration", parsedEnv.error.flatten().fieldErrors);
}

export const env = parsedEnv.success ? parsedEnv.data : null;

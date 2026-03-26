import { z } from "zod";

export const googleSyncRequestSchema = z.object({
  force: z.boolean().default(false)
});

export type GoogleSyncRequest = z.infer<typeof googleSyncRequestSchema>;

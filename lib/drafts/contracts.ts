import { z } from "zod";

export const createDraftSchema = z.object({
  sourceSessionId: z.string().cuid().optional(),
  agendaItemId: z.string().cuid().optional(),
  subject: z.string().min(1).max(240),
  body: z.string().min(1).max(12000)
});

export type CreateDraftInput = z.infer<typeof createDraftSchema>;

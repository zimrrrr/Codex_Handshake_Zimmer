import { z } from "zod";

export const assistantMessageRoleSchema = z.enum(["user", "assistant", "system"]);

export const assistantMessageSchema = z.object({
  role: assistantMessageRoleSchema,
  content: z.string().min(1).max(8000)
});

export const assistantRequestSchema = z.object({
  contextItemId: z.string().cuid().optional(),
  messages: z.array(assistantMessageSchema).min(1)
});

export const assistantResponseSchema = z.object({
  suggestions: z.array(z.string()),
  draftSubject: z.string().optional(),
  draftBody: z.string().optional()
});

export type AssistantRequest = z.infer<typeof assistantRequestSchema>;
export type AssistantResponse = z.infer<typeof assistantResponseSchema>;

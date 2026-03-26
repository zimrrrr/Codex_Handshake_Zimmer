import { z } from "zod";

export const agendaCategorySchema = z.enum([
  "SCHOOL",
  "WORK",
  "PROJECTS",
  "UNCATEGORIZED"
]);

export const agendaItemTypeSchema = z.enum(["TASK", "EVENT"]);

export const agendaItemSourceSchema = z.enum(["APP", "GOOGLE_CALENDAR", "DEMO"]);

export const agendaListQuerySchema = z.object({
  category: agendaCategorySchema.optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional()
});

export const createTaskSchema = z.object({
  title: z.string().min(1).max(140),
  notes: z.string().max(4000).optional(),
  category: agendaCategorySchema.default("UNCATEGORIZED"),
  dueAt: z.string().datetime().optional()
});

export const updateTaskSchema = createTaskSchema.partial().extend({
  id: z.string().cuid()
});

export type AgendaListQuery = z.infer<typeof agendaListQuerySchema>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;

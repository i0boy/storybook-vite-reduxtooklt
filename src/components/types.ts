import { z } from "zod";
export const TaskItem = z.object({
  id: z.string(),
  title: z.string(),
  state: z.string(),
});
export type TaskItem = z.infer<typeof TaskItem>;
export const TaskItems = z.array(TaskItem);

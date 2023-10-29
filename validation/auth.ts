import { z } from 'zod';

export const survaySchema = z.object({
  room: z.number().min(1).max(4),
  name: z.string().min(3).max(10),
  food: z.string().min(3).max(50),
});

import { z } from 'zod';

export const survaySchema = z.object({
  room: z.string().min(1, { message: 'enter your room number' }).max(4),
  name: z.string().min(3, { message: 'enter your name!!' }).max(10),
  food: z.string().min(3, { message: 'enter your food name' }).max(50),
  quality: z.string({ description: 'select your quality' }),
});

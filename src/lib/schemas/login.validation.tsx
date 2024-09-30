import { z } from "zod";

export const formLoginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(10),
});
export const formRegisterSchema = z.object({
  username: z.string().min(2).max(10),
  email: z.string().min(2).max(50),
  phone_number: z.string().min(2).max(10),
  address: z.string().min(2).max(10),
  password: z.string().min(2).max(10),
  confirm_pass: z.string().min(2).max(10),
});

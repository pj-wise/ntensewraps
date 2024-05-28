import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(6, { message: "Phone Number must be at least 6 characters" }),
  message: z.string(),
});

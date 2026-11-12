import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(254, "Email cannot exceed 254 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone cannot exceed 30 characters.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject cannot exceed 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message cannot exceed 5000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function normalizePhone(phone?: string) {
  if (!phone) return "";
  return phone.replace(/\D/g, "");
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}
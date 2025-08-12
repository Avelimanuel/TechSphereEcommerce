import { z } from "zod";
import { formatNumbersWithDecimalPoints } from "./utils";

//Schema for inserting product

const currency =  z
    .string()
    .refine(
      (value) =>
        /^\d+(\.\d{2})?ksh/.test(formatNumbersWithDecimalPoints(Number(value))),
      "Price must have exactly 2 decimal places"
    )

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  slug: z.string().min(3, "Slug must be atleast 3 characters"),
  category: z.string().min(3, "Category must be atleast 3 characters"),
  brand: z.string().min(3, "Brand must be atleast 3 characters"),
  description: z.string().min(3, "Description must be atleast 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(2, "Product must have atleast 2 images"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price:currency,
});

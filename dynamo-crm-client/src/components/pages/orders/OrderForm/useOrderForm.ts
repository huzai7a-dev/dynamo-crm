import { z } from "zod";

const DigitizePropertiesSchema = z.object({
  digitize_type: z.enum([
    "hat_logo",
    "left_chest",
    "middle_left_chest",
    "jacket_bag",
  ]),
  height: z.union([z.string(), z.number()]),
  width: z.union([z.string(), z.number()]),
  fabric: z.string(),
  placement: z.string(),
});

const orderValidationSchema = z
  .object({
    order_name: z.string(),
    order_type: z.enum(["digitizing", "vector"]),
    number_of_colors: z.union([z.string(), z.number()]),
    gradient: z.boolean().optional().default(false),
    rush: z.boolean().optional().default(false),
    additional_instruction: z.string().optional(),
    digitize_properties: DigitizePropertiesSchema.optional(),
    created_at: z
      .date()
      .optional()
      .default(() => new Date()),
    updated_at: z
      .date()
      .optional()
      .default(() => new Date()),
  })
  .refine(
    (data) => {
      if (data.order_type === "digitizing" && !data.digitize_properties) {
        return false;
      }
      return true;
    },
    {
      message:
        "digitize_properties is required when order_type is 'digitizing'",
      path: ["digitize_properties"],
    }
  );

export { orderValidationSchema };

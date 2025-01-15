"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

interface Form {
  errors: {
    [field: string]: string[] | null;
  } | null;
}

interface FormDataExtended extends FormData {
  get(fieldName: "id" | "name"): string | File | null;
}

const id = z
  .string({
    required_error: "ID is required",
    invalid_type_error: "Invalid ID",
  })
  .refine((val) => val.trim().length > 0, {
    message: "Please enter at least one character",
  });

const schema = z.object({
  id,
});

export default async function submit(
  prev: Form | undefined,
  formData: FormDataExtended
) {
  const validatedFields = schema.safeParse({
    id: formData.get("id"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  let shouldRedirect = false;

  try {
    shouldRedirect = true;

    await sleep(3000);
  } catch (err) {
    return { errors: null };
  }

  if (shouldRedirect) {
    // redirect("/home");
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

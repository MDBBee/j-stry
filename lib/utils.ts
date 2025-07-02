import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any): string {
  // console.log("Error FROM LIB/UTILS REMEMBER TO CLEANUP:", error);

  if (error.name === "ZodError") {
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    );

    return fieldErrors.join(". ");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    const field = error.meta?.target ? error.meta.target[0] : "Field";
    return `${field.ch}arAt(0).toUpperCase() + field.slice(1)} already exists. Please choose a different value.`;
  } else {
    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message, null, 2);
  }
}

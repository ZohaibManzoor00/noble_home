"use server";

import { redirect } from "next/navigation";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.includes("@")) {
    redirect("/?subscribed=error#newsletter");
  }

  // TODO: integrate with mailing list provider (Resend, ConvertKit, etc.)
  // For now we just acknowledge the submission.
  await new Promise((resolve) => setTimeout(resolve, 200));

  redirect("/?subscribed=ok#newsletter");
}

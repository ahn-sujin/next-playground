"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  // 예외 처리
  if (!content || !author || !bookId) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );
    console.log(response.status);
    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}

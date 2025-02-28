"use server";

import { revalidatePath } from "next/cache";

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
    {
      /*
      revalidatePath : 해당 페이지(경로)를 재검증한다. 즉, 다시 생성한다.
      [주의할점]
      1. 오직 서버측에서만 호출할 수 있다. (클라이언트 컴포넌트에서는 호출 X)
      2. 해당 페이지 전체가 재생성되기 때문에 페이제 있는 캐시도 무효화 시킨다.
      3. 풀라우트 캐시까지 삭제(무효화)하기만 할 뿐, 새롭게 생성된 페이지를 다시 풀라우트 캐시에 저장하진 않는다. 
        -> 새로 고침하거나, 재접속 했을 때 다이나믹 페이지처럼 실시간으로 생성이되고 그때서야 풀라우트 캐시에도 데이터가 업데이트 된다.
    */
    }
    revalidatePath(`/book/${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}

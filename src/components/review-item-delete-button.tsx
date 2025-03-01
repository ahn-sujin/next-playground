"use client";

import { useActionState, useEffect, useRef } from "react";
import { deleteReviewAction } from "@/actions/delete-review.action";

export default function ReviewItemDeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: number;
  bookId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} readOnly hidden />
      <input name="bookId" value={bookId} readOnly hidden />
      {/* requestSubmit() : 그냥 submit() 보다 비교적 안전하게 동작한다. (submit은 유효성 검사, 이벤트 핸들러를 무시하고 강제로 제출한다.) */}
      {isPending ? (
        "..."
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>삭제하기</div>
      )}
    </form>
  );
}

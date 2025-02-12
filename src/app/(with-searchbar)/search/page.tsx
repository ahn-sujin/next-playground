import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  // 검색 도서
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${
      (
        await searchParams
      ).q
    }`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다</div>;
  }
  const searchBooks: BookData[] = await response.json();

  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default async function Home() {
  const data = await getLargeData();
  return (
    <main>
      <h1>메모리 누수 테스트</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

// ⚠️ 서버 컴포넌트 캐시를 계속 생성 (고의로 비효율적 구현)
const getLargeData = async () => {
  // 1000개의 더미 데이터 생성
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`,
    createdAt: new Date().toISOString(),
  }));

  // 매 요청마다 새로운 cache 객체 생성 → 메모리 증가 원인
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store", // 항상 fresh 요청
    cache: "force-cache", // 캐시 사용
  });

  await res.json(); // 데이터는 사용하지 않음 (낭비)

  return largeArray;
};

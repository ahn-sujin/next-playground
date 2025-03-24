/**
 * 딜레이 함수
 * @param ms 딜레이 시간
 */
export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}

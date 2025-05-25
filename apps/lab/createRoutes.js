import { readdirSync, statSync, writeFileSync } from "fs";
import { join, relative } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 기준 디렉토리 설정
const currentDir = __dirname;
const appDirectory = join(currentDir, "src", "app");
const constantFilePath = join(currentDir, "src", "lib", "routes.ts");

// 그룹 라우팅 제거, 다이나믹 라우팅 처리
function cleanPath(filePath) {
  const cleanedPath = relative(appDirectory, filePath)
    .replace(/\/page\.tsx$/, "") // page.tsx 제거
    .replace(/\(.*?\)/g, "") // 그룹 라우팅 제거
    .replace(/\[.*?\]/g, ":param") // 다이나믹 라우팅 처리 (예: [id] → :param)
    .replace(/\/+/g, "/"); // 중복된 슬래시 제거

  return cleanedPath.startsWith("/") ? cleanedPath : "/" + cleanedPath;
}

// 상수 이름 생성 (특수문자 제거, 대문자화)
function toConstName(path) {
  const constName = path
    .toUpperCase()
    .replace(/\//g, "_")
    .replace(/[^A-Z0-9_]/g, "") // 문자, 숫자, 언더스코어 외 제거
    .replace(/^_+|_+$/g, ""); // 앞뒤 언더스코어 제거

  return `${constName}_PATHNAME`;
}

// 재귀적으로 모든 page.tsx 파일 탐색
function findPageFiles(dir) {
  const entries = readdirSync(dir);
  let pageFiles = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      pageFiles = pageFiles.concat(findPageFiles(fullPath));
    } else if (entry === "page.tsx") {
      pageFiles.push(fullPath);
    }
  }

  return pageFiles;
}

// 실행 로직
const pageFiles = findPageFiles(appDirectory);

const routes = pageFiles.map((filePath) => {
  const path = cleanPath(filePath);
  const constName = toConstName(path);
  return `export const ${constName} = "${path}";`;
});

writeFileSync(constantFilePath, routes.join("\n") + "\n", "utf-8");

console.log(`✅ routes.ts 파일이 생성되었습니다: ${constantFilePath}`);

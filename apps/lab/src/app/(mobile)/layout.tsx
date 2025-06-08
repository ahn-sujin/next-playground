import Header from "@/components/layouts/Header";
import NavigationBar from "@/components/layouts/NavigationBar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header
        left={
          <>
            <Link href="/">홈</Link>
          </>
        }
        center="titletitletitletitletitletitletitletitle"
        right={
          <>
            <Link href="/">마이</Link>
            <Link href="/">마이</Link>
            <Link href="/">마이</Link>
          </>
        }
      /> */}
      {children}
      <NavigationBar />
    </>
  );
}

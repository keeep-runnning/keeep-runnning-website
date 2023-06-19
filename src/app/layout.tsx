import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Keeep Runnning",
  description: "Keeep Runnning's website",
};

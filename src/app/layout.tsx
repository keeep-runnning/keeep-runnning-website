import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className={pretendard.className}>
        <div className="px-5 py-4 max-w-screen-lg mx-auto flex flex-col gap-y-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Keeep Runnning",
  description: "Keeep Runnning's website",
};

import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "./providers";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.className} bg-stone-100 text-stone-950 dark:bg-stone-900 dark:text-stone-50`}
      >
        <div className="mx-auto flex max-w-screen-lg flex-col gap-y-4 px-5">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Keeep Runnning",
  description: "Keeep Runnning's website",
};

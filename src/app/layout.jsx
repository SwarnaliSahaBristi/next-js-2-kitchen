import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "./context/CartProvider";
import Main from "./components/Main";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight:["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: 'RannaGhor',
    template: '%s | RannaGhor',
  },
  description: "Best Fast Food In Narayanganj",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="px-5 flex items-center justify-between gap-5 bg-stone-800">
          <Link href="/">
            {/* <img src="/logo.webp" className="w-[100px]" alt=""/>
             */}
             <Image width={100} height={20} src="/logo.webp" className="w-[100px]" alt=""/>
          </Link>

          <div className="space-x-5">
            <Link prefetch={false} className="btn" href="/foods">
              Food
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
          </div>
        </header>
        <main className="px-5 py-8">
          <Main>{children}</Main>
        </main>
      </body>
    </html>
  );
}

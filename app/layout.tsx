import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leggit",
  description: "A brief look at some of the things I've been up to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"" + "dark " + inter.className}>
        <div className="px-2 md:px-2 lg:px-4 max-w-[1400px] xl:m-auto">
          <Navbar />
          <div className="my-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

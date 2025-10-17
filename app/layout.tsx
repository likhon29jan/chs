import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-bengali",
});

export const metadata: Metadata = {
  title: "Chalishia High School - চলিশীয়া মাধ্যমিক বিদ্যালয়",
  description: "Chalishia High School, Jessore - EIIN: 115498",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`${notoSansBengali.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

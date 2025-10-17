import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "চলিশীয়া উচ্চ বিদ্যালয় | Chalishia High School - EIIN: 115498",
  description: "চলিশীয়া উচ্চ বিদ্যালয় (Chalishia High School) - বেসরকারি মাধ্যমিক বিদ্যালয়, EIIN: 115498, যশোর জেলা, অভয়নগর উপজেলা, চলিশীয়া ইউনিয়ন। যশোর শিক্ষা বোর্ড অধীনস্থ।",
  keywords: [
    "চলিশীয়া উচ্চ বিদ্যালয়",
    "Chalishia High School",
    "EIIN 115498",
    "যশোর জেলা স্কুল",
    "অভয়নগর উপজেলা স্কুল",
    "চলিশীয়া স্কুল",
    "Jessore Board School",
    "Bangladesh School",
  ],
  authors: [{ name: "Chalishia High School" }],
  openGraph: {
    title: "চলিশীয়া উচ্চ বিদ্যালয় | Chalishia High School",
    description: "বেসরকারি মাধ্যমিক বিদ্যালয় - EIIN: 115498, যশোর জেলা",
    type: "website",
    locale: "bn_BD",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://banglawebfonts.pages.dev/fonts/adorsho-lipi/adorsho-lipi-regular.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://banglawebfonts.pages.dev/css/adorsho-lipi.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

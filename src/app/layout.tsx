import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Emre FIT Club | Çayırova Spor Salonu",
  description: "2018'den beri Çayırova'da profesyonel spor salonu. Modern ekipmanlar, kadınlara özel grup dersleri, kişisel antrenman ve beslenme danışmanlığı.",
  keywords: "spor salonu, fitness, gym, çayırova, kocaeli, pilates, yoga, kişisel antrenman",
  authors: [{ name: "Emre FIT Club" }],
  openGraph: {
    title: "Emre FIT Club | Çayırova Spor Salonu",
    description: "2018'den beri Çayırova'da profesyonel spor salonu. Modern ekipmanlar, kadınlara özel grup dersleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Tangerine } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-tangerine',
});


export const metadata: Metadata = {
  title: "Nuray Atay",
  description: "Nuray Atay's Website created by Quarkend",
  keywords: ['Nuray Atay', 'Nuray Atay Güzellik Merkezi', 'İstanbul Güzellik Merkezi', 'Cilt Bakımı İstanbul', 'Hydrafacial İstanbul', 'Kalıcı Makyaj İstanbul', 'Microblading İstanbul', 'İpek Kirpik İstanbul', 'Lazer Epilasyon İstanbul', 'Bölgesel İncelme İstanbul', 'Protez Tırnak İstanbul', 'Dermapen İstanbul', 'Nuray Atay',
    'Nuray Atay Güzellik Merkezi',
    'İstanbul Güzellik Merkezi',
    'İstanbul Güzellik Salonu',
    'Cilt Bakımı İstanbul',
    'Hydrafacial İstanbul',
    'Kalıcı Makyaj İstanbul',
    'Microblading İstanbul',
    'İpek Kirpik İstanbul',
    'Kirpik Lifting İstanbul',
    'Lazer Epilasyon İstanbul',
    'Bölgesel İncelme İstanbul',
    'Protez Tırnak İstanbul',
    'Manikür Pedikür İstanbul',
    'Dermapen İstanbul',
    'Bölgesel Zayıflama',
    'G5 Masajı İstanbul',
    'Cilt Yenileme',
    'Güzellik Hizmetleri İstanbul',
    'Popüler Güzellik Salonları',
    'Acısız Lazer Epilasyon',
  ],
  robots: 'index, follow',
  authors: [
    {name: "M.Eren Yılmaz"},
    {name: "Quarkend Team", url: "https://quarkend.com"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{scrollBehavior: "smooth"}}>
      <head>
        <meta property="og:title" content="Nuray Atay"/>
        <meta property="og:description" content="The Nuray Atay's Website created by Quarkend"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://nurayatayluxurybeauty.com"/>
        <meta property="og:site_name" content="https://nurayatayluxurybeauty.com"/>
        <meta property="og:locale" content="tr_TR"/>
        <meta property="og:image" content="https://nurayatayluxurybeauty.com"/>
        <meta property="og:image:alt" content="Nuray Atay Image"/>
      </head>
      <body className={`${inter.className} ${tangerine.variable}`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

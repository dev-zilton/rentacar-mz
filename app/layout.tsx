import type { Metadata } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transporte&Logística K&K | Aluguer de Viaturas Premium",
  description:
    "Aluguer de carros premium em Maputo, Beira e Nampula. Reserve já a sua viatura com a Transporte&Logística K&K, pagamento em Metical (MT).",
  keywords:
    "aluguer de carros Moçambique, rent a car Maputo, aluguer de viaturas, carros de aluguer Beira, Transporte Logistica KK",
  openGraph: {
    title: "Transporte&Logística K&K | Aluguer de Viaturas Premium",
    description:
      "Aluguer de carros premium em Maputo e principais cidades de Moçambique",
    type: "website",
    locale: "pt_MZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('elite-car-rentals-theme'); if(t==='dark'){document.documentElement.classList.add('dark');} else {document.documentElement.classList.remove('dark');}}catch(e){} })()`,
          }}
        />
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

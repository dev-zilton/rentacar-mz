import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-MZ">
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

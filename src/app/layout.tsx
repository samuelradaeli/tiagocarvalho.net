import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const GTM_ID = "GTM-55C4ML7Q";

export const metadata: Metadata = {
  title: "Tiago Carvalho | Curso de Desenvolvimento Pessoal",
  description:
    "Você sente que tem algo errado, mas já se acostumou a funcionar quebrado. Retome o controle com 52 aulas práticas. 600+ participantes anteriores.",
  keywords: [
    "desenvolvimento pessoal",
    "ansiedade",
    "procrastinação",
    "autoconhecimento",
    "tiago carvalho",
    "curso online",
  ],
  openGraph: {
    title: "Tiago Carvalho | Retome o Controle da Sua Vida",
    description:
      "Isso não é um curso, é um mapa de saída. 52 aulas práticas para retomar o controle.",
    type: "website",
    locale: "pt_BR",
    url: "https://tiagocarvalho.net",
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
    <html lang="pt-BR" className="scroll-smooth">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body
        className={`${playfair.variable} ${inter.variable} bg-background text-foreground antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

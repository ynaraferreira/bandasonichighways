import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const clashProxy = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: '--font-clash',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Evita zoom desnecessário no mobile ao clicar em inputs/botões
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seusite.com.br'),
  title: {
    default: "Sonic Highways | Oficial",
    template: "%s | Sonic Highways",
  },
  description: "Authentic sound. Uncompromising vision. A experiência definitiva do Grunge dos anos 90.",
  keywords: ["banda", "música", "sonic highways", "grunge", "rock", "recife", "tributo"],
  authors: [{ name: "Sonic Highways" }],
  openGraph: {
    title: "Sonic Highways | Official Website",
    description: "Authentic sound. Uncompromising vision.",
    url: 'https://www.seusite.com.br',
    siteName: 'Sonic Highways',
    locale: 'pt_BR',
    type: 'website',
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
      <body className={`${inter.variable} ${clashProxy.variable} font-inter antialiased bg-bg-primary text-text-primary overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
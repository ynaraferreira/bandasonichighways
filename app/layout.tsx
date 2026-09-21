import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const clashProxy = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
});

/*
  IMPORTANTE:
  Quando tiver o domínio oficial, trocar APENAS esta URL.
  
  Exemplo:
  https://sonichighways.com.br
*/
const siteUrl = "https://www.seusite.com.br";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Sonic Highways",

  title: {
    default: "Sonic Highways | Rock/Grunge em Recife",
    template: "%s | Sonic Highways",
  },

  description:
    "Site oficial da Sonic Highways, banda de rock de Recife/PE, inspirada no grunge e rock alternativo dos anos 90. Confira vídeos, agenda de shows, fotos e material para divulgação.",

  keywords: [
    "Sonic Highways",
    "Sonic Highways Recife",
    "banda Sonic Highways",
    "banda de rock Recife",
    "banda de grunge Recife",
    "grunge Recife",
    "rock Recife",
    "rock alternativo",
    "grunge anos 90",
    "banda de rock Pernambuco",
    "shows de rock Recife",
  ],

  authors: [
    {
      name: "Sonic Highways",
    },
  ],

  creator: "Sonic Highways",
  publisher: "Sonic Highways",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sonic Highways | Rock e Grunge em Recife",

    description:
      "Site oficial da Sonic Highways. Vídeos, agenda de shows, fotos e material para divulgação.",

    url: siteUrl,

    siteName: "Sonic Highways",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sonic Highways",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sonic Highways | Rock e Grunge em Recife",

    description:
      "Site oficial da Sonic Highways. Vídeos, agenda de shows, fotos e material para divulgação.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "music",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const musicGroupStructuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",

    name: "Sonic Highways",

    url: siteUrl,

    image: `${siteUrl}/og-image.jpg`,

    description:
      "Banda de rock e grunge de Recife, Pernambuco.",

    genre: [
      "Rock",
      "Grunge",
      "Alternative Rock",
    ],

    foundingLocation: {
      "@type": "Place",
      name: "Recife, Pernambuco, Brasil",
    },

    sameAs: [
      "https://www.instagram.com/shrecife/",
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">

      <body
        className={`${inter.variable} ${clashProxy.variable} font-inter antialiased bg-bg-primary text-text-primary overflow-x-hidden`}
      >

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicGroupStructuredData),
          }}
        />

      </body>

    </html>
  );
}
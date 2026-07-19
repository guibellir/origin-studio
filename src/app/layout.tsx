import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Origin Studio | Sites modernos que vendem por você",
  description:
    "Criamos sites profissionais com WhatsApp, Google Maps, formulário, SEO, hospedagem e domínio. Entrega rápida. Transforme visitantes em clientes.",
  keywords: [
    "criação de sites",
    "sites profissionais",
    "site com WhatsApp",
    "SEO",
    "hospedagem",
    "domínio",
    "Origin Studio",
  ],
  openGraph: {
    title: "Origin Studio | Sites modernos que vendem por você",
    description:
      "Site moderno + WhatsApp + Maps + formulário + SEO + hospedagem + domínio. Entrega rápida.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

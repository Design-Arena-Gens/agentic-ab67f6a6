import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Histórias Bíblicas 3D | Animações Cativantes",
  description: "Vídeos animados em 3D com histórias bíblicas doces, alegres e divertidas. Episódios que prendem sua atenção e tocam seu coração!",
  keywords: "histórias bíblicas, animação 3D, vídeos cristãos, TikTok, Instagram, YouTube",
  openGraph: {
    title: "Histórias Bíblicas 3D | Animações Cativantes",
    description: "Descubra histórias bíblicas como nunca viu antes! Animações 3D doces e divertidas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

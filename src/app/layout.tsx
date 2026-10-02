import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cahaya Nusantara Elektrik – Solusi Aksesoris Listrik & Terminasi Kabel",
  description:
    "Berdiri sejak 2014, Cahaya Nusantara Elektrik menyediakan berbagai produk terbaik seperti Terminasi Kabel, 3M, Trafo, Copper Braid, Fuse, dan MCCB dengan kualitas terjamin di Jakarta Pusat.",
  keywords:
    "terminasi kabel, aksesoris listrik, 3M, MCCB, trafo, copper braid, fuse, jakarta pusat, cahaya nusantara elektrik",
  openGraph: {
    title: "Cahaya Nusantara Elektrik",
    description: "Solusi Kebutuhan Aksesoris Listrik & Terminasi Kabel Anda",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}

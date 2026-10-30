import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIKE ARCHIVE // HERITAGE & INNOVATION SHOWCASE",
  description:
    "Official informational archive of Nike footwear innovation, iconic silhouettes, and cultural heritage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060504] text-white antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

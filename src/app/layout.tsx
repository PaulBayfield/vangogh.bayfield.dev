import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vincent Van Gogh",
  description:
    "Vincent Van Gogh était un peintre post-impressionniste néerlandais.",
  openGraph: {
    title: "Vincent Van Gogh",
    description:
      "Vincent Van Gogh était un peintre post-impressionniste néerlandais.",
    images: ["/logo.png"],
  },
  metadataBase: new URL(process.env.WEB_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

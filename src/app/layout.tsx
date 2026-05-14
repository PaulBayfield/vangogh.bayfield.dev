import "./globals.css";
import { Damion } from "next/font/google";
import type { Metadata } from "next";
import UmamiProvider from "next-umami";

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

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-damion",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <UmamiProvider
          websiteId="a9057ce9-86ca-44e1-a5fe-a1923b7e5024"
          src="https://analytics.bayfield.dev/script.js"
        />
      </head>
      <body className={damion.className}>
        {children}
      </body>
    </html>
  );
}

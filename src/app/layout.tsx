import "@/styles/globals.css";
import "@/styles/ham.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Roboto, Manrope, Caramel } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Istanbul Restaurant Manchester | Authentic Turkish Cuisine",
  description:
    "Istanbul Machester was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const caramel = Caramel({
  subsets: ["latin"],
  variable: "--font-caramel",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] text-[#FBEAD2] bg-background font-sans antialiased",
          inter.variable,
          roboto.variable,
          caramel.variable,
          manrope.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

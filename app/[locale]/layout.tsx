import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg?v=2",
  },
  title: "Looking for a popular translation?",
  description: "Created by [T] corp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.variable}
      >
        {children}
      </body>
    </html>
  );
}

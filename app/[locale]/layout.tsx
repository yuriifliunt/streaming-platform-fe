import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../styles/globals.css";
import { cookies } from "next/headers";

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

async function getTheme() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')

  return theme;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en" className={theme?.value}>
      <body
        className={`${lato.variable} bg-light dark:bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}

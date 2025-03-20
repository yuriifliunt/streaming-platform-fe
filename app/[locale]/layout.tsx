import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../../styles/globals.css";
import { cookies } from "next/headers";
import Header from "@/components/global/Header";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../i18n";

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

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  return theme;
}

const i18nNamespaces = ["home", "default"];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const theme = await getTheme();
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={theme?.value}>
      <body className={`${lato.variable} bg-light dark:bg-dark`}>
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
          <Header />
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}

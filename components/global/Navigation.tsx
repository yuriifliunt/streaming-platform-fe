import { LanguageButton } from "./LanguageButton";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type TNavigation = {
  title: string;
  url: string;
}

export const Navigation = () => {
  const { t } = useTranslation();

  const navigation: TNavigation[] = [
    {
      title: `${t("default:streams")}`,
      url: '/streams',
    },
    {
      title: `${t("default:artists")}`,
      url: '/artists',
    },
    {
      title: `${t("default:contacs")}`,
      url: '/contacs',
    },
  ];

  return (
    <>
      {navigation.map(
        (nav: TNavigation, idx: number) => (<Link href={nav.url} className="text-dark font-light lg:text-xl" key={idx}>{nav.title}</Link>)
      )}
      <LanguageButton />
      <ThemeToggleButton />
    </>
  )
}
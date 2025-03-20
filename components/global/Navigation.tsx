import { useRouter } from "next/navigation";
import { LanguageButton } from "./LanguageButton";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { useTranslation } from "react-i18next";

type TNavigation = {
  title: string;
  url: string;
}

export const Navigation = () => {
  const { t } = useTranslation();
  const router = useRouter();

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
      {
        navigation.map((nav: TNavigation, idx: number) => {
          return (
            <p
              key={idx}
              onClick={() => router.push(nav.url)}
              className="text-dark cursor-pointer font-light lg:text-xl"
            >
              {nav.title}
            </p>
          )
        })
      }
      <LanguageButton />
      <ThemeToggleButton />
    </>
  )
}
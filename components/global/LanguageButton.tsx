'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useState } from 'react';

export const LanguageButton = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const currentPathname = usePathname();
  const [currentLocale] = useState<string>(i18n.language);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      className="text-dark bg-light border-2 border-dark rounded-lg py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-accent hover:text-dark active:bg-secondary active:text-white cursor-pointer transition-all duration-300 ease-in-out"
      onChange={handleChange}
      value={currentLocale}
    >
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>
  );
};

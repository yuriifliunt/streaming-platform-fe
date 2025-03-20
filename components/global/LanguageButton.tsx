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
      className="text-dark bg-light border-none shadow-dark w-20 h-10 py-1 px-4 rounded-full text-sm font-light cursor-pointer"
      onChange={handleChange}
      value={currentLocale}
    >
      <option className='font-light' value="en">EN</option>
      <option value="uk">Укр</option>
    </select>
  );
};

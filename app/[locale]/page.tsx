
import React from 'react';
import initTranslations from '../i18n';
import TranslationsProvider from '../../components/TranslationsProvider';
import Header from '@/components/global/Header';

const i18nNamespaces = ["home", "default"];

type TProps = {
  params: {
    locale: string
  }
}

export default async function Home({ params: { locale } }: TProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <Header />
      <div>
        <p className='text-dark'>{t('welcome')}</p>
      </div>
    </TranslationsProvider>
  )
}
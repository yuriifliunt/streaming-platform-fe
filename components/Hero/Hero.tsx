'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Image
        className='pt-12 w-full'
        src="/burn-tabasco.webp"
        width={4440}
        height={2650}
        alt='burn'
      />
      <div>
        <p className='text-dark capitalize'>{t('watchNow')}</p>
      </div>
    </div>
  );
}

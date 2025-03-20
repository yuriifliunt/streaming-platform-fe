'use client'

import React from 'react';
import Image from 'next/image';
// import { useTranslation } from "react-i18next";

export default function Artists() {
  // const { t } = useTranslation();

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
        <p className='text-dark capitalize'>Artists page</p>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { useTabascoAnimationStore } from '@/store/tabascoAnimationStore';
import Link from 'next/link';

export default function TabascoAnimation() {
  const tRef = useRef(null);
  const { triggerAnimation } = useTabascoAnimationStore();

  useEffect(() => {
    triggerAnimation();
  }, [triggerAnimation]);

  return (
    <Link
      href="/"
      className="flex justify-center items-center text-2xl lg:text-6xl font-bold h-fit cursor-pointer"
    >
      <span ref={tRef} className="tabasco-animation inline-block text-secondary">T</span>
      <span className="text-accent">ABASCO</span>
    </Link>
  );
}

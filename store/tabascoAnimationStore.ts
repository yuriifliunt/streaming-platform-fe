import { create } from 'zustand';
import { gsap } from 'gsap';

type TabascoAnimationStore = {
  triggerAnimation: () => void;
};

export const useTabascoAnimationStore = create<TabascoAnimationStore>(() => ({
  triggerAnimation: () => {
    const tRef = document.querySelector('.tabasco-animation') as HTMLElement;
    if (tRef) {
      const tl = gsap.timeline();
      tl.fromTo(
        tRef,
        { y: -80, opacity: 0, rotate: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'bounce.out' }
      )
        .to(tRef, { rotate: 720, duration: 1, ease: 'power2.out' })
        .to(tRef, { rotate: 30, duration: 1, ease: 'power2.out' });
    }
  },
}));

'use client';

import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

const LenisScrollClient = () => {
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();
  let lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.8,
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    function animate(time) {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      lenis.current.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const backToTopHandler = () => {
    lenis.current.scrollTo(0, {
      duration: 2,
      easing: (x) =>
        x === 0
          ? 0
          : x === 1
          ? 1
          : x < 0.5
          ? Math.pow(2, 20 * x - 10) / 2
          : (2 - Math.pow(2, -20 * x + 10)) / 2,
    });
  };

  return (
    <button
      className={`scrollToTopBtn ${showButton ? 'showBtn' : ''}`}
      onClick={backToTopHandler}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default LenisScrollClient;

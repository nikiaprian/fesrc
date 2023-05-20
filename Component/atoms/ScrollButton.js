import React, { useState } from 'react';
import { ArrowSmUpIcon } from '@heroicons/react/outline';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      style={{ display: visible ? 'inline' : 'none' }}
      className="bg-green-800 h-10 w-10 shadow-2xl border-2 border-gray-100/50 rounded-md right-10 bottom-10 text-2xl z-[1000] cursor-pointer text-white fixed"
    >
      <ArrowSmUpIcon onClick={scrollToTop} />
    </div>
  );
};

export default ScrollButton;

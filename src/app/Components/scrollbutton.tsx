'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener to update button visibility on scroll
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`fixed bottom-10 right-10 p-1 rounded-lg text-white ${isVisible ? 'block' : 'hidden'}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2_57)">
    <path d="M7.17921 22.7064L14.3787 15.5069C15.5502 14.3354 17.4497 14.3354 18.6213 15.5069L25.8207 22.7064C26.4797 23.3654 27.5481 23.3654 28.2071 22.7064C28.8661 22.0474 28.8661 20.979 28.2071 20.3201L20.0355 12.1485C18.0829 10.1959 14.9171 10.1959 12.9644 12.1485L4.79287 20.3201C4.1339 20.979 4.1339 22.0474 4.79287 22.7064C5.45184 23.3654 6.52024 23.3654 7.17921 22.7064Z" fill="white" stroke="white" strokeWidth="2"/>
    </g>
    <defs>
    <clipPath id="clip0_2_57">
    <rect width="33" height="33" fill="white"/>
    </clipPath>
    </defs>
    </svg>


    </motion.button>
  );
};

export default ScrollButton;
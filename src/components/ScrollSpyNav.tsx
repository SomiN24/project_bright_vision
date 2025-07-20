'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const sections = [
  { name: 'Who We Are', id: 'who-we-are' },
  { name: 'The Problem', id: 'the-problem' },
  { name: 'Our Vision', id: 'vision' },
  { name: 'How It Works', id: 'how-it-works' },
  { name: 'Execution', id: 'implementation' },
  { name: 'Our Product', id: 'product' },
  { name: 'Financials', id: 'financials' },
  { name: 'Impact', id: 'impact' },
  { name: 'Our Partners', id: 'technology-partner' },
  { name: 'Compliance', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

const ScrollSpyNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const buffer = window.innerHeight * 0.3;
      let currentSection = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= buffer && rect.bottom >= 0) {
            currentSection = section.id;
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 5
      ) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
      // The visibility logic here is for the desktop scroll spy itself,
      // ensuring it only appears after some scrolling on desktop.
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('change', handleScroll); // Corrected cleanup to removeEventListener
  }, []);

  return (
    <nav
      className={clsx(
        'hidden lg:flex', // Hide by default, show as flex column on large screens (PC)
        'fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-10 transition-opacity duration-500',
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={clsx(
            'text-base font-semibold transition-all duration-300 text-right',
            activeSection === section.id
              ? 'text-primary opacity-100'
              : 'text-muted-foreground opacity-60 hover:opacity-80'
          )}
        >
          {section.name}
        </a>
      ))}
    </nav>
  );
};

export default ScrollSpyNav;

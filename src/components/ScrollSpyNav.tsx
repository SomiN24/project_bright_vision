'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const sections = [
  { name: 'Our Vision', id: 'vision' },
  { name: 'How It Works', id: 'how-it-works' },
  { name: 'Implementation', id: 'implementation' },
  { name: 'Impact', id: 'impact' },
  { name: 'Contact', id: 'contact' },
];

const ScrollSpyNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = window.innerHeight * 0.4;

      let currentSection = '';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollY + buffer >= offsetTop && scrollY + buffer < offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Special case: bottom of page = highlight last section
      if (
        window.innerHeight + scrollY >= document.body.offsetHeight - 5 &&
        currentSection !== sections[sections.length - 1].id
      ) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-10">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={clsx(
            'text-base font-semibold transition-all duration-300',
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
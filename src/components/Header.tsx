'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react'; // Import useState and useEffect

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    // Check if scrolling down and past a certain threshold (e.g., 100px from the top)
    // This threshold can be adjusted based on the height of your HeroSection
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false); // Hide header when scrolling down
    } else {
      setIsVisible(true); // Show header when scrolling up
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Dependency array includes lastScrollY to re-run effect when scroll position changes

  return (
    <header
      className={`fixed inset-x-2 md:inset-x-4 top-4 z-50 flex items-center justify-between px-3 md:px-4
        transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
    >
      {/* Left: Logo and Tagline */}
      <div className="flex items-center space-x-3">
        <img
          src="/BrightVision.png"
          alt="JSF Logo"
          className="w-10 h-8 md:w-12 md:h-10 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight text-sm">
          <span className="font-semibold text-xs md:text-sm text-foreground">Project Bright Vision</span>
          <span className="text-[10px] md:text-xs text-muted-foreground">A JSF Trust Initiative</span>
        </div>
      </div>

    </header>
  );
};

export default Header;

'use client';

import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4">
      {/* Left: Logo and Tagline */}
      <div className="flex items-center space-x-3">
        <img
          src="/BrightVision.png" // ✅ public/BrightVision.png
          alt="JSF Logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-sm text-foreground">Project Bright Vision</span>
          <span className="text-xs text-muted-foreground">A JSF Trust Initiative</span>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          Learn More
        </Button>
        <Button variant="cta" size="sm">
          Support Vision
        </Button>
      </div>
    </header>
  );
};

export default Header;
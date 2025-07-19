import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users } from 'lucide-react';
import heroImage from '@/assets/hero-vision.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vision for the Blind - Empowering students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="fade-in flex items-center space-x-2 mb-6">
            <div className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">A JSF Trust Initiative</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="fade-in fade-in-delay-1 text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Vision</span> for the{' '}
            <span className="block lg:inline">Blind</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in fade-in-delay-2 text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Empowering Every Vision, Honouring Every Life.
          </p>

          {/* Stats */}
          <div className="fade-in fade-in-delay-3 flex items-center space-x-8 mb-10">
            <div className="flex items-center text-muted-foreground">
              <Users className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm">Impacting 1000+ students</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-5 h-5 mr-2 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">+</span>
              </div>
              <span className="text-sm">50+ Partner schools</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto group"
            >
              Support the Vision
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="fade-in fade-in-delay-3 text-sm text-muted-foreground mt-8 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Trusted by educators, supported by communities
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
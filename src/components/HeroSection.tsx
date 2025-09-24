import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users } from 'lucide-react';
import heroImage from '@/assets/hero-vision.jpg'; // Assuming this path is correct for your image

// Define a simplified Braille mapping for common characters
const brailleMap: { [key: string]: boolean[][] } = {
  'a': [[true, false], [false, false], [false, false]],
  'b': [[true, false], [true, false], [false, false]],
  'c': [[true, true], [false, false], [false, false]],
  'd': [[true, true], [false, true], [false, false]],
  'e': [[true, false], [false, true], [false, false]],
  'f': [[true, true], [true, false], [false, false]],
  'g': [[true, true], [true, true], [false, false]],
  'h': [[true, false], [true, true], [false, false]],
  'i': [[false, true], [true, false], [false, false]],
  'j': [[false, true], [true, true], [false, false]],
  'k': [[true, false], [false, false], [true, false]],
  'l': [[true, false], [true, false], [true, false]],
  'm': [[true, true], [false, false], [true, false]],
  'n': [[true, true], [false, true], [true, false]],
  'o': [[true, false], [false, true], [true, false]],
  'p': [[true, true], [true, false], [true, false]],
  'q': [[true, true], [true, true], [true, false]],
  'r': [[true, false], [true, true], [true, false]],
  's': [[false, true], [true, false], [true, false]],
  't': [[false, true], [true, true], [true, false]],
  'u': [[true, false], [false, false], [true, true]],
  'v': [[true, false], [true, false], [true, true]],
  'w': [[false, true], [true, true], [false, true]],
  'x': [[true, true], [false, false], [true, true]],
  'y': [[true, true], [false, true], [true, true]],
  'z': [[true, false], [false, true], [true, true]],
  ' ': [[false, false], [false, false], [false, false]], // Space cell
};

// Function to convert text to a flat array of Braille cell objects with color info
const textToBrailleCells = (text: string, visionWord: string): { dots: boolean[][], color: string }[] => {
  const cells: { dots: boolean[][], color: string }[] = [];
  // Find the start and end index of the visionWord within the text
  const visionStartIndex = text.toLowerCase().indexOf(visionWord.toLowerCase());
  const visionEndIndex = visionStartIndex + visionWord.length;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const isVisionPart = i >= visionStartIndex && i < visionEndIndex;
    const braillePattern = brailleMap[char] || brailleMap[' ']; // Default to space if char not found

    cells.push({
      dots: braillePattern,
      color: isVisionPart ? 'maroon' : 'black'
    });
  }
  return cells;
};

const HeroSection = () => {
  const englishText = "Project Bright Vision"; // Changed text to "Project Bright Vision"
  const visionWord = "Vision"; // Keep "Vision" to color that part maroon
  const brailleCells = textToBrailleCells(englishText, visionWord);

  const [showBraille, setShowBraille] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBraille(true);
    }, 1500); // Delay Braille appearance

    return () => clearTimeout(timer);
  }, []);

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
          

          {/* Main Heading with Braille Script */}
          <h1 className="fade-in fade-in-delay-1 text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight flex flex-col lg:flex-row lg:items-end">
            Project Bright<span className="text-[#881337] whitespace-nowrap">Vision</span>&nbsp;
            
            {/* Braille Script Container - Custom Dot Rendering */}
            <div
              className={`flex flex-wrap items-end ml-4 text-xl lg:text-3xl transition-opacity duration-1000 ease-out ${
                showBraille ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ flexShrink: 0 }}
            >
              {brailleCells.map((cellData, cellIndex) => (
                <div 
                  key={cellIndex} 
                  className="flex flex-col justify-end" 
                  style={{ width: '0.9em', height: '1.8em', marginRight: '0.2em', gap: '0.075em' }}
                >
                  {cellData.dots.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex" style={{ gap: '0.075em' }}>
                      {row.map((dotRaised, dotIndex) => (
                        <div
                          key={`${rowIndex}-${dotIndex}`}
                          className={`w-2.5 h-2.5 rounded-full ${
                            dotRaised ? (cellData.color === 'maroon' ? 'bg-[#881337]' : 'bg-gray-600') : 'bg-transparent'
                          }`}
                          style={{
                            // Enhanced 3D effect using box-shadow
                            boxShadow: dotRaised 
                              ? `
                                1px 1px 2px rgba(0, 0, 0, 0.5),   /* Stronger main shadow */
                                -1px -1px 2px rgba(255, 255, 255, 0.7), /* Stronger highlight */
                                inset 1px 1px 2px rgba(255, 255, 255, 0.3), /* Inner highlight */
                                inset -1px -1px 2px rgba(0, 0, 0, 0.3)  /* Inner shadow */
                              `
                              : 'none' // No shadow for transparent dots
                          }}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
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

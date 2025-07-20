import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, BookOpen } from 'lucide-react';
import communityIcon from '@/assets/whoweare.mp4'; // This import is now for the video

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a social enterprise dedicated to reforming philanthropy and reimagining what it means to make a social impact
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Replaced <img> with <video> tag */}
                <video
                  src={communityIcon}
                  className="w-full rounded-2xl shadow-elegant"
                  autoPlay // Autoplays the video
                  loop     // Loops the video continuously
                  muted    // Mutes the video (essential for autoplay in most browsers)
                  playsInline // Ensures video plays inline on iOS
                  preload="auto" // Preloads the video for faster playback
                >
                  Your browser does not support the video tag.
                </video>
                {/* Removed the overlay div as it's typically for images, not videos */}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          To provide adaptive, modern, and smart tools that ensure equal access to learning for visually impaired students.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Our Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Our strategy is built on direct collaboration. We engage with schools to pinpoint eligible beneficiaries, then deliver smart tools, vital training, and supportive infrastructure. By fostering strong institutional partnerships, we're building a system that empowers the blind and levels the playing field for equal opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Our Team</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We are socially driven entrepreneurs, technologists, and change-makers united by a common goal: ensuring every child has the opportunity to learn, grow, and thrive.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;

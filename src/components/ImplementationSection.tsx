import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Building, Smartphone, BookOpen } from 'lucide-react';
import workshopImage from '@/assets/workshop-image.jpg';

const ImplementationSection = () => {
  const phases = [
    {
      icon: GraduationCap,
      title: 'Teacher Workshop',
      description: 'We conduct hands-on sessions to train educators',
      details: 'Comprehensive training on adaptive learning tools and inclusive teaching methods',
    },
    {
      icon: Building,
      title: 'School Onboarding',
      description: 'Each partner school is formally inducted into the program',
      details: 'Establishing partnerships and setting up infrastructure requirements',
    },
    {
      icon: Smartphone,
      title: 'Product Introduction',
      description: 'Students receive and are guided on using the tools',
      details: 'Personalized tool allocation and hands-on training sessions',
    },
    {
      icon: BookOpen,
      title: 'SOP Guidelines',
      description: 'Schools receive detailed SOPs on issuing, using, and storing tools',
      details: 'Complete operational procedures for sustainable program management',
    },
  ];

  return (
    <section id="implementation" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A structured approach to ensure successful deployment and long-term sustainability
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={workshopImage}
                alt="Teacher workshop and training session"
                className="w-full h-64 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Empowering Educators, Transforming Lives
                </h3>
                <p className="text-white/90 text-sm">
                  Our comprehensive training programs ensure teachers are equipped with the skills and knowledge to support visually impaired students effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Phases */}
          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <phase.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {phase.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {phase.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology & Transparency Section */}
          <div className="mt-16">
            <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Technology + Transparency
                </h3>
                <p className="text-lg text-muted-foreground">
                  Leveraging technology to ensure accountability and continuous improvement
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Platform Upload</h4>
                  <p className="text-xs text-muted-foreground">
                    All verified cases uploaded to JSF Trust platform
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Crowdfunding Launch</h4>
                  <p className="text-xs text-muted-foreground">
                    Targeted crowdfunding for each verified case
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Monthly Workshops</h4>
                  <p className="text-xs text-muted-foreground">
                    Ongoing training + user feedback collection
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Quarterly AMC Checks</h4>
                  <p className="text-xs text-muted-foreground">
                    Timely maintenance and upgrades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
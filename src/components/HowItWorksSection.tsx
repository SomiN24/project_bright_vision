import { Card, CardContent } from '@/components/ui/card';
import { Database, CheckCircle, FileText, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Database,
      title: 'Data Collection',
      description: 'Schools provide raw data of eligible students',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle,
      title: 'Validation',
      description: 'We cross-check and verify beneficiaries',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FileText,
      title: 'Final List',
      description: 'A finalized roster is created and approved',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures every student gets the support they need
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-background border-2 hover:border-primary/20">
                    <CardContent className="p-8 text-center">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 mt-4`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow - Hidden on last item and mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-border">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Transparent & Systematic
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our process ensures that every student is properly verified and receives the tools they need through established educational institutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Verified student eligibility criteria</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Academic grade verification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Direct school partnerships</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block p-8 bg-gradient-subtle rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Verified Beneficiaries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
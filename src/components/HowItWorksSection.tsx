import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Database, CheckCircle, FileText, ArrowRight, TrendingUp, GraduationCap, DollarSign, Users, ShieldCheck } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Database,
      title: 'Beneficiary Selection',
      description: 'Beneficiaries in multiples of 100 will be identified from various districts in Mumbai with the donor. Selection will be based on criteria including disability status, financial need, educational use, and day-to-day use.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle,
      title: 'Eligibility Criteria', // This step will now reveal the flipping boxes
      description: 'Hover over this card to see detailed eligibility criteria.', // Updated description for the main step
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FileText,
      title: 'Distribution Plan',
      description: 'Detailed information about each selected beneficiary will be meticulously collected and verified. Ensuring accurate targeting and efficient delivery of the Smart Vision Glasses. A comprehensive distribution plan for the Smart Vision Glasses will be formulated and communicated to all stakeholders before program implementation. We guarantee transparency and smooth execution across the nation.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      title: 'Support and Training',
      description: 'Beneficiaries will receive thorough training on how to use the Smart Vision Glasses effectively. Our plan maximizes their ability to utilize the device fully for both educational use and day-to-day activities. Ongoing support will be provided to address any issues and ensure optimal usage of the device. Ensuring optimal long-term utilization and sustained benefit, truly empowering individuals with low vision.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const eligibilityCriteria = [
    {
      icon: Users,
      title: 'Disability',
      content: 'Applicants must be blind or vision impaired, evidenced by a valid government-issued disability certificate. This verifies the medical necessity for the device.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: DollarSign,
      title: 'Financial Status',
      content: 'Must belong to the financially weaker section of the population, ensuring support is directed to those with the greatest financial need.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: GraduationCap,
      title: 'Educational Use',
      content: 'Must be a student (school or college) intending to use the Smart Vision Glasses for learning. This promotes educational empowerment.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: ShieldCheck,
      title: 'Day-To-Day Use',
      content: 'Adults (employed or not) intending to use the device for daily activities. This enhances independence and overall quality of life.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures every student gets the support they need
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mb-20">
            <div className="grid grid-cols-1 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 bg-background border-2 hover:border-primary/20">
                    {/* Conditional Card Content based on step index */}
                    {index === 1 ? ( // This is the Eligibility Criteria step
                      <CardContent className="p-0 relative h-[450px]"> {/* Increased height for the main card to provide more space */}
                        {/* Step Number - Placed directly inside CardContent for consistent positioning */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                          {index + 1}
                        </div>

                        {/* Front of the main Eligibility Criteria step card (always visible portion) */}
                        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 group-hover:opacity-0">
                          <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300`}>
                            <step.icon className={`w-8 h-8 ${step.color}`} />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Back of the main Eligibility Criteria step card (contains the 4 flipping boxes) */}
                        {/* Simplified transition for better reliability */}
                        <div className="absolute inset-0 w-full h-full p-6 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"> {/* Increased padding */}
                          <div className="grid grid-cols-2 gap-6 w-full h-full"> {/* Increased gap */}
                            {eligibilityCriteria.map((criterion, subIndex) => (
                              <div key={subIndex} className="flex flex-col items-center">
                                {/* Title above the flipping box */}
                                <h4 className="text-lg font-bold text-foreground mb-3 text-center"> {/* Increased font size and boldness */}
                                  {criterion.title}
                                </h4>
                                <div className="relative group perspective-1000 h-full w-full">
                                  <Card className="absolute inset-0 w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                                    {/* Front of inner card */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden bg-background border-2 border-border rounded-lg flex flex-col items-center justify-center p-4 text-center text-sm" // Increased padding
                                         style={{ /* Removed boxShadow */ }}>
                                      <div className={`w-10 h-10 ${criterion.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
                                        <criterion.icon className={`w-5 h-5 ${criterion.color}`} />
                                      </div>
                                    </div>
                                    {/* Back of inner card */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white text-foreground rounded-lg rotate-y-180 flex items-center justify-center p-4 text-center text-sm" // Increased padding
                                         style={{ /* Removed boxShadow */ }}>
                                      <CardContent className="p-0">
                                        <p className="text-base font-medium leading-tight"> {/* Increased font size */}
                                          {criterion.content}
                                        </p>
                                      </CardContent>
                                    </div>
                                  </Card>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    ) : (
                      // Default content for other steps
                      <CardContent className="p-8 text-center">
                        {/* Step Number - Placed directly inside CardContent for consistent positioning */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                          {index + 1}
                        </div>
                        <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 mt-4 transition-transform duration-300 group-hover:scale-110`}>
                          <step.icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 lg:my-6">
                      <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-border transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 text-primary transform rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Original "Additional Info" section remains */}
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

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, RefreshCw, Users, Award } from 'lucide-react';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      number: '1',
      label: 'Students Impacted',
      description: 'Visually impaired students receiving support',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Partner Schools',
      description: 'Educational institutions in our network',
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Improvement Rate',
      description: 'Students showing academic progress',
    },
    {
      icon: RefreshCw,
      number: '24/7',
      label: 'Continuous Support',
      description: 'Ongoing maintenance and updates',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Impact Loop
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We close the loop by sharing detailed user and operational feedback with manufacturers, ensuring continuous product improvement and greater student success.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-background border-2 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Loop Visualization */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Continuous Improvement Cycle
              </h3>
              <p className="text-lg text-muted-foreground">
                Every interaction creates valuable insights for product enhancement
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feedback Collection */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Collect Feedback</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Gather detailed user experiences and operational insights from students, teachers, and administrators.
                </p>
              </div>

              {/* Analysis & Improvement */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Analyze & Improve</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Transform feedback into actionable insights and collaborate with manufacturers for product enhancements.
                </p>
              </div>

              {/* Implementation */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Implement Changes</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Deploy improved tools and solutions, creating a better learning experience for students.
                </p>
              </div>
            </div>

            {/* Success Story */}
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Real Impact Stories</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "The adaptive tools have transformed my daughter's learning experience. She's more confident and engaged in her studies than ever before. The ongoing support from JSF Trust ensures the tools continue to meet her evolving needs."
                  </p>
                  <p className="text-sm text-primary font-medium mt-3">
                    - Parent of a beneficiary student
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

export default ImpactSection;
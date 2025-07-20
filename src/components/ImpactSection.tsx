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
    <section id="impact" className="py-24 bg-gradient-subtle"> {/* Increased vertical padding from py-20 to py-24 */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20"> {/* Increased bottom margin from mb-16 to mb-20 */}
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6"> {/* Increased bottom margin from mb-4 to mb-6 */}
              Impact Loop
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We close the loop by sharing detailed user and operational feedback with manufacturers, ensuring continuous product improvement and greater student success.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"> {/* Increased gap from gap-6 to gap-8 and mb-16 to mb-20 */}
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-background border-2 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center"> {/* Increased padding from p-6 to p-8 */}
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"> {/* Increased size from w-16 h-16 to w-20 h-20 and mb-4 to mb-6 */}
                    <stat.icon className="w-10 h-10 text-primary" /> {/* Increased icon size from w-8 h-8 to w-10 h-10 */}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3"> {/* Increased font size from text-3xl to text-4xl and mb-2 to mb-3 */}
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-3"> {/* Increased font size from text-lg to text-xl and mb-2 to mb-3 */}
                    {stat.label}
                  </div>
                  <p className="text-base text-muted-foreground"> {/* Increased font size from text-sm to text-base */}
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Loop Visualization */}
          <div className="bg-background rounded-2xl p-10 lg:p-16 shadow-sm border border-border"> {/* Increased padding from p-8 lg:p-12 to p-10 lg:p-16 */}
            <div className="text-center mb-12"> {/* Increased bottom margin from mb-10 to mb-12 */}
              <h3 className="text-4xl font-bold text-foreground mb-6"> {/* Increased font size from text-3xl to text-4xl and mb-4 to mb-6 */}
                Continuous Improvement Cycle
              </h3>
              <p className="text-xl text-muted-foreground"> {/* Increased font size from text-lg to text-xl */}
                Every interaction creates valuable insights for product enhancement
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10"> {/* Increased gap from gap-8 to gap-10 */}
              {/* Feedback Collection */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8"> {/* Increased size from w-20 h-20 to w-24 h-24 and mb-6 to mb-8 */}
                  <Users className="w-12 h-12 text-primary-foreground" /> {/* Increased icon size from w-10 h-10 to w-12 h-12 */}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Collect Feedback</h4> {/* Increased font size from text-xl to text-2xl and mb-3 to mb-4 */}
                <p className="text-lg text-muted-foreground leading-relaxed"> {/* Increased font size from text-muted-foreground to text-lg */}
                  Gather detailed user experiences and operational insights from students, teachers, and administrators.
                </p>
              </div>

              {/* Analysis & Improvement */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <TrendingUp className="w-12 h-12 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Analyze & Improve</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transform feedback into actionable insights and collaborate with manufacturers for product enhancements.
                </p>
              </div>

              {/* Implementation */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <RefreshCw className="w-12 h-12 text-primary-foreground" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">Implement Changes</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deploy improved tools and solutions, creating a better learning experience for students.
                </p>
              </div>
            </div>

            {/* Success Story */}
            <div className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/10"> {/* Increased mt-12 to mt-16 and p-6 to p-8 */}
              <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6"> {/* Increased space-y/x from 4 to 6 */}
                {/* Image for Success Story */}
                <div className="flex-shrink-0 w-full sm:w-64"> {/* Increased width control from sm:w-48 to sm:w-64 */}
                  <img
                    src="/successstory.jpeg" // Placeholder image URL
                    alt="Student Success Story"
                    className="w-full h-auto rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x300/e0e0e0/555555?text=Image+Not+Found";
                      e.currentTarget.alt = "Image not available";
                    }}
                  />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Real Impact Stories</h4> {/* Increased font size from text-lg to text-xl and mb-2 to mb-3 */}
                  <br />
                  <p className="text-lg text-muted-foreground leading-relaxed"> {/* Increased font size from text-muted-foreground to text-lg */}
                      ‘’Smart Vision Pro glasses helped me a lot in daily life, especially for walking and reading. I am easily able tto identify different things around me. Now I feel like I am equal to normal person.”
                  </p>
                  <br />
                  <p className="text-base text-primary font-medium mt-4"> {/* Increased font size from text-sm to text-base and mt-3 to mt-4 */}
                    - Shravani
                    <br /> {/* Line break */}
                    <span className="text-sm text-muted-foreground">Visakhapatnam, AP</span> {/* Increased font size from text-xs to text-sm */}
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

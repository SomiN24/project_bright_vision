import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Heart, Target, Users, Zap, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const FundraisingSection = () => {
  const currentAmount = 850000;
  const targetAmount = 2000000;
  const progressPercentage = (currentAmount / targetAmount) * 100;

  const fundAllocation = [
    { category: 'Smart Vision Glasses', amount: 1200000, percentage: 60, color: 'bg-primary' },
    { category: 'Training & Workshops', amount: 400000, percentage: 20, color: 'bg-secondary' },
    { category: 'School Infrastructure', amount: 300000, percentage: 15, color: 'bg-accent' },
    { category: 'Platform & Technology', amount: 100000, percentage: 5, color: 'bg-muted' }
  ];

  return (
    <section id="fundraising" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Support Project Bright Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in transforming the lives of visually impaired students across India through cutting-edge assistive technology
            </p>
          </div>

          {/* Fundraising Progress */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Fundraising Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Raised so far</span>
                    <span className="text-2xl font-bold text-foreground">₹{(currentAmount / 100000).toFixed(1)}L</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">₹0</span>
                    <span className="text-sm font-medium text-foreground">Goal: ₹{(targetAmount / 100000)}L</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">1,247</div>
                    <div className="text-xs text-muted-foreground">Supporters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">18</div>
                    <div className="text-xs text-muted-foreground">Days Left</div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Fund Allocation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {fundAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                      <span className="text-sm text-muted-foreground">₹{(item.amount / 100000).toFixed(1)}L ({item.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Transparent fund tracking available on JSF Trust platform
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Numbers */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
              Projected Impact with Full Funding
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Equipped</div>
              </div>

              <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Schools</div>
              </div>

              <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Smart Glasses Distributed</div>
              </div>

              <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">24</div>
                <div className="text-sm text-muted-foreground">Months Timeline</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Every Contribution Makes a Difference
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your support doesn't just fund technology—it opens doors to education, independence, and a brighter future for visually impaired students across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Heart className="w-4 h-4 mr-2" />
                Make a Donation
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Users className="w-4 h-4 mr-2" />
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingSection;
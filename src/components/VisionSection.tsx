import { Card, CardContent } from '@/components/ui/card';
import { Eye, Lightbulb, Globe, Users, Target, TrendingUp, Glasses, Navigation, BookOpen } from 'lucide-react';
import indianStudentsClassroom from '@/assets/indian-students-classroom.jpg';
import indianStudentSmartGlasses from '@/assets/indian-student-smart-glasses.jpg';
import indianStudentsInclusive from '@/assets/indian-students-inclusive-learning.jpg';
const VisionSection = () => {
  return <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Aspiration
            </h2>
            <p className="text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
              We aspire to profoundly impact students' lives by fostering their independence, enabling greater societal inclusion, and providing them with accessible, long-lasting, and cost-efficient SMART educational resources.
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Why Card */}
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-l-6 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Why we do it?</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">Every child deserves to learn and thrive. In India, visually impaired students face significant barriers: a lack of essential tools, unaffordable Braille, and no dedicated focus on inclusive education. We exist to bridge this critical gap, catalyzing change by connecting specialized assistive technology with the students who need it most.</p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-primary font-medium text-center">Breaking barriers, building bridges to education</p>
                </div>
              </CardContent>
            </Card>

            {/* How Card */}
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-l-6 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">How we do it?</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
We partner directly with schools to implement SMART tools, training, and essential infrastructure, driving systemic impact by onboarding entire institutions. Our structured process efficiently delivers assistive devices, continuously enhanced through close collaboration with manufacturers and vital user feedback.
              </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-primary font-medium text-center">Systemic change through institutional partnerships</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What We Aim to Achieve */}
         <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12 mb-16">
  <div className="text-center mb-10">
    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
      What We Aim to Achieve
    </h3>
    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
      We work hand-in-hand with partner schools and verified beneficiaries to create meaningful, lasting impact for the visually impaired community.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-3">Increasing Day-to-Day Efficiency</h4>
      <p className="text-muted-foreground text-sm">
        Granting access to training and workplace accommodations, leading to economic independence and workforce productivity.
      </p>
    </div>

    <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Target className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-3">Expanding Employment Opportunities</h4>
      <p className="text-muted-foreground text-sm">
        Equipping students with specialized tools and resources for academic success and full potential.
      </p>
    </div>

    <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-3">Boosting Educational Outcomes</h4>
      <p className="text-muted-foreground text-sm">
        Offering enhanced technology for daily tasks, fostering autonomy and quality of life.
      </p>
    </div>

    <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-3">Improving Mobility and Independence</h4>
      <p className="text-muted-foreground text-sm">
        Providing advanced aids and tools for confident navigation.
      </p>
    </div>
  </div>
</div>

          {/* Project Bright Vision */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Catalyzing Access to Assistive Technology
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Project Bright Vision is dedicated to facilitating the distribution of AI-powered assistive technology to the visually impaired.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A JSF Trust initiative in collaboration with leaders like SHG Technology, we aim to ensure that cutting-edge solutions reach those who need them the most—quickly, affordably, and impactfully.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={indianStudentsClassroom} 
                  alt="Indian students using assistive technology in classroom" 
                  className="rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>
          </div>

          {/* Smart Vision Pro Glasses */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src={indianStudentSmartGlasses} 
                  alt="Indian student using Smart Vision Pro Glasses" 
                  className="rounded-2xl shadow-elegant w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Smart Vision Pro Glasses
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    Our latest initiative focuses on the distribution of Smart Vision Pro & Lite Glasses, which empower individuals with NO vision:

                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">See and recognize people and objects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">Read in multiple languages</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">Navigate with real-time voice guidance</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <br/>
                    Our latest initiative focuses on the distribution of Smart Vision Pro & Lite Glasses, which empower individuals with LOW vision:                  
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">Optimizes Visuals, Enhances clarity, size, and light.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground"> Helps with diverse vision loss.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">Uses AR and smart processing.</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  This marks a major step toward enabling differently abled individuals to participate productively and independently in society.
                </p>
              </div>
            </div>
          </div>

          {/* A Future of Inclusion */}
          <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  A Future of Inclusion
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The MVPL Group of Companies is already leading by example—employing visually impaired individuals who are aided by Smart Vision Pro Glasses in the workplace. This demonstrates the real-world viability of assistive technology and its role in inclusive employment.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Through Project Bright Vision, we are committed to:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <span className="text-muted-foreground">Raising funds to provide AI-enabled tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <span className="text-muted-foreground">Training beneficiaries to use these tools independently</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                      <span className="text-muted-foreground">Delivering corporate readiness programs to enhance employment opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={indianStudentsInclusive} 
                  alt="Indian students in inclusive learning environment" 
                  className="rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default VisionSection;
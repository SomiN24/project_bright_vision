import { Card, CardContent } from '@/components/ui/card'; // Assuming you'll use Card components
import { AlertTriangle, Lightbulb, Users } from 'lucide-react'; // Example icons

const TheProblem = () => {
  return (
    <section id="the-problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Visually impaired individuals face significant barriers in education and daily life.
          </p>


          
          
            

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📤</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Platform Upload</h4>
                  <p className="text-xs text-muted-foreground">
                    All verified cases uploaded to JSF Trust platform
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀 </span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Crowdfunding Launch</h4>
                  <p className="text-xs text-muted-foreground">
                    Targeted crowdfunding for each verified case
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🗣️</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Monthly Workshops</h4>
                  <p className="text-xs text-muted-foreground">
                    Ongoing training + user feedback collection
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Quarterly AMC Checks</h4>
                  <p className="text-xs text-muted-foreground">
                    Timely maintenance and upgrades
                  </p>
                </div>
              </div>
            
          
        </div>
      </div>
    </section>
  );
};

export default TheProblem;

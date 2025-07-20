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

          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video" // Use aspect-video for responsive 16:9 ratio
              // IMPORTANT: Replace 'dQw4w9WgXcQ' with your actual YouTube video ID.
              // The parameters like autoplay, mute, loop, playlist, enablejsapi, and rel can be adjusted.
              src="https://www.youtube.com/embed/VAaVXs4WfoI"

              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            
          
        </div>
      </div>
    </section>
  );
};

export default TheProblem;

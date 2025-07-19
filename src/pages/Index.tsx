import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import VisionSection from '@/components/VisionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ImplementationSection from '@/components/ImplementationSection';
import FundraisingSection from '@/components/FundraisingSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <VisionSection />
        <HowItWorksSection />
        <ImplementationSection />
        <FundraisingSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

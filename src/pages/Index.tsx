import Header from '@/components/Header';
import ScrollSpyNav from '@/components/ScrollSpyNav';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import TheProblem from '@/components/TheProblem';
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
      <ScrollSpyNav></ScrollSpyNav>
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <TheProblem/>
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

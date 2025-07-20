import Header from '@/components/Header';
import ScrollSpyNav from '@/components/ScrollSpyNav';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import TheProblem from '@/components/TheProblem';
import VisionSection from '@/components/VisionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ImplementationSection from '@/components/ImplementationSection';
import OurProduct from '@/components/OurProduct';
import Financials from '@/components/Financials';
import FundraisingSection from '@/components/FundraisingSection';
import ImpactSection from '@/components/ImpactSection';
import CertificationsLicenses from '@/components/CertificationsLicenses';
import TechnologyPartner from '@/components/TechnologyPartner';
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
        <OurProduct/>
        <Financials />
        <FundraisingSection />
        <ImpactSection />
        <TechnologyPartner />
        <CertificationsLicenses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

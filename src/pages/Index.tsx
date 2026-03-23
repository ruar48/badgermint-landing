import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NFCProfiles from "@/components/NFCProfiles";
import MicroApps from "@/components/MicroApps";
import BlockchainCerts from "@/components/BlockchainCerts";
import UseCases from "@/components/UseCases";
import PartnerSection from "@/components/PartnerSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <Hero />
        <NFCProfiles />
        <MicroApps />
        <BlockchainCerts />
        <UseCases />
        <PartnerSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

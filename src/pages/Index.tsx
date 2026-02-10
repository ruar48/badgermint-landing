import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import MicroApps from "@/components/MicroApps";
import ForDevelopers from "@/components/ForDevelopers";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <MicroApps />
        <ForDevelopers />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import LandingBackground from "@/components/landing/LandingBackground";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Services from "@/components/landing/Services";
import ValueProp from "@/components/landing/ValueProp";
import Process from "@/components/landing/Process";
import Engagements from "@/components/landing/Engagements";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="relative w-full min-h-0 bg-background text-foreground transition-colors duration-500">
      <LandingBackground />
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <ValueProp />
      <Process />
      <Engagements />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;

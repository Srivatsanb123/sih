import React from "react";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import PlatformOverview from "./components/WhySrijanSetu/WhySrijanSetu";
import WhySrijanSetu from "./components/WhySrijanSetu/WhySrijanSetu";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import Assessments from "./components/Assessments/Assessments";
import CollabrationSection from "./components/CollabrationSection/CollabrationSection";
import IntegrationsSection from "./components/IntegrationsSection/IntegrationsSection";
import Testimonials from "./components/Testimonials/Testimonials";
import NewsUpdates from "./components/NewsUpdates/NewsUpdates";
import InterfaceSection from "./components/InterfaceSection/InterfaceSection";
import Footer from "./components/Footer/Footer";
import ProgressSection from "./components/ProgressSection/ProgressSection";
import Discussion from "./components/Discussion/Discussion";

const LandingPage = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="antialiased">
      <Header />
      <HeroSection />
      <Features />
      <WhySrijanSetu />
      <CollabrationSection />
      <InterfaceSection />
      <ToolsSection />
      <Assessments />
      <ProgressSection />
      <Discussion />
      <NewsUpdates />
      <Footer />
    </div>
  );
};

export default LandingPage;

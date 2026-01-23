'use client';

import React, { useEffect, useRef } from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import SolutionsSection from "./components/SolutionsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const LandingPage: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onScrollToContact={scrollToContact} />
        <MissionSection/>
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StorySection from '../components/sections/StorySection';
import WorksSection from '../components/sections/WorksSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {

  return (
    <>
      <HeroSection />
      <StorySection />
      <WorksSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
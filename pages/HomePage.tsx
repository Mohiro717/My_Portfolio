import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StorySection from '../components/sections/StorySection';
import WorksSection from '../components/sections/WorksSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {

  return (
    <>
      <HeroSection />
      <StorySection />
      <WorksSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
import React from 'react';
import { KisNavbar } from '../components/Navbar';
import { KisHero } from '../components/HeroSlider';
import { KisStatsBar } from '../components/StatsBar';
import { KisAbout } from '../components/AboutSection';
import { KisFeatures } from '../components/Features';
import { KisPrincipal } from '../components/PrincipalMessage';
import EventsPreview from '../components/EventsPreview';
import GalleryGrid from '../components/GalleryGrid';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <KisNavbar />
      <KisHero />
      <KisStatsBar />
      <KisFeatures />
      <KisAbout />
      <KisPrincipal />
      <EventsPreview />
      <GalleryGrid />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default HomePage;

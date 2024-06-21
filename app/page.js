import HeroSection from '@/components/HeroSection';
import CompanySection from '@/components/CompanySection';
import AboutSection from '@/components/AboutSection';
import CatalogSection from '@/components/CatalogSection';
import CatalogSwiperSection from '@/components/CatalogSwiperSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutSection />
      <CatalogSection />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}

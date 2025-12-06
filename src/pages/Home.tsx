import {
  HeroSection,
  AboutSection,
  ServicesCarousel,
  HowItWorks,
  StatsSection,
  CaseStudies,
  PartnersCarousel,
  CTASection
} from '../components/home';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesCarousel />
      <HowItWorks />
      <StatsSection />
      <CaseStudies />
      <PartnersCarousel />
      <CTASection />
    </>
  );
}

import {
  HeroSection,
  AboutSection,
  HowItWorks,
  SolutionsPanel,
} from '../components/home';
import { InquirySection } from '../components/common';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SolutionsPanel />
      <HowItWorks />
      <InquirySection
        titleKey="home.inquiry.title"
        descriptionKey="home.inquiry.description"
        buttonKey="home.inquiry.button"
        buttonLink="/contact"
      />
    </>
  );
}

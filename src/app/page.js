import Hero from "./heroSection/Hero";
import HomeGallerySection from "./mainComponents/HomeGallerySection";
import AboutSection from "./aboutSection/AboutSection";
import News from "./newsSection/News";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <HomeGallerySection />
      <AboutSection />
    </>
  );
}

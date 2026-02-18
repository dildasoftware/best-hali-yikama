import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MagicSlider } from "@/components/sections/MagicSlider";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-foam-white">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Sihirli Dokunuş - Before/After Slider */}
      <section id="magic" className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-text mb-4">
            Sihirli Dokunuş
          </h2>
          <p className="text-gray-600 text-lg">
            Gözlerinize inanamayacaksınız.
          </p>
        </div>
        <MagicSlider
          beforeImage="/images/carpet-clean.jpg"
          afterImage="/images/carpet-dirty.jpg"
        />
      </section>

      {/* Gerçek Sonuçlar Galerisi */}
      <section id="showcase">
        <ShowcaseSection />
      </section>

      {/* Hizmetler */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Footer / İletişim */}
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

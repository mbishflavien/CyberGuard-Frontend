import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Stats } from '@/components/home/Stats';
import { WhyCyberGuard } from '@/components/home/WhyCyberGuard';
import { PlatformArchitecture } from '@/components/home/PlatformArchitecture';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { AttackTimeline } from '@/components/home/AttackTimeline';
import { Industries } from '@/components/home/Industries';
import { AfricanInitiative } from '@/components/home/AfricanInitiative';
import { Testimonials } from '@/components/home/Testimonials';
import { Compliance } from '@/components/home/Compliance';
import { Pricing } from '@/components/home/Pricing';
import { FAQ } from '@/components/home/FAQ';
import { CTASection } from '@/components/home/CTASection';
import { BackToTop } from '@/components/shared/BackToTop';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <WhyCyberGuard />
        <PlatformArchitecture />
        <ProductShowcase />
        <AttackTimeline />
        <Industries />
        <AfricanInitiative />
        <Testimonials />
        <Compliance />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

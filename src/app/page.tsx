import HeroSection from "@/components/HeroSection";

import FeaturedCourses from "@/components/FeaturedCourses";
import WhyUs from "@/components/WhyUs";
import AutoScrollCards from "@/components/AutoScrollCards";
import Webinar from '../components/webinar';
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyUs />
      <AutoScrollCards />
      <Webinar/>
    </main>
  );
}

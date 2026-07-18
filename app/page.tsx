import Navbar from "@/components/Navbar";
import Certifications from "@/components/sections/Certifications";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Spotlight from "@/components/effects/Spotlight";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Footer from "@/components/sections/Footer";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030712] text-white">
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
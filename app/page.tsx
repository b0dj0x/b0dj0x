import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Security from '@/components/Security';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Marquee from '@/components/Marquee';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Security />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
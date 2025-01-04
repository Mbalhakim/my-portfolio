import Navbar from '@/components/layout/Navbar';
import  Hero  from '@/components/sections/Hero';
import  Projects  from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

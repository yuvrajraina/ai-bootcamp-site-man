import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Highlights from "@/components/Highlights";
import Syllabus from "@/components/Syllabus";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Instructor />
        <Highlights />
        <Syllabus />
        <Projects />
        <Pricing />
        <FAQ />
        <Register />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}

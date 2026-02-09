import Navbar from "@/components/Navbar";
import Global3DBackdrop from "@/components/Global3DBackdrop";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Instructor from "@/components/Instructor";
import Highlights from "@/components/Highlights";
import Syllabus from "@/components/Syllabus";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <Global3DBackdrop />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Proof />
          <Instructor />
          <Highlights />
          <Syllabus />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
        <MobileCtaBar />
      </div>
    </div>
  );
}

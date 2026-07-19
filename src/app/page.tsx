import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import AboutSeo from "@/components/AboutSeo";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Packages />
        <AboutSeo />
        <Faq />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

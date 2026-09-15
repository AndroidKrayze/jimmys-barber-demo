import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { Services } from "../components/Services";
import { Story } from "../components/Story";
import { Gallery } from "../components/Gallery";
import { Reviews } from "../components/Reviews";
import { Visit } from "../components/Visit";
import { CallBand } from "../components/CallBand";
import { Footer } from "../components/Footer";
import { StickyCallBar } from "../components/StickyCallBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustStrip />
        <Services />
        <Story />
        <Gallery />
        <Reviews />
        <Visit />
        <CallBand />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

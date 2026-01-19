import Header from "@/components/Header";
import Separator from "@/components/Separator";
import Biography from "@/components/Biography";
import Boxes from "@/components/Boxes";
import Highlight from "@/components/Highlight";
import DoubleSection from "@/components/DoubleSection";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import { PaintingProvider } from "@/components/painting/PaintingContext";
import PaintingCarousel from "@/components/painting/PaintingCarousel";
import { descriptions } from "@/content/descriptions";
import Information from "@/components/Information";

export default function Page() {
  return (
    <>
      <Header />
      <Separator id="biographie" title="Biographie" />
      <Biography />
      <Boxes />
      <Highlight />
      <DoubleSection />
      <Separator id="peintures" title="Peintures" />
      <PaintingProvider count={descriptions.length}>
        <PaintingCarousel />
        <Description />
      </PaintingProvider>
      <Information />
      <Footer />
    </>
  );
}

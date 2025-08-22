import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ProductHighlights />
    </div>
  );
}

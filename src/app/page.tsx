import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";
import Hero from "./(section)/Hero";
import About from "./(section)/About";
import Story from "./(section)/Story";
import Reserve from "./(section)/Reserve";
import Reviews from "./(section)/Review";
import Follow from "./(section)/Follow";
import Map from "./(section)/Map";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <Navbar position="absolute" />
        <Hero />
        <About />
        <Story />
        {/* <Menu /> */}
        <Special />
        <Reserve />
        <Reviews />
        <Map/>
        <Follow />
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}

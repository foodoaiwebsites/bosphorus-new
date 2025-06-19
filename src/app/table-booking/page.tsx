import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/submodule/table-ordering/components/Hero";
import TableBooking from "@/submodule/table-ordering/components/TableBooking";


export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000000]">
        <Navbar position="absolute" />
        <Hero imagePath="/images/table-booking/patrick-pahlke-bj3fW8xuZ28-unsplash.jpg" />
        <TableBooking />
        <Footer />
      </div>
    </main>
  );
}

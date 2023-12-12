import Navbar from "@/components/Navbar";
import MoblieNavBar from "@/components/MoblieNavBar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
export default function Home() {
  return (
    <main className="">
      <div className="bg-[url('/Rectangle-289-scaled.jpg')] h-[704px] bg-cover bg-center flex justify-center w-full mt-10">
        <div className="max-w-[1250px] w-full ">
          <Navbar />
          <MoblieNavBar />
          <Hero />
        </div>
      </div>
      <div className=" bg-cover bg-center flex justify-center w-full">
        <div className="max-w-[1250px] w-full ">
          {" "}
          <Services />
        </div>
      </div>
      <Gallery />
      <Philosophy />
    </main>
  );
}

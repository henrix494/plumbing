import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="">
      <div className="bg-[url('/Rectangle-289-scaled.jpg')] h-[704px] bg-cover bg-center flex justify-center w-full mt-10">
        <div className="max-w-[1250px] w-full ">
          <Navbar />
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
    </main>
  );
}

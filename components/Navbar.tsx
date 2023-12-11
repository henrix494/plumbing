import Image from "next/image";
import { navBarLinks } from "@/const/const";
export default function Navbar() {
  return (
    <nav className=" w-full">
      {" "}
      <div className=" fixed top-0 left-0 w-screen bg-[#0f213c]">
        <section className=" h-[40px] text-[white] flex justify-center">
          <div className="max-w-[1250px] w-full flex items-center justify-between bg-[#0f213c] ">
            <div>
              <p className=" text-[#4b89e7]">מספר עסק : 581581</p>
            </div>
            <div className="flex group  ">
              <div className=" bg-[#7B1010] h-[40px] w-[40px] flex items-center justify-center group-hover:bg-[#FF3939] transition-all">
                <Image src={"/phone.svg"} height={20} width={20} alt="phone" />
              </div>
              <button className="bg-[#FF3939] h-[40px] px-8 group-hover:bg-white group-hover:text-[#FF3939] transition-all">
                054-8484151
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="  flex justify-between pt-16    w-full ">
        <div>
          <Image
            src={"/APSI-Logo-with-Lettering.png"}
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        <div className="flex gap-10 text-2xl">
          {" "}
          {navBarLinks.map((item) => {
            return (
              <a key={item.name} className=" text-white">
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

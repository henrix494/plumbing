"use client";
import Image from "next/image";
import { navBarLinks } from "@/const/const";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState({
    element: "",
    isIn: false,
  });
  if (typeof window !== "undefined") {
    const scrollPosition = window.scrollY;
    window.addEventListener("scroll", () => {
      console.log("Scroll position:", scrollPosition);

      if (window.scrollY > 3) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }
  const pathname = usePathname();
  const eleHover = (ele: string) => {
    setIsMouseIn({ element: ele, isIn: true });
  };
  return (
    <nav className=" w-full  ">
      {" "}
      <div className=" fixed top-0 left-0 w-screen bg-[#0f213c] z-[9999999999]">
        <section className=" h-[40px] text-[white] flex justify-center max-sm:h-[100px] ">
          <div className="max-w-[1250px] w-full flex items-center justify-between bg-[#0f213c] max-sm:flex-col max-sm:justify-center max-sm:gap-3">
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
      <div
        className={` max-sm:hidden z-[5000000] ${
          isScrolling || pathname !== "/" ? "mt-0" : "mt-5 "
        }  flex  pt-16 transition-all h-[120px]   w-full justify-between fixed top-0 max-w-[1250px]  items-center`}
      >
        <div className=" z-[5000] ">
          <Image
            className="duration-500 transition-all ease-in-out"
            src={"/APSI-Logo-with-Lettering.png"}
            width={isScrolling || pathname !== "/" ? 150 : 200}
            height={isScrolling || pathname !== "/" ? 150 : 200}
            alt="logo"
          />
        </div>
        <div
          className={`  ${
            isScrolling || pathname !== "/"
              ? "opacity-1 h-[100px]"
              : "opacity-0 h-[200px]"
          } bg-[#09162b]  w-screen fixed  left-0 top-10 
         z-10 duration-500 transition-all ease-in-out`}
        ></div>
        <div className="flex gap-10 text-2xl  z-[10] ">
          {" "}
          {navBarLinks.map((item) => {
            return (
              <Link href={item.href} key={item.name}>
                <button
                  onMouseEnter={() => {
                    eleHover(item.name);
                  }}
                  onMouseLeave={() => {
                    eleHover("");
                  }}
                  key={item.name}
                  className=" text-white cursor-pointer relative "
                >
                  {pathname === item.href && (
                    <div className=" w-[25px] h-1 bg-[red] absolute bottom-[-10px] right-0"></div>
                  )}
                  {isMouseIn.element === item.name && isMouseIn.isIn && (
                    <div className=" w-[25px] h-1 bg-[red] absolute bottom-[-10px] right-0"></div>
                  )}
                  {item.name}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

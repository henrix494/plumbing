"use client";
import Image from "next/image";
import { useState } from "react";

export default function MoblieNavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
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
  return (
    <nav className=" sm:hidden  absolute top-32 w-screen">
      <div className="flex justify-around">
        <Image
          src={"/APSI-Logo-with-Lettering.png"}
          width={150}
          height={150}
          alt="logo"
        />
        <Image
          onClick={onClick}
          src={`${open ? "/close.svg" : "/ham.svg"}`}
          height={40}
          width={40}
          alt="phone"
          className={` z-[9999999999] ${
            isScrolling ? " fixed right-10 " : null
          }`}
        />
      </div>

      <div
        className={`  h-screen bg-white  fixed  w-[80vw] right-0 z-[90000000] top-0  ${
          open
            ? "opacity-100 translate-x-[0%] "
            : "opacity-0 translate-x-[100%]"
        } transition-all duration-500 ease-in-out`}
      >
        sc
      </div>
    </nav>
  );
}

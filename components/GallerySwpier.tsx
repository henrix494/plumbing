"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./styles.css";

export default function GallerySwpier() {
  const initialImages = [
    "/oneOne.jpg",
    "/imgTwo.jpg",
    "/imgThree.jpg",
    "/oneOne.jpg",
    "/imgTwo.jpg",
    "/imgThree.jpg",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className=" mb-8 mt-7 ">
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
      >
        {initialImages.map((img, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="imgSlider cursor-pointer">
                <Image
                  src={img}
                  alt="img"
                  width={isMobile ? 1200 : 500}
                  height={isMobile ? 1200 : 500}
                />
                {img === "/oneOne.jpg" && (
                  <>
                    <p className=" absolute  text-white z-[555555] right-5 bottom-28 text-7xl font-bold ">
                      עיסקי
                    </p>
                    <p className="text-white  text-2xl absolute right-5 bottom-16 z-[555555]">
                      בוילרים, צינורות , תשתיות
                    </p>
                  </>
                )}{" "}
                {img === "/imgTwo.jpg" && (
                  <>
                    <p className=" absolute  text-white z-[555555] right-5 bottom-28 text-7xl font-bold ">
                      עיסקי
                    </p>
                    <p className="text-white  text-2xl absolute right-5 bottom-16 z-[555555]">
                      בוילרים, צינורות , תשתיות
                    </p>
                  </>
                )}{" "}
                {img === "/imgThree.jpg" && (
                  <>
                    <p className=" absolute  text-white z-[555555] right-5 bottom-28 text-7xl font-bold ">
                      עיסקי
                    </p>
                    <p className="text-white  text-2xl absolute right-5 bottom-16 z-[555555]">
                      בוילרים, צינורות , תשתיות
                    </p>
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

/**
 * Renders a component that displays a slideshow of images.
 * The slideshow automatically transitions to the next image every 4 seconds.
 * Users can manually navigate through the images using the left and right buttons.
 */

"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Gallery.css";
const initialImages = ["/oneOne.jpg", "/imgTwo.jpg", "/imgThree.jpg"];

export default function Gallery() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(initialImages);
  const [imageWidth, setImageWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateIndex = (newIndex: number) => {
    setCurrentIndex((prevIndex) => {
      let index = ((newIndex % images.length) + images.length) % images.length; // This ensures the index is always within the bounds of the images array

      controls.start({
        x: isMobile ? -index * imageWidth : -index * 500, // Move to the next image
      });

      // Add a new image to the right side of the screen when the slide goes right
      if (newIndex > prevIndex || newIndex < prevIndex) {
        setImages((prevImages) => [
          ...prevImages,
          "/oneOne.jpg",
          "/imgTwo.jpg",
          "/imgThree.jpg",
        ]);
      }

      return index;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => updateIndex(currentIndex + 1), 6000);
    console.log(images);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  useEffect(() => {
    const viewportWidth = window.innerWidth;
    setImageWidth(viewportWidth);
    setIsMobile(viewportWidth <= 800);
    if (!isMobile) {
      updateIndex(currentIndex + 1);
    }
  }, []);

  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <div className="relative">
        <div className="absolute right-20 bottom-1/2 z-10 max-lg:right-0 ">
          <button
            className=" text-3xl bg-[red] text-white px-3 py-3  flex justify-center items-center translate-y-[50%] "
            onClick={() => updateIndex(currentIndex + 1)}
          >
            <Image src={"rightSVG.svg"} width={30} height={30} alt="arrow" />
          </button>
        </div>
        <div className="absolute left-20 bottom-1/2 z-10 max-lg:left-0">
          <button
            onClick={() => updateIndex(currentIndex - 1)}
            className="text-3xl bg-[red] text-white px-3 py-3  flex justify-center items-center translate-y-[50%] "
          >
            <Image src={"leftArrow.svg"} width={30} height={30} alt="arrow" />
          </button>
        </div>
        <motion.div
          transition={{ type: "spring", duration: 1.5 }}
          animate={controls}
          style={{ display: "flex" }}
          className=" gap-[50px] max-lg:gap-0 max-lg:w-screen  mt-10 "
        >
          <motion.div
            transition={{ type: "spring", duration: 1.5 }}
            animate={controls}
            style={{ display: "flex" }}
            className="gap-[50px] max-lg:gap-0  mt-10 "
          >
            {images.map((src, index) => (
              <div
                key={index}
                className={` max-lg:w-screen test cursor-pointer  transition-all h-[600px] w-[400px]    before:content-[' '] before:w-[400px] before:h-[522.5px] max-sm:before:h-[514px] before:bg-[#01010152] before:z-[500] before:absolute before:top-0`}
              >
                <Image
                  key={index}
                  src={src}
                  width={isMobile ? imageWidth : 400}
                  height={400}
                  alt={`image-${index}`}
                  className={` max-lg:w-screen `}
                />
                {src === "/oneOne.jpg" && (
                  <div
                    className={` absolute top-0 z-[2000]  h-[500px] w-[400px]  flex flex-col items-end justify-end gap-5 px-5 `}
                  >
                    <div>
                      {" "}
                      <p className="text-white  text-6xl font-bold  "> עיסקי</p>
                    </div>
                    <div>
                      <p className="text-white  text-xl">
                        בוילרים, צינורות , תשתיות
                      </p>
                    </div>
                  </div>
                )}{" "}
                {src === "/imgTwo.jpg" && (
                  <div
                    className={` absolute top-0 z-[2000]  h-[500px] w-[400px]  flex flex-col items-end justify-end gap-5 px-5 `}
                  >
                    <div>
                      {" "}
                      <p className="text-white  text-6xl font-bold  "> עיסקי</p>
                    </div>
                    <div>
                      <p className="text-white  text-xl">
                        בוילרים, צינורות , תשתיות
                      </p>
                    </div>
                  </div>
                )}{" "}
                {src === "/imgThree.jpg" && (
                  <div
                    className={` absolute top-0 z-[2000]  h-[500px] w-[400px]  flex flex-col items-end justify-end gap-5 px-5 `}
                  >
                    <div>
                      {" "}
                      <p className="text-white  text-6xl font-bold  "> עיסקי</p>
                    </div>
                    <div>
                      <p className="text-white  text-xl">
                        בוילרים, צינורות , תשתיות
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import Image from "next/image";
export default function Philosophy() {
  return (
    <section className=" relative max-xl:flex max-xl:justify-center max-xl:mt-8  ">
      <div className=" w-[80vw] max-lg:w-[90vw] h-[600px] bg-[#001029] absolute right-[-20px] flex max-xl:static max-xl:flex max-xl:flex-col">
        <div className=" text-white flex flex-col items-center justify-center flex-grow max-xl:order-1">
          <div className=" text-right max-w-[80%] flex flex-col gap-5 max-xl:text-center">
            <p className=" text-6xl font-bold max-lg:text-4xl">
              {" "}
              <span className=" text-[#018AFF]">הפילוסופיה </span>שלנו
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sint
              tenetur sunt autem ea nisi ipsam quia
            </p>
            <button className="bg-[#FF3939] mt-5  max-lg:self-center h-[50px] px-8 group-hover:bg-white  group-hover:text-[#FF3939]  w-[200px] self-end text-2xl hover:bg-[white] hover:text-[#FF3939] transition-all">
              צור קשר
            </button>
          </div>
        </div>
        <div className="bg-[url('/phil.jpg')] w-[60%] max-xl:w-full bg-cover bg-center h-full">
          asc
        </div>
      </div>
    </section>
  );
}

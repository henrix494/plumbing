export default function Hero() {
  return (
    <div className="h-full ">
      <div className=" w-full flex flex-col items-center justify-between h-full mt-[24rem] max-lg:mt-0 max-lg:justify-end ">
        <div className="    w-full text-white pb-32 flex flex-col gap-5 text-right  max-lg:items-center   ">
          {" "}
          <h2 className="text-4xl font-bold ">אינסטלציה ותשתיות</h2>
          <h2 className="  text-7xl font-bold">נסיון רב</h2>
          <h2 className="text-4xl font-bold ">בישראל</h2>
          <button className="bg-[#FF3939]  max-lg:self-center h-[50px] px-8 group-hover:bg-white  group-hover:text-[#FF3939]  w-[200px] self-end text-2xl hover:bg-[white] hover:text-[#FF3939] transition-all">
            צור קשר
          </button>
        </div>
      </div>
    </div>
  );
}

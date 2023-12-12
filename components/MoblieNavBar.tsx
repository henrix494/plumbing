import Image from "next/image";

export default function MoblieNavBar() {
  return (
    <nav className=" sm:hidden  absolute top-32 w-screen">
      <div className="flex justify-around">
        <Image
          src={"/APSI-Logo-with-Lettering.png"}
          width={150}
          height={150}
          alt="logo"
        />
        <Image src={"/ham.svg"} height={40} width={40} alt="phone" />
      </div>
    </nav>
  );
}

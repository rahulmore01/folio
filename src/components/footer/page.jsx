import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center  bg-[#121212] text-white  py-[50px] px-4  monu_ex_reg">
      <Image
        className="text-white pb-6 lg:w-[100px] lg:h-[60px] mg:pb-8"
        src="/assets/logo.svg" // Make sure to provide the actual image source
        alt=""
        width={100}
        height={28}
      />
      {/* <Image
        className="text-white "
        src="/assets/logo.svg" // Make sure to provide the actual image source
        alt=""
        width={100}
        height={60}
      /> */}
      <ul className="flex h-[46px] gap-4  text-[12px] space-x-1 opacity-90 text-neutral-400  lg:gap-6  lg:text-base lg:space-x-2">
        {/* <ul className="flex h-[46px] gap-6 mt-4 text-base space-x-2 opacity-90 text-neutral-400 "> */}
        <li className=" cursor-pointer  hover:text-white ">About</li>
        <li>|</li>
        <li className=" cursor-pointer  hover:text-white">Works</li>
        <li>|</li>
        <li className=" cursor-pointer hover:text-white">Blogs</li>
      </ul>
      <p className="text-[10px] opacity-30 text-center px-4 lg:text-[12px]">
        © All rights reserved by Rahul ✦ Rahul More
      </p>
    </div>
  );
};
export default Footer;

import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#121212] text-white  py-[50px] monu_ex_reg">
      <Image
        className="text-white bg-white"
        src="/assets/Logo.svg" // Make sure to provide the actual image source
        alt=""
        width={140}
        height={60}
      />
      <ul className="flex h-[46px] gap-6 mt-6 text-base space-x-2 opacity-90 ">
        <li className=" cursor-pointer">About</li>
        <li>|</li>
        <li className=" cursor-pointer">Works</li>
        <li>|</li>
        <li className=" cursor-pointer">Blogs</li>
      </ul>
      <p className="text-xs opacity-60">
        © All rights reserved by Rahul ✦ Rahul More
      </p>
    </div>
  );
};
export default Footer;

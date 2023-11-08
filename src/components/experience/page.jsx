import { BsGithub } from "react-icons/bs";
import { RxDash } from "react-icons/rx";
import ce from "../../../public/images/ce.png";
import Image from "next/image";

const Experience = () => {
  return (
    <>
      {/* 2nd bg color- #121212 */}
      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 pb-32">
        <p className="text-xl md:text-[24px] md:mb-14 mt-[74px] mb-10 monu_ex_reg bg-gradient-to-b from-white via-[#e9e9e9] text-transparent bg-clip-text  ">
          {/* <p className="text-4xl mt-[74px] mb-16 monu_ex_reg bg-gradient-to-b from-white via-[#e9e9e9] text-transparent bg-clip-text"> */}
          Intern Experience
        </p>

        <div className="flex flex-col gap-8">
          <ExperienceCard
            title="Code Eater"
            subtitle="Frontend Developer Intern"
            para1="Worked Decentralized portfolio fully responsive.It has features like user authentication
            using metamask and other personal portfolio features"
            para2="Also contributed to other projects like voting dapp, todo 3.0 in frontend side."
            projectImg={ce}
            link="https://www.codeeater.in/"
          />
        </div>
      </div>
    </>
  );
};

const ExperienceCard = ({
  title,
  subtitle,
  para1,
  para2,
  projectImg,
  link,
}) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div
        className="flex flex-col-reverse items-center justify-center gap-10 bg-[#232323] py-6 px-4 md:py-10 rounded-[28px] mx-4 md:mx-14  lg:flex-row lg:gap-4 
 lg:mx-20 lg:px-10 lg:py-14"
      >
        <div>
          <div className=" md:mx-8">
            {/* <div className="w-[500px]"> */}
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] monu_ex_reg">
              {title}
            </h1>
            {/* <h1 className="text-[32px]  monu_ex_reg">{title}</h1> */}
            <h3 className="text-[16px] md:text-[20px] mt-3 mb-2 monu_ex_reg text-neutral-200 lg:text-[20px]">
              {/* <h3 className="text-[20px] mt-3 mb-2 monu_ex_reg opacity-80"> */}
              {subtitle}
            </h3>
            <p className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-300 ">
              {/* <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 "> */}
              <span>
                <RxDash className="text-4xl text-purple-400" />
              </span>

              {para1}
            </p>
            <p className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-300 ">
              <span>
                <RxDash className="text-4xl text-purple-400" />
              </span>

              {para2}
            </p>
            <div className="flex gap-6 justify-start mt-2">
              <a
                href={link}
                target="_blank"
                className="text-[14px] md:text-[16px] cursor-pointer text-gray-200 rounded-xl border px-8 py-[10px] mt-4 bg-[#414141] monu_ex_reg hover:bg-white hover:text-[#414141] lg:te"
              >
                Live
              </a>

              <a
                href="https://github.com/rahulmore01/vote-dapp"
                target="_blank"
              >
                <BsGithub className=" w-11 h-11 text-[#414141] rounded-full border mt-4 bg-white  hover:bg-black" />
              </a>
            </div>
          </div>
        </div>
        <Image
          className="rounded-[20px]"
          src={projectImg}
          alt=""
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export { Experience, ExperienceCard };

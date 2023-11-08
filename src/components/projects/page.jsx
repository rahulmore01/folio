import { BsGithub } from "react-icons/bs";
import { RxDash } from "react-icons/rx";
import blog from "../../../public/images/blog.png";
import bbb from "../../../public/images/bbb.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="w-screen h-[0.8px] bg-zinc-600 "></div>

      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 pb-32 ">
        <p className="text-xl md:text-[24px] md:mb-14 mt-[74px] mb-10 monu_ex_reg bg-gradient-to-b from-white via-[#f3f3f3] text-transparent bg-clip-text ">
          {/* <p className="text-4xl mt-[74px] mb-16 bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text monu_ex_reg"> */}
          Best projects
        </p>
        <div className="flex flex-col gap-12 lg:gap-20">
          <ProjectsCard
            title="BBB Hub"
            subtitle="E-Learning Platform"
            para1="Worked on some important features like referral reward system for students, dark mode & state management etc."
            para2="Used Nextjs along with ant design to create a seamless and responsive frontend."
            projectImg={bbb}
            link="https://butbybit.com/"
            gitLink=""
          />

          <ProjectsCard
            title="Dev Paper"
            subtitle="Blogging Webapp"
            para1="Developed Blogging webapp for Learners to post their learnings and notes which will help them improve documenting their journey in public"
            para2="Implemented Skills like Nextjs 13, Tailwindcss, Mongodb"
            projectImg={blog}
            link=""
            gitLink="https://github.com/rahulmore01/dev_paper_blogapp"
          />
        </div>
        {/* cta bg color #414141 */}

        <Link href="https://github.com/rahulmore01" target="_blank">
          <button className="text-gray-200 bg-[#414141] text-[14px] rounded-lg border border-white py-3 px-7 mt-20  monu_ex_reg hover:text-[#414141] hover:bg-white">
            {/* <button className="text-gray-200 bg-[#414141] text-base rounded-lg border border-white py-3 px-7 mt-20  monu_ex_reg hover:text-[#414141] hover:bg-white"> */}
            View all
          </button>
        </Link>
        <div className="w-screen h-[0.8px] bg-zinc-500 mt-28"></div>
      </div>
    </>
  );
};

const ProjectsCard = ({
  title,
  subtitle,
  para1,
  para2,
  projectImg,
  link,
  gitLink,
}) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div
        className=" flex flex-col-reverse items-center justify-center gap-10 bg-[#232323] py-6 px-4 md:py-10 rounded-[28px] mx-4 md:mx-14  lg:flex-row 
       lg:gap-4 lg:mx-20 lg:px-10 lg:py-14"
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
            <p className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-400">
              {/* <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 "> */}
              <span>
                <RxDash className="text-4xl text-purple-400" />
              </span>

              {para1}
            </p>
            <p className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-400">
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

export { Projects, ProjectsCard };

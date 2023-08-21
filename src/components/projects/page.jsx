import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import edemy from "../../../public/assets/project/edemy.png";
import blog from "../../../public/images/img.png";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      {/* 2nd bg color- #121212 */}
      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8">
        <p className="text-4xl mt-[74px] mb-16 text-white monu_ex_reg">
          Best projects
        </p>
        {/* all the project cards */}
        <div className="flex flex-col gap-24">
          <ProjectsCard
            title="Kspace"
            subtitle="Online edtech platform"
            para1="📌 Developed Referral Reward System for students using Recursive tree which helped increase Kspace users "
            // para1="📌 Developed Dark Mode using ant design and Its context provider, "
            para2="💻 Implemented Skills like Nextjs, AntD COntext api, express, nodejs, mongodb"
            projectImg={edemy}
            link="https://butbybit.com/" // Make sure to provide the actual image source
          />

          <ProjectsCard
            title="Dev Paperr"
            subtitle="Blog like top 1%"
            para1="📌 Developed Blogging webapp for Learners to post their learnings and notes which will help them improve their performance"
            para2="💻 Implemented Skills like Nextjs 13, Tailwindcss, mongodb, cloudinary"
            projectImg={blog}
          />
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="📌 Developed Blogging webapp for Learners to post their learnings and notes which will help them improve their performance"
            para2="💻 Implemented Skills like Nextjs 13, Tailwindcss, mongodb, cloudinary"
            projectImg={blog}
          />
        </div>
        {/* cta bg color #414141 */}
        <button className="text-white bg-[#414141] text-base rounded-lg border border-white py-3 px-7 mt-20  monu_ex_reg">
          View all
        </button>
      </div>
    </>
  );
};

const ProjectsCard = ({ title, subtitle, para1, para2, projectImg, link }) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div className="flex  gap-6 bg-[#232323] p-16 rounded-[28px]">
        <div>
          <div className="w-[500px]">
            <h1 className="text-[32px]  monu_ex_reg">{title}</h1>
            <h3 className="text-[20px] mt-3 mb-2 monu_ex_reg opacity-80">
              {subtitle}
            </h3>
            <p className="text-4 mb-[10px]  space_grotesk text-xl opacity-60 ">
              {para1}
            </p>
            <p className="text-4 mb-[10px]  space_grotesk text-xl opacity-60">
              {para2}
            </p>
            <div className="flex gap-6 justify-start">
              <a
                href={link}
                className="cursor-pointer text-gray-100 rounded-xl border px-8 py-[10px] bg-black monu_ex_reg"
              >
                Live
              </a>

              <a href="a_tag">
                <BsGithub className="bg-transparent w-11 h-11 text-black rounded-full border" />
              </a>
            </div>
          </div>
        </div>
        <Image
          className="rounded-[20px]"
          src={projectImg} // Make sure to provide the actual image source
          alt=""
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export { Projects, ProjectsCard };

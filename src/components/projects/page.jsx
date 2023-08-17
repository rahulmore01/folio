import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import blog from "../../../public/images/img.png";
import Image from "next/image";
const Projects = () => {
  return (
    <>
      {/* 2nd bg color- #121212 */}
      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212]">
        <p className="text-3xl mt-10 mb-12  monu_ex_reg">Best projects</p>
        {/* all the project cards */}
        <div className="flex flex-col gap-20">
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the right message."
            para2="Revamping the track page to elevate its aesthetics and convey the right message."
            projectImg={blog} // Make sure to provide the actual image source
          />

          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the
        right message."
            para2="Revamping the track page to elevate its aesthetics and convey the
        right message."
            projectImg={blog}
          />
          <ProjectsCard
            title="Trainity"
            subtitle="Learn from top 1%"
            para1="Revamping the track page to elevate its aesthetics and convey the
        right message."
            para2="Revamping the track page to elevate its aesthetics and convey the
        right message."
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

const ProjectsCard = ({ title, subtitle, para1, para2, projectImg }) => {
  return (
    <>
      {/* card bg color #232323 */}
      <div className="flex gap-3 bg-[#232323] p-12 rounded-3xl">
        <div>
          <div className="w-[450px]">
            <h1 className="text-[30px]  monu_ex_reg">{title}</h1>
            <h3 className="text-[18px] mt-3 mb-2 monu_ex_reg">{subtitle}</h3>
            <p className="text-4 mb-[10px] leading-[18px] space_grotesk ">
              {para1}
            </p>
            <p className="text-4 mb-[10px] leading-[18px] space_grotesk ">
              {para2}
            </p>
            <div className="flex gap-6 justify-start">
              <a href="a_tag">
                <BsGithub className="bg-transparent w-10 h-10 text-gray-300" />
              </a>
              <a href="a_tag">
                <BsFillArrowUpRightCircleFill className="bg-transparent w-10 h-10 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <Image
          className="rounded-[20px]"
          src={projectImg} // Make sure to provide the actual image source
          alt=""
          width={400}
          height={230}
        />
      </div>
    </>
  );
};

export { Projects, ProjectsCard };

"use client";
import { BsGithub } from "react-icons/bs";
import { RxDash } from "react-icons/rx";
import { useState } from "react";
import projectsData from "@/projectsData/projectsData.json"; // Import the project data

const Singleproject = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 pb-32">
        <p className="text-4xl mt-[74px] mb-10 bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text monu_ex_reg">
          Projects
        </p>
        <div className="flex justify-center items-center gap-6 mb-20 w-full py-3 bg-[#5353531d] backdrop-blur-lg">
          <button
            onClick={() => handleCategory("All")}
            className={`opacity-60 hover:opacity-100 ${
              currentCategory === "All" ? "text-white" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategory("Frontend")}
            className={`opacity-60 hover:opacity-100 ${
              currentCategory === "Frontend" ? "text-white" : ""
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleCategory("FullStack")}
            className={`opacity-60 hover:opacity-100 ${
              currentCategory === "FullStack" ? "text-white" : ""
            }`}
          >
            FullStack
          </button>
          <button
            onClick={() => handleCategory("Tailwind")}
            className={`opacity-60 hover:opacity-100 ${
              currentCategory === "Tailwind" ? "text-white" : ""
            }`}
          >
            Tailwind
          </button>
        </div>

        <div className="flex flex-col gap-24">
          {projectsData
            .filter(
              (project) =>
                currentCategory === "All" ||
                project.category.includes(currentCategory)
            )
            .map((project, index) => (
              <ProjectsCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                para1={project.para1}
                para2={project.para2}
                link={project.link}
                gitLink={project.gitLink}
              />
            ))}
        </div>
      </div>
    </>
  );
};

const ProjectsCard = ({ title, subtitle, para1, para2, link, gitLink }) => {
  return (
    <>
      <div className="flex gap-10 bg-[#232323] py-11 px-12  rounded-[28px]">
        <div>
          <div className="w-[1000px]">
            <h1 className="text-[32px]  monu_ex_reg">{title}</h1>
            <h3 className="text-[20px] mt-3 mb-2 monu_ex_reg opacity-80">
              {subtitle}
            </h3>
            <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 ">
              <RxDash className="text-4xl text-purple-400" />
              {para1}
            </p>
            <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 ">
              <span>
                <RxDash className="text-4xl text-purple-400" />
              </span>
              {para2}
            </p>
            <div className="flex gap-6 justify-start mt-2">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer text-gray-200 rounded-xl border px-8 py-[10px] mt-4 bg-[#414141] monu_ex_reg hover:bg-white hover:text-[#414141]"
              >
                Live
              </a>
              <a href={gitLink} target="_blank">
                <BsGithub className="w-11 h-11 text-[#414141] rounded-full border mt-4 bg-white  hover:bg-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Singleproject, ProjectsCard };

// import { BsGithub } from "react-icons/bs";
// import { RxDash } from "react-icons/rx";
// import blog from "../../../public/images/blog.png";
// import bbb from "../../../public/images/bbb.png";
// import Image from "next/image";
// import Link from "next/link";

// const Singleproject = () => {
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 pb-32">
//         <p className="text-4xl mt-[74px] mb-10 bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text monu_ex_reg">
//           Projects
//         </p>
//         <div className="flex justify-center items-center gap-6 mb-20 w-full py-3 bg-[#5353531d] backdrop-blur-lg">
//           <button className="opacity-60 hover:opacity-100">Frontend</button>
//           <button className="opacity-60 hover:opacity-100">Typescript</button>
//           <button className="opacity-60 hover:opacity-100">Tailwind</button>
//           <button className="opacity-60 hover:opacity-100">Reactjs</button>
//           <button className="opacity-60 hover:opacity-100">Nextjs</button>
//           <button className="opacity-60 hover:opacity-100">FullStack</button>
//         </div>
//         <div className="flex flex-col gap-24">
//           <ProjectsCard
//             title="BBB Hub"
//             subtitle="E-Learning Platform"
//             para1="Worked on some important features like referral reward system for students, dark mode & state management etc."
//             para2="Used Nextjs along with ant design to create a seamless and responsive frontend."
//             projectImg={bbb}
//             link="https://butbybit.com/"
//             gitLink=""
//           />
//           <ProjectsCard
//             title="Dev Paper"
//             subtitle="Blogging Webapp"
//             para1="Developed Blogging webapp for Learners to post their learnings and notes which will help them improve documenting their journey in public"
//             para2="Implemented Skills like Nextjs 13, Tailwindcss, Mongodb"
//             projectImg={blog}
//             link=""
//             gitLink="https://github.com/rahulmore01/dev_paper_blogapp"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// const ProjectsCard = ({
//   category,
//   title,
//   subtitle,
//   para1,
//   para2,
//   projectImg,
//   link,
//   gitLink,
// }) => {
//   return (
//     <>
//       {/* card bg color #232323 */}
//       <div className="flex  gap-10 bg-[#232323] py-11 px-12  rounded-[28px]">
//         <div>
//           <div className="w-[500px]">
//             <h1 className="text-[32px]  monu_ex_reg">{title}</h1>
//             <h3 className="text-[20px] mt-3 mb-2 monu_ex_reg opacity-80">
//               {subtitle}
//             </h3>
//             <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 ">
//               <span>
//                 <RxDash className="text-4xl text-purple-400" />
//               </span>

//               {para1}
//             </p>
//             <p className="flex text-lg mb-[10px]  space_grotesk opacity-60 ">
//               <span>
//                 <RxDash className="text-4xl text-purple-400" />
//               </span>

//               {para2}
//             </p>
//             <div className="flex gap-6 justify-start mt-2">
//               <a
//                 href={link}
//                 target="_blank"
//                 className="cursor-pointer text-gray-200 rounded-xl border px-8 py-[10px] mt-4 bg-[#414141] monu_ex_reg hover:bg-white hover:text-[#414141]"
//               >
//                 Live
//               </a>

//               <a href={gitLink} target="_blank">
//                 <BsGithub className=" w-11 h-11 text-[#414141] rounded-full border mt-4 bg-white  hover:bg-black" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <Image
//           className="rounded-[20px]"
//           src={projectImg}
//           alt=""
//           width={500}
//           height={300}
//         />
//       </div>
//     </>
//   );
// };

// export { Singleproject, ProjectsCard };

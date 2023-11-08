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
      <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 ">
        <p className="text-xl lg:text-4xl mt-[64px] mb-6 bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text monu_ex_reg">
          Projects
        </p>
        <div className="flex justify-center items-center lg:gap-6 mb-14 w-screen lg:w-full  py-3 bg-[#5353531d] text-[14px] lg:text-[16px]  gap-2">
          {/* <div className="flex justify-center items-center gap-6 mb-14 w-full py-3 bg-[#5353531d] text-[10px] "> */}
          <button
            onClick={() => handleCategory("All")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "All" ? "text-white" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleCategory("Frontend")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "Frontend" ? "text-white" : ""
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleCategory("Typescript")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "Typescript" ? "text-white" : ""
            }`}
          >
            Typescript
          </button>

          <button
            onClick={() => handleCategory("Reactjs")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "Reactjs" ? "text-white" : ""
            }`}
          >
            Reactjs
          </button>
          <button
            onClick={() => handleCategory("Nextjs")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "Nextjs" ? "text-white" : ""
            }`}
          >
            Nextjs
          </button>

          <button
            onClick={() => handleCategory("FullStack")}
            className={`text-neutral-400 hover:text-white ${
              currentCategory === "FullStack" ? "text-white" : ""
            }`}
          >
            FullStack
          </button>
        </div>
        {/* scroll section here */}
        <div className="overflow-scroll h-screen w-screen flex justify-center items-center mb-10">
          <div className="flex justify-center  flex-wrap h-screen gap-8 mx-4  md:">
            {/* <div className="flex justify-center items-center flex-wrap h-screen gap-8 mx-4 lg:mx-20 md:"> */}
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
      </div>
    </>
  );
};

const ProjectsCard = ({ title, subtitle, para1, para2, link, gitLink }) => {
  return (
    <>
      <div className="flex gap-10 bg-[#232323] py-7 px-7  rounded-[20px] w-auto lg:w-[400px] md:w-[300px]  md:rounded-[16px] md:py-5 md:px-5">
        <div>
          <div>
            <h1 className="text-[24px] md:text-[20px]  monu_ex_reg">{title}</h1>
            <h3 className="text-[18px] md:text-[16px] mt-3 mb-2 monu_ex_reg text-neutral-200">
              {subtitle}
            </h3>
            <p className="flex text-[16px] md:text-[14px] mb-[10px]  space_grotesk text-neutral-400">
              {para1}
            </p>
            <p className="flex text-[16px] mb-[10px]  space_grotesk text-neutral-400 ">
              <span></span>
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
// "use client";
// import { BsGithub } from "react-icons/bs";
// import { RxDash } from "react-icons/rx";
// import { useState } from "react";
// import projectsData from "@/projectsData/projectsData.json"; // Import the project data

// const Singleproject = () => {
//   const [currentCategory, setCurrentCategory] = useState("All");

//   const handleCategory = (category) => {
//     setCurrentCategory(category);
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center h-auto w-full text-white bg-[#121212] pt-8 ">
//         <p className="text-4xl mt-[64px] mb-6 bg-gradient-to-b from-white via-[#f2f2f2] text-transparent bg-clip-text monu_ex_reg">
//           Projects
//         </p>
//         <div className="flex justify-center items-center gap-6 mb-14 w-full py-3 bg-[#5353531d]">
//           <button
//             onClick={() => handleCategory("All")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "All" ? "text-white" : ""
//             }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => handleCategory("Frontend")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "Frontend" ? "text-white" : ""
//             }`}
//           >
//             Frontend
//           </button>
//           <button
//             onClick={() => handleCategory("Typescript")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "Typescript" ? "text-white" : ""
//             }`}
//           >
//             Typescript
//           </button>
//           <button
//             onClick={() => handleCategory("Tailwind")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "Tailwind" ? "text-white" : ""
//             }`}
//           >
//             Tailwind
//           </button>
//           <button
//             onClick={() => handleCategory("Reactjs")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "Reactjs" ? "text-white" : ""
//             }`}
//           >
//             Reactjs
//           </button>
//           <button
//             onClick={() => handleCategory("Nextjs")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "Nextjs" ? "text-white" : ""
//             }`}
//           >
//             Nextjs
//           </button>

//           <button
//             onClick={() => handleCategory("FullStack")}
//             className={`text-neutral-400 hover:text-white ${
//               currentCategory === "FullStack" ? "text-white" : ""
//             }`}
//           >
//             FullStack
//           </button>
//         </div>
//         {/* scroll section here */}
//         <div className="overflow-scroll h-screen w-screen">
//           <div className="flex flex-wrap gap-8 mx-20">
//             {projectsData
//               .filter(
//                 (project) =>
//                   currentCategory === "All" ||
//                   project.category.includes(currentCategory)
//               )
//               .map((project, index) => (
//                 <ProjectsCard
//                   key={index}
//                   title={project.title}
//                   subtitle={project.subtitle}
//                   para1={project.para1}
//                   para2={project.para2}
//                   link={project.link}
//                   gitLink={project.gitLink}
//                 />
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const ProjectsCard = ({ title, subtitle, para1, para2, link, gitLink }) => {
//   return (
//     <>
//       <div className="flex gap-10 bg-[#232323] py-7 px-7  rounded-[20px] w-[400px]">
//         <div>
//           <div>
//             <h1 className="text-[24px]  monu_ex_reg">{title}</h1>
//             <h3 className="text-[18px] mt-3 mb-2 monu_ex_reg opacity-80">
//               {subtitle}
//             </h3>
//             <p className="flex text-[16px] mb-[10px]  space_grotesk opacity-60 ">
//               {para1}
//             </p>
//             <p className="flex text-[16px] mb-[10px]  space_grotesk opacity-60 ">
//               <span></span>
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
//                 <BsGithub className="w-11 h-11 text-[#414141] rounded-full border mt-4 bg-white  hover:bg-black" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export { Singleproject, ProjectsCard };

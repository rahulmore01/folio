"use client";
import { Element } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";
import useCursorAnimation from "../../hook/useCursorAnimation";
import { motion } from "framer-motion";

const Hero = () => {
  const { variants, textEnter, textLeave, cursorVariant } =
    useCursorAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // You can adjust this threshold value to control when the image disappears
    const threshold = 100; // Adjust this value as needed

    if (scrollY > threshold) {
      setImageVisible(false);
    } else {
      setImageVisible(true);
    }
  }, [scrollY]);

  return (
    <Element name="hero">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        className="flex items-center justify-center h-screen bg-[#000000] text-white monu_ex_reg"
        style={{
          backgroundImage: `url(/assets/gridlight.png)`, // Update the path
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-xl  md:text-[24px] lg:text-3xl"
            >
              <span className=" bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text">
                I'm{" "}
              </span>

              <span className=" bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text">
                Rahul.
              </span>
            </h1>
            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-xl text-center mt-3 bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text md:text-[24px] lg:text-3xl"
            >
              I develop creative web applications
            </h1>
          </div>
          {/* cta */}
          <div className="flex flex-col gap-6 mt-10 text-[14px] lg:text-[16px] md:text-[18px] lg:flex-row md:flex-row">
            <div className="cursor-pointer text-gray-100 rounded-xl border px-10 py-[14px] bg-[#414141] hover:bg-white hover:text-black">
              Hire Me
            </div>
            <div className="cursor-pointer text-neutral-400 rounded-xl border px-10 py-[14px] hover:text-gray-100 hover:border-white">
              Projects
            </div>
          </div>

          {imageVisible && (
            <Image
              className="h-20 w-20 fixed mt-[88vh] hover:opacity-0"
              src="/images/rahul.png"
              alt="me"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </Element>
  );
};

export default Hero;

// "use client";
// import Image from "next/image";
// import useCursorAnimation from "../../hook/useCursorAnimation";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const { variants, textEnter, textLeave, cursorVariant } =
//     useCursorAnimation();

//   return (
//     <section className="hero ">
//       <motion.div
//         className="cursor"
//         variants={variants}
//         animate={cursorVariant}
//       />
//       <div
//         className="flex items-center justify-center h-screen bg-[#000000] text-white monu_ex_reg"
//         style={{
//           backgroundImage: `url(/assets/gridlight.png)`, // Update the path
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="flex flex-col justify-center items-center">
//           <div className="flex flex-col justify-center items-center">
//             <h1
//               onMouseEnter={textEnter}
//               onMouseLeave={textLeave}
//               className="text-xl  md:text-[24px] lg:text-3xl"
//               // className="text-3xl"
//             >
//               <span className=" bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text   ">
//                 I'm{" "}
//               </span>

//               <span className=" bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text">
//                 Rahul.
//               </span>
//             </h1>
//             <h1
//               onMouseEnter={textEnter}
//               onMouseLeave={textLeave}
//               className="text-xl text-center mt-3 bg-gradient-to-b from-white via-[#f5f5f5] text-transparent bg-clip-text md:text-[24px] lg:text-3xl"
//             >
//               I develop creative web applications
//             </h1>
//           </div>
//           {/* cta */}
//           <div className="flex flex-col gap-6 mt-10 text-[14px] lg:text-[16px] md:text-[18px] lg:flex-row md:flex-row">
//             {/* <div className="flex gap-6 mt-10 text-lg"> */}
//             <div className="cursor-pointer text-gray-100 rounded-xl border px-10 py-[14px]  bg-[#414141] hover:bg-white hover:text-black ">
//               Hire Me
//             </div>
//             <div className="cursor-pointer text-neutral-400 rounded-xl border px-10 py-[14px]  hover:text-gray-100 hover:border-white">
//               Projects
//             </div>
//           </div>

//           <Image
//             className="h-20 w-20 fixed mt-[88vh] hover:opacity-0"
//             src="/images/rahul.png"
//             alt="me"
//             width="100"
//             height="100"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import gridSvg from "../../../public/assets/grid.png"; // Import your SVG image

import Image from "next/image";

const Hero = () => {
  return (
    // bg-[#181818]
    <div
      className="flex items-center justify-center h-screen bg-[#000000] text-white monu_ex_reg"
      style={{
        backgroundImage: `url(/assets/gridlight.png)`, // Update the path
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">
            I'm <span>Rahul</span>
          </h1>
          <h1 className="text-3xl mt-4">I develop creative web applications</h1>
        </div>
        {/* cta */}
        <div className="flex gap-6 mt-10 ">
          <div className="cursor-pointer text-gray-100 rounded-xl border px-8 py-[10px] bg-gray-600">
            Hire Me
          </div>
          <div className="cursor-pointer text-gray-100 rounded-xl border px-8 py-[10px] ">
            Projects
          </div>
        </div>
      </div>
      {/* <Image src="/assets/grid.png" height={100} width={100} /> */}
    </div>
  );
};

export default Hero;

// "use client";
// import Image from "next/image";
// const Hero = () => {
//   return (
//     <Image width={100%} height={100%} src="/assets/grid.svg">
//       <div className="flex items-center justify-center h-screen bg-[#181818] text-white monu_ex_reg">
//         <div className="text-center">
//           <div className="hero_text">
//             <div className="hero_text_title">I'm Rahul</div>
//             <div className="hero_text_subtitle">
//               I develop creative web applications
//             </div>
//           </div>
//           {/* cta */}
//           <div className="hero_cta mt-4">
//             <div className="px-4 py-2 border border-sky-500">Let's talk</div>
//             <div className="hero_cta_next">View work</div>
//           </div>
//         </div>
//       </div>
//     </Image>
//   );
// };

// export default Hero;

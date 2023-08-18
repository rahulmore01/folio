"use client";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#181818] text-white monu_ex_reg">
      <div className="text-center">
        <div className="hero_text">
          <div className="hero_text_title">I'm Rahul</div>
          <div className="hero_text_subtitle">
            I develop creative web applications
          </div>
        </div>
        {/* cta */}
        <div className="hero_cta mt-4">
          <div className="px-4 py-2 border border-sky-500">Let's talk</div>
          <div className="hero_cta_next">View work</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

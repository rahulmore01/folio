import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#121212] py-20  px-12 lg:px-8  lg:pt-[200px]">
      {/* <div className="flex items-center justify-center  bg-[#121212] py-32"> */}
      <div className="flex flex-col items-center justify-center  bg-[#232323] text-white  py-[40px] px-6 rounded-[24px] monu_ex_reg lg:w-[1040px] lg:[50px]">
        {/* <div className="flex flex-col items-center justify-center w-[1080px] bg-[#232323] text-white  py-[50px] rounded-[36px] monu_ex_reg"> */}
        <h1 className="text-[24px] pb-6 bg-gradient-to-b from-white via-[#b0b0b0] text-transparent bg-clip-text lg:pb-8 lg:text-[32px]">
          {/* <h1 className="text-[32px] pb-8 bg-gradient-to-b from-white via-[#b0b0b0] text-transparent bg-clip-text"> */}
          Get In Touch
        </h1>

        <div className="flex flex-col-reverse md:flex-row md:gap-20 md:px-10 justify-center items-center gap-10 lg:gap-36 lg:pb-6 ">
          {/* <div className="flex gap-36 pb-6"> */}
          <div className=" space_grotesk opacity-90  ">
            <h3 className="text-[16px] mb-8 space_grotesk opacity-75 lg:text-[20px]">
              Want to create awesomeness together? <br /> Got questions? Let’s
              {/* Want to create awesomeness together? <br /> Got questions? Let’s */}
              talk.
            </h3>
            {/* replace a with Link */}
            <a
              href="https://api.whatsapp.com/send?phone=919309897103"
              target="_blank"
              className="contact_text_whatsapp_a"
            >
              <p className=" flex items-center justify-start mb-[18px] text-[18px] space-x-2 hover:text-[#42D93D] lg:text-[22px]">
                {/* <p className=" flex items-center justify-start mb-[18px] text-[22px] space-x-2 hover:text-[#42D93D]"> */}
                <IoLogoWhatsapp className="w-8 h-8" />
                <span className="text-center font-bold">Whatsapp</span>
              </p>
            </a>

            <a
              href="mailto:morerahul620@gmail.com"
              target="_blank"
              className="contact_text_email_a"
            >
              <p className="flex items-center justify-start mb-[18px] text-[18px] space-x-2 hover:text-[#D85140] lg:text-[22px]">
                <MdEmail className="w-8 h-8" />
                <span>morerahul620@gmail.com</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-more-%F0%9F%8E%AF-540b8b156/"
              target="_blank"
              className="contact_text_linkedin_a"
            >
              <p className="flex items-center justify-start mb-[18px] text-[18px] space-x-2 hover:text-[#3476DF] lg:text-[22px]">
                <AiFillLinkedin className="w-8 h-8" />
                <span>Rahul-More</span>
              </p>
            </a>
          </div>

          <Image
            className="lg:w-[260px] lg:h-auto"
            src="/assets/msg.png"
            width={180}
            height={200}
          />
          {/* <Image src="/assets/msg.png" width={260} height={200} /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

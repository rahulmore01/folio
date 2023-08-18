import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
// import logo from "../../assets/images/logo.svg";

const Contact = () => {
  return (
    <div className="flex items-center justify-center  bg-[#121212] py-32">
      <div className="flex flex-col items-center justify-center w-[1080px] bg-[#232323] text-white  py-[50px] rounded-[36px] monu_ex_reg">
        <h1 className="text-[32px] pb-12 ">Let's Get In Touch</h1>

        <div className="flex gap-36 pb-6">
          <div className=" space_grotesk">
            <h3 className="text-[20px] mb-8 space_grotesk">
              Want to create awesomeness together? <br /> Got questions? Let’s
              talk.
            </h3>
            {/* replace a with Link */}
            <a className="contact_text_whatsapp_a">
              <p className="flex items-center justify-start mb-[18px] text-[22px] space-x-2">
                <IoLogoWhatsapp className="w-8 h-8" />
                <span className="text-center font-bold">Whatsapp</span>
              </p>
            </a>

            <a href="" className="contact_text_email_a">
              <p className="flex items-center justify-start mb-[18px] text-[22px] space-x-2">
                <MdEmail className="w-8 h-8" />
                <span>morerahul620@gmail.com</span>
              </p>
            </a>
            <a href="" className="contact_text_linkedin_a">
              <p className="flex items-center justify-start mb-[18px] text-[22px] space-x-2">
                <AiFillLinkedin className="w-8 h-8" />
                <span>Rahul-More</span>
              </p>
            </a>
          </div>

          <Image src="/assets/msg.png" width={260} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

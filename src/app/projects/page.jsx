import Navbar from "@/components/navbar/page";
import { Projects } from "@/components/projects/page";
import Foooter from "@/components/footer/page";
import React from "react";
import Contact from "@/components/contact/page";
import {
  Allprojects,
  Singleproject,
} from "@/components/singleproject/singleproject";

const page = () => {
  return (
    <section className="hero">
      <Navbar />

      <Singleproject />
      <Contact />
      <Foooter />
    </section>
  );
};

export default page;

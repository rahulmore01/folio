"use client";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import { Projects } from "@/components/projects/page";
import { Blog } from "@/components/blog/page";
import Footer from "@/components/footer/page";
import Contact from "@/components/contact/page";
import { Experience } from "@/components/experience/page";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />

      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

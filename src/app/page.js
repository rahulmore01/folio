"use client";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import { Projects } from "@/components/projects/page";
import { Blog } from "@/components/blog/page";
import Aboutme from "@/components/aboutme/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Blog />
      <Aboutme />
    </>
  );
}

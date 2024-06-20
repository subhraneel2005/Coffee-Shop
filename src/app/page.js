"use client"

import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <div className="relative">
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
    </div>
  );
}

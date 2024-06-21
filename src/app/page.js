"use client"

import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Lenis from 'lenis'
import { useEffect } from "react";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

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
    <div className="relative select-none overflow-hidden">
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <MenuSection/>
      <TestimonialsSection/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

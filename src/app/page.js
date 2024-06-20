"use client"

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

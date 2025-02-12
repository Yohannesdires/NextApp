import React from 'react'
import About from "../components/about/aboutHero";
import WhyUs from "../components/about/whyUs";
import Feature from "../components/about/Features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us for my project",
  description: "Developed by Yohannis Dires",
};


const Aboutus = () => {
  return (
    <div>
        <About />
        <WhyUs />
        <Feature />
    </div>
  )
}

export default Aboutus
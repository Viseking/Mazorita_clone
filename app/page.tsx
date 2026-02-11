'use client'
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"
import Navbar from "./components/navbar"
import HeroSection from "./components/herosection"
import Cocktails from "./components/cocktails"
import About from "./components/about"

gsap.registerPlugin(SplitText, ScrollTrigger)



export default function Home(){
  return (
    <main>

    <Navbar/>
    <HeroSection/>
    <Cocktails/>
    <About/>
    </main>
  )
}
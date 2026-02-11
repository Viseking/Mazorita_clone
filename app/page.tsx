'use client'
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"
import Navbar from "./components/navbar"
import HeroSection from "./components/herosection"

gsap.registerPlugin(SplitText, ScrollTrigger)
const GsapTop = () => {
  gsap.fromTo(
    "#title",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    }
  ),[]
}


export default function Home(){
  return (
    <main>

    <Navbar/>
    <HeroSection/>
    <div className="page min-h-screen">

    </div>
    </main>
  )
}
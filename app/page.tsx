'use client'
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"

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
    <div className="bg-white dark:bg-black min-h-screen w-screen flex  justify-center overflow-hidden">
      <h1 onClick={GsapTop} id='title' className="text-3xl font-bold  text-black dark:text-white"> Mozorita Clone</h1>
    </div>
  )
}
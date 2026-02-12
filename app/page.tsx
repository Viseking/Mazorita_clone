'use client'
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"
import Navbar from "./components/navbar"
import HeroSection from "./components/herosection"
import Cocktails from "./components/cocktails"
import About from "./components/about"
import Art from "./components/art"
import Menu from "./components/Menu"
import Contact from "./components/contact"

gsap.registerPlugin(SplitText, ScrollTrigger)



export default function Home(){
  return (
    <main>

    <Navbar/>
    <HeroSection/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
    </main>
  )
}
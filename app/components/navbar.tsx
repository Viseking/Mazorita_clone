'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { navLinks } from "../context/List";

export default function Navbar() {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "navbar",
                start: "bottom top",
            },
        })
        navTween.fromTo('navbar',
            { backgroundColor: "transparent" },
            {
                backgroundColor: "#00000050", duration: 1,
                backgroundFilter: "blur(10px)",
                ease: "power2.out",
            }
        )
    }, [])
    return (
        <nav >
            <div >
                <a href="#home" className="flex items-center gap-2">
                    <img src="images/logo.png" alt="logo" />
                    <p>Mozorita</p>
                </a>
                <ul className="nav-links flex items-center gap-6" >
                    {navLinks.map((link) => (
                        <li key={link.id} suppressContentEditableWarning>
                            <a href={`#${link.id}`} className="text-lg capitalize">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}   
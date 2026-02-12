'use client'
import { featureLists, goodLists } from "../context/List"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"




function Art() {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top"

        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: "bottom center",
                scrub: 1.5,
                pin: true,

            }
        })
        maskedTimeline.to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
        maskedTimeline.to(".masked-img", { scale: 1.3, maskPosition: "center", maskSize: "400%", ease: "power1.inOut", duration: 1 })
        maskedTimeline.to("#masked-content", { opacity: 1, ease: "power1.inOut", duration: 1 }, "-=0.5")

    }, [])
    return (
        <div id="art">
            <section className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The Art</h2>
                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center  gap-2">
                                <img src="images/check.png" alt="check" />
                                <p >{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img src="images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />

                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((feature, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="images/check.png" alt="check" />
                                <p className="md:w-fit w-60">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="masked-container">
                    <h2 className="will-fade">Sip Worthy Perfection</h2>
                    <div id="masked-content">
                        <h2>Made With Craft, Pourded With Passion</h2>
                        <p>This isnt just a drink, it's a masterpiece of flavor and artistry.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Art

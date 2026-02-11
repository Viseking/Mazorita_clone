import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../context/List";
import { useGSAP } from "@gsap/react";


function Cocktails() {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        });
        parallaxTimeline.from('#c-left-leaf', { x: -100, y:100 }, 0);
        parallaxTimeline.from('#c-right-leaf', { y: -100, x:100 }, 0);
        
    },[])
    return (<>
    <section className="noisy" id="cocktails">
        <img src="images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
        <img src="images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />


        <div className="list">
            <div className="popular">
                <h2>Most Popular Cocktails</h2>

                <ul>
                    {cocktailLists.map(drink =>(
                        <li key={drink.name}>
                            <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.detail} | {drink.country}</p>

                            </div>
                            <span>- {drink.price}</span>

                        </li>
                    ))}
                </ul>

            </div>
            <div className="loved">
                <h2>Most Loved Cocktails</h2>

                <ul>
                    {mockTailLists.map(drink =>(
                        <li key={drink.name}>
                            <div className="me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.detail} | {drink.country}</p>

                            </div>
                            <span>- {drink.price}</span>

                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    </section>
    
    
    </>)
}

export default Cocktails;
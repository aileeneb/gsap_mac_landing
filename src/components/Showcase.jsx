import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {

    const Showcase = () => {
        const isTablet = useMediaQuery('(max-width: 1024px)');

        useGSAP(() => {
            if (isTablet) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#showcase',
                        start: 'top top',
                        end:'bottom top',
                        scrub: true,
                        pin: true,
                    }
                });
                timeline.to('mask img',{
                    transform:'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in'});
            }
        }, [isTablet])
    }

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                    <h2> Rocket Chip.</h2>
                    <div className="space-y-5 mt-7 pe-10 ">
                        <p>
                            Introducing {" "}
                            <span className="text-white">
                                M4, the next generation of Apple Silicon
                            </span>
                            , m4 powers
                        </p>
                        <p>
                            The M4 chip is a new generation of Apple's processor used in newer MacBooks like the 2025 MacBook Air and MacBook Pro, offering faster performance, longer battery life, and enhanced AI capabilities. Key improvements include a more powerful CPU and GPU, a new Neural Engine for AI, and features like the ability to connect to two external displays (on some M4 models). The M4 chip powers both the entry-level MacBook Air and more powerful MacBook Pro models, which come with the M4 Pro and M4 Max variants.
                        </p>
                        <p>
                            Remarkably light and less than half an inch thin, MacBook Air fits easily into your on-the-go lifestyle — and your bag. MacBook Air with M4 is made with over 50 percent recycled materials and has a durable recycled aluminum enclosure.
                        </p>
                        <p className="text-primary"> Learn more about Apple Intelligence</p>
                         </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p> Up to </p>
                            <h3> 4x faster</h3>
                            <p> pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p> Up to </p>
                            <h3> 1.5x faster</h3>
                            <p> CPU performance than M2</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default Showcase

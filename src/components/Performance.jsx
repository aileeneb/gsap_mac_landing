import {useRef} from "react";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {performanceImages, performanceImgPositions} from "../constants/index.js";

const Performance = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
    const sectionRef = useRef(null);


    useGSAP(() => {
        // Ensure ScrollTrigger is registered
        gsap.registerPlugin(ScrollTrigger);

        // Text fade-in and slight move up when it scrolls into view
        gsap.fromTo(
            ".content p",
            { opacity: 0, y: 10 },
            {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: '.content p',
                            start: "top bottom",
                            end: "top center",
                            scrub: true,
                            invalidateOnRefresh: true,
                },
            }
        );

        if(isMobile) return;

        const tl = gsap.timeline({
            defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "center center",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
        //Position each performance image
        performanceImgPositions.forEach((pos) => {
            if (pos.id === "p5") return; // skip p5

            const toVars = {};
            if ( pos.left != undefined ) toVars.left = `${pos.left}%`;
            if ( pos.right != undefined ) toVars.right = `${pos.right}%`;
            if ( pos.bottom != undefined ) toVars.bottom = `${pos.bottom}%`;
            if ( pos.transform != undefined ) toVars.transform = pos.transform;

            tl.to(`.${pos.id}`, toVars, 0); // all at time 0
        });


        /*// Desktop-only image timeline with a single scrubbed ScrollTrigger
        if (!isMobile)  return;
        const tl = gsap.timeline({
            defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        //Position each performance image
            performanceImgPositions.forEach((pos) => {
                if (pos.id === "p5") return; // skip p5 per requirement
                const selector = `img.${pos.id}`;
                const vars = {};
                if (typeof item.left === "number") vars.left = '${item.left}%';
                if (typeof item.right ==="number") vars.right = '${item.right}%';
                if (typeof item.bottom ==="number") vars.bottom = '${item.bottom}%';

                if (item.transform) vars.transition = item.transform;

                tl.to(selector, vars, 0);
            });*/



    }, { scope: sectionRef, dependencies : [isMobile]});

    return (
        <section id="performance" ref={sectionRef}>
            <h2> Next-Level Graphics Performance. GAME ON</h2>

            <div className="wrapper relative">
                {performanceImages.map(({ id, src }) => (
                    <img
                        key={id}
                        src={src}
                        alt={id}
                        className={`absolute ${id}`}
                    />
                ))}
            </div>

            <div className="content">
                <p>
                    MacBook M4 features include the M4 chip with up to a 10-core CPU and 10-core GPU, a faster 16-core Neural Engine, and Apple Intelligence for AI tasks. The latest MacBook Air models with the M4 chip boast a 12MP Center Stage webcam, a larger battery, improved speakers with Spatial Audio support, and are up to 2x faster than previous M1 models. MacBook Pro models with{' '}
                    <span className="text-white">M4 Pro or M4 Max chips offer even more power,</span>{' '}
                    including hardware-accelerated ray tracing, a{' '}
                    <span className="text-white"> Liquid Retina XDR display,</span>{' '}
                    and a wider range of ports.
                </p>
            </div>
        </section>
    )
}
export default Performance

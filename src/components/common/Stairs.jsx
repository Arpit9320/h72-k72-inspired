import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useReducer, useRef } from "react";
import { useLocation } from "react-router-dom";


const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null);

    let pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline();

        gsap.set(".stairs", {
            clearProps: "transform,height,display",
            y: 0,
        });

        tl.to(stairParentRef.current, {
            display: "block"
        });

        tl.from(".stairs", {
            height: 0,

            stagger: {
                amount: -0.2,
            },
        });

        tl.to(".stairs", {
            y: "100%",
            stagger: {
                amount: -0.2,
            },
        });

        tl.to(stairParentRef.current, {
            display: "none",
        });

        tl.to(".stairs", {
            y: "100%",
        });


        gsap.from(pageRef.current,{
            opacity:'0',
            delay:1.3,
            duration:0.4,
            clearProps: "transform"
        })

    },[currentPath]);


    return (

        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed top-0 z-10">
                <div className="h-full w-full  flex">
                    <div className="stairs h-full w-[20%] bg-black "></div>
                    <div className="stairs h-full w-[20%] bg-black "></div>
                    <div className="stairs h-full w-[20%] bg-black "></div>
                    <div className="stairs h-full w-[20%] bg-black "></div>
                    <div className="stairs h-full w-[20%] bg-black "></div>
                </div>
            </div>

            <div ref={pageRef}>
                {props.children}
            </div>
        </div>

        
    );
};

export default Stairs;

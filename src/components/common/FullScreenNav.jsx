import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { OptionsContext } from '../../context/MenuContext';

const FullScreenNav = () => {

    const [Opened, SetOpened] = useContext(OptionsContext)

    const fullnavScreenRef = useRef(null)
    const fullScreenRef = useRef(null)

    function gsapAnimation() {
        const tl = gsap.timeline();
        
        tl.to('#FullScreenNav',{
                display:"block"
        })

        tl.to(".stairsring", {
            delay:0.2,
            height: "100%",
            stagger: {
                amount: -0.2,
            },
        });

        tl.to('.link',{
            opacity:1,
            rotateX:0,
            stagger: {
                amount: 0.2,
            },
        })

        tl.fromTo('.cross',
        {
            opacity:0,
            right:"-20px"
        },
        {
            opacity:1,
            right:"12px",
            duration:0.4
        },
        "<");

        tl.fromTo('.logo',
        {
            opacity:0,
            left:"-20px"
        },
        {
            opacity:1,
            left:"12px",
            duration:0.4
        },
        "<");
        
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline();

        tl.to('.link',{
            opacity:0,
            rotateX:90,
            stagger: {
                amount:0.1
            }
        })
        
        tl.to(".stairsring", {
            height: 0,
            stagger: {
                amount: 0.1,
            },
        });

        tl.to('.cross',{
            opacity:0,
            duration:0.2
        },"<")

        tl.to('.logo',{
            opacity:0,
            duration:0.2
        },"<")

        tl.to('#FullScreenNav',{
            display:"none",
        })
        
        
    }

    useGSAP(function () {
        const tl = gsap.timeline();

        if(Opened){
            
            gsapAnimation()
        }
        else{
            gsapAnimationReverse()
        }

    }, [Opened]);

  return (



    <div ref={fullScreenRef} id='FullScreenNav' className=" hidden fixed inset-0 h-screen w-full z-9999 text-white  overflow-hidden">

        <div className='h-screen w-full fixed'>
            <div className="h-full w-full  flex">
                <div className="stairsring h-full w-[20%] bg-black"></div>
                <div className="stairsring h-full w-[20%] bg-black "></div>
                <div className="stairsring h-full w-[20%] bg-black "></div>
                <div className="stairsring h-full w-[20%] bg-black "></div>
                <div className="stairsring h-full w-[20%] bg-black "></div>
            </div>

        </div>

        <div className='fullnavScreenRef h-screen '>

            <div className="logo fixed top-3 left-3 h-auto lg:w-[7.5vw]  w-[25vw] border-none outline-0 cursor-pointer z-50" onClick={()=>{SetOpened(false)}}>
        
                <svg className=" cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                    <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
            
            </div>

            <div className='cross fixed right-3 top-3 lg:h-[7vw] lg:w-[7vw] h-[22vw] w-[22vw] cursor-pointer crossDiv' onClick={()=>{SetOpened(false)}}>
                <div className='lg:h-38 w-0.5 h-32 bg-white absolute -rotate-45 origin-top crossChild'></div>
                <div className='lg:h-38 w-0.5 h-33 bg-white absolute rotate-45 origin-top right-0 crossChild'></div>
            </div>

            <div className="all-links  w-full lg:mt-[8.5vw] mt-[70vw] cursor-pointer"> 

                <Link to='/projets' onClick={()=>{SetOpened(false)}}>
                    <div className="link origin-top lg:h-[8vw] h-[15vw]  w-full py-2 border-t text-center border-white font-[font2] uppercase relative">
                        <h2 className='lg:text-[8vw] lg:leading-[8vw] text-[15vw] leading-[13vw]'>Projets</h2>
                        <div className=' movelink absolute  top-0 h-full lg:flex hidden'>
                            
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6 ' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            
                            
                        </div>
                    </div>
                </Link>

                <Link to='/agence' onClick={()=>{SetOpened(false)}}>
                    <div className="link origin-top lg:h-[8vw] h-[15vw]  w-full py-2 border-t text-center border-white font-[font2] uppercase relative">
                        <h2 className='lg:text-[8vw] lg:leading-[8vw] text-[15vw] leading-[13vw] '>agence</h2>
                        <div className='movelink absolute  top-0 h-full lg:flex hidden'>
                            
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6 ' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            
                            
                        </div>
                    </div>
                </Link>
                
                <Link to='/' onClick={()=>{SetOpened(false)}}>
                    
                    <div className="link origin-top lg:h-[8vw] h-[15vw]  w-full py-2 border-t text-center border-white font-[font2] uppercase relative">
                        <h2 className='lg:text-[8vw] lg:leading-[8vw] text-[15vw] leading-[13vw] '>Contact</h2>
                        <div className='movelink absolute  top-0 h-full lg:flex hidden'>
                            
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6 ' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            
                            
                        </div>
                    </div>

                </Link>

                <Link to='/' onClick={()=>{SetOpened(false)}}>

                    <div className="link origin-top lg:h-[8vw] h-[15vw]  w-full py-2 border-y text-center border-white font-[font2] uppercase relative">
                        <h2 className='lg:text-[8vw] lg:leading-[8vw] text-[15vw] leading-[13vw]'>Blouge</h2>
                        <div className='movelink absolute  top-0 h-full lg:flex hidden'>
                            
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6 ' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            <div className=' bg-[#D3FD50] h-full shrink-0 flex items-center movex'>
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='text-[7.5vw] translate-y-2 text-black whitespace-nowrap pl-6'>Pour tout voir</h2>
                                <img className='h-[6vw] w-[15vw] rounded-full object-cover ml-6' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div >
                            
                            
                        </div>
                    </div>

                </Link>
                
            </div>

        </div>
      
    </div>
  )
}

export default FullScreenNav

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef= useRef(null)

  const imageArray = ['https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6']
  
  useEffect(() => {
    
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

  }, []);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function() {
    
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", ()=>{
      gsap.to(imageDivRef.current, {
        scrollTrigger:{
          trigger:imageDivRef.current,
          start: 'top 23.7%',
          end: 'top -125%',
          scrub: true,
          pin:true,
          // anticipatePin:1,
          // invalidateOnRefresh:1,
          onUpdate: (elem)=> {
            let imgIndex;

            if(elem.progress<1){
              imgIndex = Math.floor(elem.progress * imageArray.length)
            }
            else{
              imgIndex = imageArray.length-1
            }

            imageRef.current.src = imageArray[imgIndex]      
          }
        }
      })
    })

    mm.add("(max-width: 1023px)", () => {
      let index = 0;

      const interval = setInterval(() => {
        index = (index + 1) % imageArray.length;
        imageRef.current.src = imageArray[index];
      }, 1000);

      return () => clearInterval(interval);
    });

    return () => mm.revert();

  }, []);
    

  return (
    <div>

      <Link to='/' className="fixed top-3 left-3 h-auto lg:w-[7.5vw]  w-[25vw] border-none outline-0 cursor-pointer">
        
          <svg className=" cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fill="Black" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        
      </Link>

      <div className="font-[font2] section1 py-1">

        <div ref={imageDivRef} className="absolute lg:h-[20vw] lg:w-[15vw] h-[27vw] w-[20vw] overflow-hidden lg:rounded-3xl rounded-2xl lg:top-[11.3vw] lg:left-[29.8vw] top-[25vw] left-[25vw] ">
          <img ref={imageRef} className=" h-full w-full object-cover " src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>

        <div className=" relative h-auto  text-center lg:mt-[27vw] mt-[50vw]">
          <h1 className="lg:text-[20vw] leading-[16vw] text-[18vw] uppercase ">Soixan7e <br />Douze</h1>
        </div>

        <div className="relative lg:pl-[40%]  lg:mt-10 mt-28 lg:px-0 px-2">
          <p className="lg:text-[3.2vw] lg:leading-[3vw] text-[5vw] leading-[5vw]"> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes. </p>
        </div>

        

      </div>

      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence

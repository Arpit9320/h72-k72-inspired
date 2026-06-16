import { useRef } from "react";
import HeroBtn from "../components/home/HeroBtn";
import HeroText from "../components/home/HeroText";
import HeroVideo from "../components/home/HeroVideo";
import SecondText from "../components/home/SecondText";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";

const Home = () => {

  const navHoverREf = useRef(null)

  const shortline = useRef(null)
  const longline = useRef(null)

  return (


    <div className="h-screen w-screen">


      <div className="fixed h-screen w-screen">
        <HeroVideo />
      </div>

      <div className="fixed lg:h-[3.5vw] lg:w-[16vw] h-[11vw] w-[50%] right-0 top-0 z-50" onMouseEnter={()=>{
        navHoverREf.current.style.height = '100%'
        shortline.current.style.backgroundColor = 'black'
        longline.current.style.backgroundColor = 'black'
      }} onMouseLeave={()=>{
        navHoverREf.current.style.height = '0%'
        shortline.current.style.backgroundColor = 'white'
        longline.current.style.backgroundColor = 'white'
      }}>

        <div className="flex flex-col gap-1 items-end justify-center h-full w-full pr-6 bg-black">
          <div ref={longline} className="h-[1.6px] w-[25%] rounded-2xl bg-white z-100"></div>
          <div ref={shortline} className="h-[1.6px] w-[13%] rounded-2xl bg-white z-100"></div>
        </div>

        <div ref={navHoverREf} className=" transition-all h-0 w-full absolute top-0 bg-[#D3FD50] flex flex-col gap-1 items-end justify-center pr-6"></div>

      </div>

      <Link to='/' className="fixed top-3 left-3 h-auto lg:w-[7.5vw]  w-[25vw] border-none outline-0 cursor-pointer z-50">
        
          <svg className=" cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        
      </Link>

      <div className="h-screen w-screen relative flex flex-col items-center lg:justify-between justify-end gap-7 lg:gap-0 lg:pb-0 pb-2.5">
        <HeroText />
        <SecondText />
        <HeroBtn />
      </div>

      <Timer/>  

    </div>
  );
};

export default Home;

import { useContext, useRef } from "react";
import { OptionsContext } from "../../context/MenuContext";

const Navbar = () => {

    const [Opened, SetOpened]=useContext(OptionsContext)

    const navHoverREf = useRef(null)

    const shortline = useRef(null)
    const longline = useRef(null)

  return (
    
    <div className="fixed lg:h-[3.5vw] lg:w-[16vw] h-[11vw] w-[50%] right-0 top-0 z-50 cursor-pointer" onMouseEnter={()=>{
        navHoverREf.current.style.height = '100%'
        shortline.current.style.backgroundColor = 'black'
        longline.current.style.backgroundColor = 'black'
      }} onMouseLeave={()=>{
        navHoverREf.current.style.height = '0%'
        shortline.current.style.backgroundColor = 'white'
        longline.current.style.backgroundColor = 'white'
      }} onClick={()=>{SetOpened(true)}}>

        <div className="flex flex-col gap-1 items-end justify-center h-full w-full pr-6 bg-black">
          <div ref={longline} className="h-[1.6px] w-[25%] rounded-2xl bg-white z-100"></div>
          <div ref={shortline} className="h-[1.6px] w-[13%] rounded-2xl bg-white z-100"></div>
        </div>

        <div ref={navHoverREf} className=" transition-all h-0 w-full absolute top-0 bg-[#D3FD50] flex flex-col gap-1 items-end justify-center pr-6"></div>

      </div>
    
  )
}

export default Navbar

import HeroVideo from "./HeroVideo"


const HeroText = () => {
  return (
    <div className="text-white font-[font1] ">
        <div className="lg:text-[9.5vw] text-[12.5vw] lg:leading-[9vw] leading-[12vw] uppercase flex items-center justify-center pt-2">L'étincelle</div>
        <div className="lg:text-[9.5vw] text-[12.5vw] lg:leading-[9vw] leading-[12vw] uppercase flex items-center justify-center">qui <div className="lg:h-[7vw] h-[10vw] lg:w-[17vw] w-[22vw] rounded-full overflow-hidden mb-2 select-none"><HeroVideo/></div> génère</div>
        <div className="lg:text-[9.5vw] text-[12.5vw] lg:leading-[9vw] leading-[12vw] uppercase flex items-center justify-center">la créativité</div>
    </div>
  )
}

export default HeroText

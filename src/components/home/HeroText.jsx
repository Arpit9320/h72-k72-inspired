import HeroVideo from "./HeroVideo"


const HeroText = () => {
  return (
    <div className="text-white font-[font1] ">
        <div className="lg:text-[9.5vw] text-[12.5vw] leading-[10vw] uppercase flex items-center justify-center">L'étincelle</div>
        <div className="lg:text-[9.5vw] text-[12.5vw] leading-[10vw] uppercase flex items-center justify-center">qui <div className="h-[7vw] w-[17vw] rounded-full overflow-hidden mb-2"><HeroVideo/></div> génère</div>
        <div className="lg:text-[9.5vw] text-[12.5vw] leading-[10vw] uppercase flex items-center justify-center">la créativité</div>
    </div>
  )
}

export default HeroText

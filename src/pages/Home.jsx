import HeroBtn from "../components/home/HeroBtn";
import HeroText from "../components/home/HeroText";
import HeroVideo from "../components/home/HeroVideo";
import SecondText from "../components/home/SecondText";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import Navbar from "../components/common/Navbar";
import Logo from "../components/common/Logo";


const Home = () => {
  return (


    <div className="h-screen w-screen">


      <div className="fixed h-screen w-screen">
        <HeroVideo />
      </div>
      
      <Navbar/>

      <Logo logoColor={'white'}/>

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

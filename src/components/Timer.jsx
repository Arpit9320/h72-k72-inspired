import axios from "axios";
import { useState } from "react";
import { useEffect} from "react";

const Timer = () => {

  const [time, setTime] = useState("");

  useEffect(() => {

    const update = () => {
      const now = new Date();

      const timeString = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTime(timeString);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="text-white font-[font2] text-[1.5vw] pl-10 lg:fixed lg:block hidden bottom-0 left-0  w-[20vw] h-auto">Lucknow,India_{time}</div>
  )
};

export default Timer;

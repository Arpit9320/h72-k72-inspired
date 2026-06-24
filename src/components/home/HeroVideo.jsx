import mainVideo from "../../assets/main-video.mp4";

const HeroVideo = () => {
  return (
    <div className="h-full w-full">
        <video
          className="h-full w-full object-cover"
          src={mainVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
  )
}

export default HeroVideo
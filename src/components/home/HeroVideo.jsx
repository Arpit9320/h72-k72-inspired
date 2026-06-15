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
        ></video>
      </div>
  )
}

export default HeroVideo

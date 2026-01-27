import { APP_STORE_URL, PLAY_STORE_URL, VIDEO_URL } from "../utils/app.constants";
const HeroSection = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover -z-10" src={VIDEO_URL} autoPlay loop playsInline muted/>
      <div className="-z-10 absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      <div className="flex flex-col items-center justify-center h-full pt-70">
        <div className="text-white font-extrabold font-style: italic text-6xl">ATITHI</div>
        <div className="mb-2 px-5 text-white text-center font-semibold text-3xl mt-1" >India's #1 <br/>Food Delivery Service</div>
        <span className="text-white text-xl text-center px-5 font-medium">Experience fast & easy online ordering <br/> on the Atithi App</span>
        <div className="flex gap-6 mt-6">
          <img src={PLAY_STORE_URL} alt="play-store" className="w-40"/>
          <img src={APP_STORE_URL} alt="app-store" className="w-40"/>
        </div>
        <div className="flex items-center justify-center gap-2 mt-5 animate-bounce">
          <span className="text-white font-medium">Scroll down</span>
          <img src="/assets/double-arrow.svg" alt="double-arrow-icon"/>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
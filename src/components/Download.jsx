import { APP_STORE_URL, PHONE_IMG_URL, PLAY_STORE_URL, QR_CODE_IMG_URL } from "../utils/app.constants";

const Download = () => {
  return (
    <div className="pt-24 gap-26 flex items-center justify-center bg-linear-to-b from-[#FFEDEF] to-[#FFDBE0]">
      <div className="flex flex-col">
        <span className="text-[2.5rem] font-bold">Download the app now!</span>
        <span className="text-2xl text-gray-600">Experience seamless online ordering only on the Atithi app</span>
        <div className="flex gap-4 mt-8">
          <img src={PLAY_STORE_URL} alt="play-store-image" className="w-47 h-14" />
          <img src={APP_STORE_URL} alt="app-store-image" className="w-41.75 h-14" />
        </div>
      </div>
      <div className="relative">
          <img src={PHONE_IMG_URL} alt="phone-image" className="w-md h-116"/>
          <span className="w-56 absolute left-28 top-32 text-center text-xl text-gray-700 font-medium">Scan the QR code to download the app</span>
          <img src={QR_CODE_IMG_URL} className="absolute left-26 top-50 w-60 h-60"/>
      </div>
    </div>
  );
};
export default Download;
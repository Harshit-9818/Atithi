import { CALENDAR_IMG_URL, PHONE_IMG_URL } from "../utils/app.constants";

const FeatureSection = () => {
    return (
        <div className="h-120 bg-linear-to-b from-chablis to-white">
            <div className="relative text-center flex flex-col items-center justify-center py-28">
                <span className="text-carnation text-[48px] font-bold leading-tight">
                    What's waiting for you <br /> on the app?
                </span>
                <span className="text-xl text-comet font-extralight mt-5">
                    Our app is packed with features that <br /> enable you to experience food<br /> delivery like never before
                </span>
                <div className="relative">
                    <img src={PHONE_IMG_URL} alt="Phone-image" className="w-[18rem] mt-6" />
                    <div className="py-3.5 pb-2 absolute top-34 left-18 shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray">
                        <img src={CALENDAR_IMG_URL} alt="Calendar-image" className="w-36 h-22.5" />
                        <span>Schedule <br /> Your Order</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeatureSection;
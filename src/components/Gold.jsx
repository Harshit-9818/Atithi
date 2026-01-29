import { FREE_DELIVERY_IMG_URL, GOLD_IMG_URL, GOLD_STAR_IMG_URL, SCOTTER_IMG_URL } from "../utils/app.constants";
const Gold = () => {
    return (
    <div className="bg-black relative py-60 mt-80 text-white flex items-center justify-center flex-col">
        <img src={GOLD_IMG_URL} alt="gold-img" className="w-76.5 h-33.5"/>
        <div className="mt-6 text-xl flex flex-col font-normal bg-linear-to-r from-[#8C6115] via-[#E9c789] to-[#996F25] bg-clip-text text-center text-transparent">
            <span>
                India's Top Savings
            </span>
            <spn>
                Program for Food Lovers
            </spn>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-lg bg-linear-to-r from-[#8C6115] via-[#E9c789] to-[#996F25] bg-clip-text text-center text-transparent">&#9733;</span>
            <span className="text-2xl font-medium tracking-[3px]">GOLD BENEFITS</span>
            <span className="text-lg bg-linear-to-r from-[#8C6115] via-[#E9c789] to-[#996F25] bg-clip-text text-center text-transparent">&#9733;</span>
        </div>
        <div className="flex gap-10 mt-8">
            <div className="flex items-center justify-center gap-5">
                <img src={FREE_DELIVERY_IMG_URL} alt="Free-Delivery-Image" className="w-[4.6rem]"/>
                <div className="flex flex-col">
                    <span className="text-2xl">Free Delivery</span>
                    <span className="text-xl mt-1 bg-linear-to-r from-[#8C6115] via-[#E9c789] to-[#996F25] bg-clip-text text-center text-transparent">At All Restaurants within 7 km</span>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <img src={SCOTTER_IMG_URL} alt="Scotter-Image" className="w-[4.6rem]"/>
                <div className="flex flex-col">
                    <span className="text-2xl">Up to 30% extra off</span>
                    <span className="text-xl mt-1 bg-linear-to-r from-[#8C6115] via-[#E9c789] to-[#996F25] bg-clip-text text-center text-transparent">At 20,000+ partner restaurants</span>
                </div>
            </div>

        </div>
        <img src={GOLD_STAR_IMG_URL} alt="gold-star-img" className="w-44 absolute top-0 left-0"/>
        <img src={GOLD_STAR_IMG_URL} alt="gold-star-img" className="w-76 absolute top-0 right-0 rotate-1"/>
    </div>
    );
};
export default Gold;
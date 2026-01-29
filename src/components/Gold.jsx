import { GOLD_IMG_URL } from "../utils/app.constants";
import GoldStar from "./GoldStar";
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
    </div>
    );
};
export default Gold;
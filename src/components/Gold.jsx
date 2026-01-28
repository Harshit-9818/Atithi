import { GOLD_IMG_URL } from "../utils/app.constants";
const Gold = () => {
    return (
    <div className="bg-black relative py-60 mt-80 text-white flex items-center justify-center flex-col">
        <img src={GOLD_IMG_URL} alt="gold-img" />
    </div>
    );
};
export default Gold;

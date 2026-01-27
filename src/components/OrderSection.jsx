import { BURGER_IMG_URL, LEAVES_IMG_URL, LEFT_SIDE_LINE, MOMOS_IMG_URL, PIZZA_IMG_URL, RIGHT_SIDE_LINE, TOMATO_IMG_URL } from "../utils/app.constants";

const OrderSection = () => {
    return (
        <div className="h-148 relative ">
            <div className="absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%]">
                <img src={LEFT_SIDE_LINE} alt="left-line" className="h-auto w-full" />
                </div>
            <div className="absolute right-0 -top-[55%] h-auto w-[70%] translate-x-[65%]">
                <img src={RIGHT_SIDE_LINE} alt="right-line" className="h-auto w-full"/>
            </div>
            <img src={BURGER_IMG_URL} alt="Burger-Image" className="w-60 absolute left-52 top-10"/>
            <img src={MOMOS_IMG_URL} alt="Momos-Image" className="w-60 h-52 absolute right-52 -top-44"/>
            <img src={PIZZA_IMG_URL} alt="Pizza-Image" className="w-60 absolute right-36 top-40"/>
            <img src={TOMATO_IMG_URL} alt="Tomato-Image" className="w-12 absolute top-96 left-32"/>
            <img src={TOMATO_IMG_URL} alt="Tomato-Image" className="w-12 absolute top-10 right-32 rotate-45"/>
            <img src={LEAVES_IMG_URL} alt="Leaves-Image" className="w-12 absolute -top-38 left-[30%]"/>
            <div className="w-[30%] text-center m-auto flex items-center justify-center flex-col mt-56">
                <span className="text-carnation text-5xl font-medium leading-14">Better food for more people</span>
                <span className="text-comet text-xl mt-8 w-100">For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep</span>
            </div>
            <div className="rounded-4xl bg-white shadow-2xl w-[53%] m-auto px-7 py-6 flex items-center mt-40">
                <div className="flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
                    <div className="flex flex-col">
                        <span className="text-comet text-3xl font-bold">3,00,000+</span>
                        <span className="text-raven text-lg">Restaraunts</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrderSection;
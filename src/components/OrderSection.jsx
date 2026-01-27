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
        </div>
    );
};
export default OrderSection;
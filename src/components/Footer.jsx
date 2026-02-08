import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/app.constants";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col p-8 md:px-36">
        <span className="text-2xl font-medium">Atithi</span>
        <span className="mt-6 hover:underline cursor-pointer">Visit Help Center</span>
        <div className="flex justify-between mt-6 gap-2 flex-wrap">
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg">Company</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">About Us</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Our Offerings</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">News Room</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Investors</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg">Quick Links</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Home</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Shop</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Best Sellers</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Deals</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg">Customer Support</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">FAQs</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Shipping & Delivery</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Returns & Refunds</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Privacy Policy</span>
                </div>
            </div>
            <div>
                <span className="text-lg font-medium cursor-default hover:text-shadow-lg">Follow Us</span>
                <div className="flex flex-col gap-3 mt-2">
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Instagram</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Facebook</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">Twitter</span>
                    <span className="text-sm cursor-pointer hover:text-shadow-lg">LinkedIn</span>
                </div>
            </div>
        </div>
        <div className="flex justify-start items-center gap-2 mt-5">
            <img src={PLAY_STORE_URL} alt="PLAY STORE" className="w-47 h-14 cursor-pointer" />
            <img src={APP_STORE_URL} alt="APP STORE" className="w-41.75 h-14 cursor-pointer" />
        </div>
        <span className="mt-4 text-gray-400 text-xs cursor-default">&copy; 2026 Atithi Technologies Inc.</span>
    </div>
  );
};
export default Footer;
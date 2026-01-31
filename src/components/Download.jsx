import { PHONE_IMG_URL, QR_CODE_IMG_URL } from "../utils/app.constants";

const Download = () => {
  return (
    <div className="bg-linear-to-b from-chablis via-chablis to-chablis relative py-60 h-141 flex items-center justify-center flex-col">
        <div>
            <img src={PHONE_IMG_URL} className="right-40 w-40 h-40"/>
            <div>
                <img src={QR_CODE_IMG_URL} className="w-40 h-40"/>
                <span>Scan the QR code to <br/></span>
                <span className="text-xl mt-4">Download the App</span>
            </div>
        </div>
    </div>
  );
};
export default Download;
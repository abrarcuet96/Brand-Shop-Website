import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
const Commitments = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <div className="flex text-center justify-center">
                <div>
                    <div className="flex justify-center">
                        <LiaShippingFastSolid className="text-white text-3xl mb-5" />
                    </div>
                    <p className="text-white font-bold text-xl mb-5">FREE SHIPPING WORLDWIDE</p>
                    <p className="text-white text-xl mb-5">You can purchase from anytime, anywhere.</p>
                </div>
                <div>
                <div className="flex justify-center">
                        <FaMoneyBillTrendUp className="text-white text-3xl mb-5" />
                    </div>
                    <p className="text-white font-bold text-xl mb-5">100% MONEY BACK</p>
                    <p className="text-white text-xl mb-5">You are having money-back guaranty on any default</p>
                </div>
                <div>
                <div className="flex justify-center">
                        <MdOutlineSupportAgent  className="text-white text-3xl mb-5" />
                    </div>
                    <p className="text-white font-bold text-xl mb-5">ONLINE SUPPORT 24/7</p>
                    <p className="text-white text-xl mb-5">We are here to assist you at any time.</p>
                </div>
            </div>
        </div>
    );
};

export default Commitments;
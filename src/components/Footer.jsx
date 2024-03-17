const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  text-slate-200 flex flex-row justify-around border-t-2  border-[#171b20]">
                <div>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Inventory Tracking and Management</a>
                    <a className="link link-hover">Forecasting and Demand Planning</a>
                    <a className="link link-hover">Inventory Optimization</a>
                    <a className="link link-hover">Order Fulfillment</a>
                </div>
                <div>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </div>
                <div>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t-2  text-slate-200 border-[#171b20] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-[50px] max-lg:hidden" src="bookmark_6442280.png" alt="" />
                    <p className="text-xl font-bold">BrandShop</p>
                    <p>Providing reliable products since 1999</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
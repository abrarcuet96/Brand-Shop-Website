
const Accordian = () => {
    return (
        <div className="max-w-2xl mx-auto my-10 border-2 p-10 rounded-lg">
            <h2 className="text-center text-4xl font-bold mb-5">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What is the return policy for products purchased from Brand-Shop?
                </div>
                <div className="collapse-content">
                    <p>We want you to be completely satisfied with your purchase. If for any reason you are not happy with your product, you can return it within 30 days of purchase for a full refund or exchange. Please review our detailed Return Policy for more information on the process.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I track my orders shipping status?
                </div>
                <div className="collapse-content">
                    <p>Tracking your order is easy. Once your order is shipped, you will receive a confirmation email with a tracking number and a link to our tracking page. You can use this information to monitor the status and expected delivery date of your order.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Are the products on Brand-Shop website covered by a warranty?
                </div>
                <div className="collapse-content">
                    <p>Yes, most of the products we offer come with a manufacturers warranty. The duration of the warranty may vary depending on the product, and details can be found on the product page. If you have questions about warranty coverage or need assistance with a warranty claim, please reach out to our customer support team, and we will be happy to assist you.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;
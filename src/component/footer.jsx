const Footer = () => {
    return (
        <footer className="flex justify-around bg-gray-200 gap-20 mx-auto p-6">
            <div className="w-1/3 space-y-2">
                <h1 className="font-bold text-lg">About</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illo praesentium. Tenetur, nobis esse?
                </p>
                <i className="fa-brands fa-facebook text-3xl mr-2"></i>
                <i className="fa-brands fa-facebook text-3xl mr-2"></i>
                <i className="fa-brands fa-facebook text-3xl mr-2"></i>
            </div>

            <div className="w-1/3 space-y-2">
                <h1 className="font-bold text-lg">Contact</h1>
                <p className="text-sm">Coimbatore, Tamil Nadu</p>

                <h1 className="font-bold text-lg mt-4">Location</h1>
                <a href="#" className="text-blue-400 hover:underline text-sm">Show in map</a>
            </div>

            <div className="w-1/3 space-y-2">
                <h1 className="font-bold text-lg">Payment</h1>
                <p className="text-sm">Available Payment Options</p>
            </div>
        </footer>
    );
};

export default Footer;

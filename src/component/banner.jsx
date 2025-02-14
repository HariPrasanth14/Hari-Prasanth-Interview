import banner_img from "../assets/banner.png";

const Banner = () => {
    return (
        <div>
             <img src={banner_img} alt="banner img" className="m-2 rounded-xl" />

             <div className="shadow-[0_0_10px_black] p-6 rounded-3xl relative mx-20 mb-16 -my-12 bg-white">
                 <div className="flex">
                    
                    <button className="bg-red-600 mr-3  text-white rounded-xl px-4 py-1">
                        Rent
                    </button>
                    <div className="bg-white  p-2 rounded-3xl px-5 text-center cursor-pointer shadow-md">
                        Buy
                    </div>
                </div>

                 <div className="lg:flex justify-between mt-5 gap-4">
                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium"><i className="fa-solid fa-location-dot"></i>Pickup Location</label>
                        <input type="text" placeholder="Enter location" className="border p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium"><i className="fa-solid fa-location-dot"></i>Drop-off Location</label>
                        <input type="text" placeholder="Enter drop-off" className="border p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium"><i className="fa-solid fa-location-dot"></i>Pickup Date</label>
                        <input type="date" className="border p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="text-gray-700 font-medium"><i className="fa-solid fa-location-dot"></i>Return Date</label>
                        <input type="date" className="border p-2 rounded-md" />
                    </div>
                </div>
            </div>

             <div className="text-center mx-32">
                <h3 className="font-bold text-2xl">Lorem Ipsum</h3>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consequatur provident.
                    Quaerat amet velit eius libero provident nisi, dolores, cumque nostrum dolor perferendis nulla qui accusantium, ea ullam quo eligendi?
                </p>
            </div>
        </div>
    );
};

export default Banner;

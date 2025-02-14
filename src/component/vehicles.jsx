import banner_img from "../assets/banner.png"


const Vehicles = () =>{
    return(
        <div className="bg-gray-100">
        <h1 className="font-bold text-2xl mx-20 mt-8 pt-10 mb-8">Featured Vehicles</h1>

            <div className="lg:flex justify-around mb-10 ">
                <div className="mb-4 border p-5 rounded-xl">
                    <img src={banner_img} className="lg:h-28 rounded-xl" />
                    <p className="bg-white text-red-700 font-bold relative bottom-44 lg:bottom-28 w-24 p-1">10% offer</p>
                    <p className="font-bold my-1">Ford Ecosport</p>
                    <p className="text-sm my-1">Cape coast Ghema</p>
                    <hr></hr>
                    <div className="text-xs my-1 font-bold flex justify-between">
                    <span><i class="fa-solid fa-location-dot"></i> 4 seater</span>
                    <span><i class="fa-solid fa-location-dot"></i> Diesel</span>
                    <span><i class="fa-solid fa-location-dot"></i> Manual</span>
                    </div>
                    
                    <h1 className="font-bold mt-3">GH$ 950</h1>
                    <div className="flex justify-between items-center">
                        <div>
                    <p className="text-xs">for 40kms without fuel</p>
                    </div>

                    <div>
                        <button className="bg-blue-400 font-bold  text-white text-sm px-2 py-1 rounded-lg">view Detials</button>
                    </div>
                    </div>

                </div>

                <div className="mb-4 border p-5 rounded-xl">
                <img src={banner_img} className="lg:h-28 rounded-xl" />
                <p className="bg-white text-red-700 font-bold relative bottom-44 lg:bottom-28 w-24  p-1">10% offer</p>

                <p className="font-bold my-1">Ford Ecosport</p>
                    <p className="text-sm my-1">Cape coast Ghema</p>
                    <hr></hr>
                    <div className="text-xs my-1 font-bold flex justify-between">
                    <span><i class="fa-solid fa-location-dot"></i> 4 seater</span>
                    <span><i class="fa-solid fa-location-dot"></i> Diesel</span>
                    <span><i class="fa-solid fa-location-dot"></i> Manual</span>
                    </div>
                    
                    <h1 className="font-bold mt-3">GH$ 950</h1>
                    <div className="flex justify-between items-center">
                        <div>
                    <p className="text-xs">for 40kms without fuel</p>
                    </div>

                    <div>
                        <button className="bg-blue-400 font-bold  text-white text-sm px-2 py-1 rounded-lg">view Detials</button>
                    </div>
                    </div>

                </div>

                <div className="mb-4 border p-5 rounded-xl">
                <img src={banner_img} className="lg:h-28 rounded-xl" />
                <p className="bg-white text-red-700 font-bold relative bottom-44 lg:bottom-28 w-24 text-center  p-1">10% offer</p>

                <p className="font-bold my-1">Ford Ecosport</p>
                    <p className="text-sm my-1">Cape coast Ghema</p>
                    <hr></hr>
                    <div className="text-xs my-1 font-bold flex justify-between">
                    <span><i className="fa-solid fa-location-dot"></i> 4 seater</span>
                    <span><i className="fa-solid fa-location-dot"></i> Diesel</span>
                    <span><i className="fa-solid fa-location-dot"></i> Manual</span>
                    </div>
                    
                    <h1 className="font-bold mt-3">GH$ 950</h1>
                    <div className="flex justify-between items-center">
                        <div>
                    <p className="text-xs">for 40kms without fuel</p>
                    </div>

                    <div>
                        <button className="bg-blue-400 font-bold  text-white text-sm px-2 py-1 rounded-lg">view Detials</button>
                    </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Vehicles
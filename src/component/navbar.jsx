const Navbar = () =>{
    return(
        <div className=" lg:flex justify-between px-6 items-center py-5" >
            <div>
            <button className="location rounded-3xl px-3 py-1"><i className="fa-solid fa-location-dot"></i> Choose your location  <i class="fa-solid fa-arrow-down"></i></button>
            </div>

            <div className="">
            <button className="mr-5 bg-red-600 text-white px-3 py-1 items-center rounded-2xl">For vehicle Owner</button>
            <button className="mr-5 bg-white text-black login px-3 py-1 items-center rounded-2xl">Login</button>
            <button className="mr-5 bg-black text-white px-3 py-1 items-center rounded-2xl">Sign up</button>


            </div>
        </div>
    )
}

export default Navbar




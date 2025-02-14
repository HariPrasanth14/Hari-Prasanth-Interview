const Contact = ()=>{
    return(
        
        <div className="lg:flex justify-around mb-10">
            <div > 
                <p className="font-bold text-xl"><i className=" text-3xl fa-solid fa-envelope mr-3"></i>    Join our weekly Newsletter</p>
            </div>

            <div className="mt-5 lg:mt-0">
                <input type="text"  placeholder="email address" className="border-b-2 w-72"/>
            </div>

            <div className="mt-5 lg:mt-0">
                <button className="bg-blue-600 text-white px-5 py-2 font-bold rounded-2xl">Sign Up</button>
            </div>
        </div> 
    )
}

export default Contact
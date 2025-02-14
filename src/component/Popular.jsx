import banner_img from "../assets/banner.png";

const places = ["dubai", "dubai", "dubai", "dubai", "dubai", "dubai", "dubai", "dubai", "dubai"];

const Popular = () => {
  return (
    <div className="grid lg:grid-cols-3 mb-10 gap-10">
      
        {places.map((place,index)=>(
            <div key={index} className="relative  mx-auto text-center">
            <img src={banner_img} alt={place} className="h-32 w-30 rounded-3xl object-cover" />
            <p className="absolute bottom-12 left-20  bg-black bg-opacity-50 text-white font-bold p-2 rounded-2xl w-20">
              {place}
            </p>
          </div>
        ))}

    </div>
  );
};

export default Popular;

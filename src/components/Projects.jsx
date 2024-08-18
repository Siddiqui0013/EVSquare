import React from "react";
import bg from "../assets/bg.jpg";
import mehran from "../assets/mehran.webp";
import bolan from "../assets/bolan.webp";

export default function Projects() {
  const projectsItem = [
    {
      pic: mehran,
      name: "Electric Suzuki Mehran",
      desc: "​Experience the pinnacle of eco-friendly engineering with our Suzuki Mehran conversion project. Featuring a 10 kW BLDC motor and a 13 kW LiFePO4 battery pack, this retrofitting endeavor delivers a remarkable 200 km range per charge, coupled with a maximum speed of 75 km/h. Witness the perfect blend of sustainability and efficiency as we redefine transportation standards, setting a new benchmark for electric vehicle innovation.",
    },
    {
      pic: bolan,
      name: "Electric Suzuki Bolan",
      desc: "​Introducing our latest endeavor: the electrification of the Suzuki Bolan. This retrofitting project boasts a powerful 10 kW AC induction motor paired with a robust 13 kWh LiFePO4 battery pack, ensuring optimal performance and efficiency. With a commendable range of 100 km and a top speed of 100 km/h, this electric Suzuki Bolan sets the standard for sustainable urban transportation. Experience the future of mobility as we revolutionize traditional vehicles, seamlessly blending eco-friendliness with cutting-edge technology.",
    },
  ];

  return (
    <>
      <div
        className="relative h-[70vh] bg-cover bg-right md:bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 backdrop-blur-sm"></div>

        <div className="relative z-10 flex items-center flex-col justify-center h-full">
          <div className="div">
            <h1 className="text-white text-xl text-left md:p-10 p-5 md:text-2xl">
              Embark on a sustainable journey with our groundbreaking projects,
              where we've transformed various classic Pakistani cars into
              efficient electric vehicles. From converting gasoline-powered
              Suzuki Mehran cars to electrifying iconic vans like the Suzuki
              Bolan, we're pioneering the shift towards eco-friendly
              transportation in Pakistan.
            </h1>
          </div>
        </div>
      </div>

      {projectsItem.map((item) => (
        <div
          key={item.name}
          className="service md:p-14 p-4 rounded-2xl m-4 bg-black"
        >
          <h1 className="title text-3xl my-5 md:text-6xl font-bold">
            {item.name}
          </h1>
          <div className="box md:flex fle">
          <img src={item.pic} alt=""  />
          <div className="info">
            <h3 className="text-lg mt-4 md:text-xl md:m-10">{item.desc}</h3>
          </div>
          </div>
        </div>
      ))}

      {/* {projectsItem.map((item) => (
        <div
          key={item.name}
          className="service flex md:p-14 p-4 rounded-2xl m-4 bg-black"
        >
          <div className="">
            <img src={item.pic} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="info flex-grow">
            <div className="title text-4xl my-10 md:text-6xl font-bold">
              <h1>{item.name}</h1>
            </div>
            <div className="info">
              <h3 className="text-lg md:text-xl mb-10">{item.desc}</h3>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
}

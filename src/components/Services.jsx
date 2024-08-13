import React from 'react'
import bg from "../assets/bg.jpg";

export default function Services() {
  const servicesItem = [
    {
      name: "Consultancy",
      desc: "At EV Square, our Conversion Consultancy service offers personalized guidance and meticulous component selection to ensure a seamless and cost-effective electric vehicle conversion tailored to your vehicle and budget",
    },
    {
      name: "Conversion kits",
      desc: "Explore our premium selection of conversion kits designed to seamlessly integrate electric powertrains into a variety of vehicles. Whether you're retrofitting a classic car or modernizing your fleet, we have the solutions to electrify your ride.",
    },
    {
      name: "Installation Services",
      desc: "Trust our skilled technicians to handle the installation of your electric conversion kit with precision and expertise. We ensure seamless integration, superior performance, and utmost safety standards in every installation project.",
    },
    {
      name: "Performance Optimization",
      desc: "Elevate your electric driving experience with our performance optimization services. Our team fine-tunes your vehicle's electric systems for enhanced efficiency, power, and range, delivering an exhilarating driving experience like never before.",
    },
    {
      name: "Testing Services",
      desc: "Ensuring safety and reliability, our testing services rigorously validate your converted vehicle's performance and functionality. From thorough inspections to real-world simulations, we guarantee that your electric conversion meets the highest standards of quality and performance.",
    },
    {
      name: "Battery upgrade",
      desc: "Experience enhanced power and extended range with our battery upgrade service. Elevate your electric journey with cutting-edge technology tailored to your vehicle's needs.",
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
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Our Services
            </h1>
          </div>
        </div>
      </div>

      {servicesItem.map((item) => (
        <div
          key={item.name}
          className="service md:p-14 p-8 rounded-2xl m-4 bg-black"
        >
          <div className="title text-4xl my-10 md:text-6xl font-bold ">
            <h1>{item.name}</h1>
          </div>
          <div className="info">
            <h3 className="text-lg md:text-xl mb-10 ">{item.desc}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

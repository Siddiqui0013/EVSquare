import React from 'react';
import bg from '../assets/bg.jpg';
import Typewriter from 'typewriter-effect';
import conversion from '../assets/conversion.webp'
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
  return (
    <>
    <div
      className="relative h-[70vh] md:h-screen bg-cover bg-right md:bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-35 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center flex-col justify-center h-full">
        <div className="div">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to EV Square
        </h1>
        </div>

        <div className="type text-white text-4xl md:text-6xl font-bold">
      <Typewriter
         options={{
          strings: ['Retro Fitting'],
          autoStart: true,
          loop: true,
        }}
        />
      </div>
      </div>

    </div>

    {/* <div className="RF flex flex-col justify-center items-center p-6 bg-gray-100">
  <div className="title text-black text-4xl md:text-6xl font-bold my-10 text-center">
    <h1>About EV Retrofitting</h1>
  </div>
  
  <div className="info flex flex-col md:flex-row items-center md:items-start  md:text-left">
    <div className="text max-w-md md:w-1/2 p-4">
      <h3 className="text-lg md:text-xl text-gray-700">
        EV retrofitting converts gasoline vehicles into electric ones by replacing engines with electric motors and adding batteries, extending lifespan, reducing emissions, and promoting sustainability. It preserves classic car charm while embracing modern eco-tech, offering a cost-effective alternative to buying new electric vehicles.
      </h3>
    </div>
    
    <div className="img mt-4 md:mt-0 md:ml-6 w-full md:w-1/2">
      <img src={conversion} alt="EV Conversion" className="rounded-lg shadow-lg" />
    </div>
  </div>
</div> */}

<div className="RF flex flex-col justify-center items-center p-6 ">
  <div className="title text-4xl md:text-6xl font-bold m-12 text-center">
    <h1>About EV Retrofitting</h1>
  </div>
  
  <div className="info flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
    <div className="text max-w-md md:w-1/2 p-4">
      <h3 className="text-lg md:text-xl">
        EV retrofitting converts gasoline vehicles into electric ones by replacing engines with electric motors and adding batteries, extending lifespan, reducing emissions, and promoting sustainability. It preserves classic car charm while embracing modern eco-tech, offering a cost-effective alternative to buying new electric vehicles.
      </h3>
    </div>
    
    <div className="img mt-4 md:mt-0 md:ml-6 w-full md:w-1/2">
      <img src={conversion} alt="EV Conversion" className="rounded-lg shadow-lg border-4 border-green-300" />
    </div>
  </div>
</div>

<div className="service p-20  bg-black">
  <div className="title text-4xl my-10 md:text-6xl font-bold ">
    <h1>Our Services</h1>
  </div>
  <div className="info">
      <h3 className="text-lg md:text-xl mb-10 ">
        EV offers verioius services to its clients including <span className="text-green-500 text-xl font-bold">Consultancy</span> and <span className="text-green-500 text-xl font-bold">Virtual Training</span>.
      </h3>
      <Link to="/services">
      <h3 className=" bg-green-700 text-3xl inline-block p-4 md:text-xl">
        See all Services
      </h3>
      </Link>
  </div>
</div>

    </>
  );
}

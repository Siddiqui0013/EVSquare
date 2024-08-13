import React from 'react'
import bg from "../assets/bg.jpg";

export default function AboutUs() {
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
              We are committed to leading the charge in transforming
              conventional vehicles into eco-friendly marvels. With a passion
              for sustainability and innovation, we specialize in electric
              vehicle retrofitting, offering a comprehensive range of services
              to meet all your conversion needs. The inclusion of the squared
              notation in our name symbolizes our commitment to pushing
              boundaries and achieving extraordinary advancements in electric
              mobility.
            </h1>
          </div>
        </div>
      </div>

      <div className="about md:p-14 p-8">
        <div className="title text-4xl my-10 md:text-6xl font-bold ">
          <h1>Our Vision</h1>
        </div>
        <div className="info">
          <h3 className="text-lg md:text-xl mb-10 ">
            At EV Square, our vision is to revolutionize transportation by
            electrifying classics and deploying cutting-edge technologies. We're
            on a mission to make electric mobility accessible and exciting for
            everyone. Join us in reshaping the future of transportation towards
            sustainability and innovation!
          </h3>
        </div>
      </div>
    </>
  );
}
  
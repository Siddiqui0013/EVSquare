import React from 'react'
import {FaYoutube,FaWhatsapp, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

export default function Footer() {
  return (
    <footer className='p-5 md:p-3 flex justify-between md:justify-around bg-black border-t-2 border-green-500'>
    <h4 className='text-xl md:text-2xl'>EV Square &copy;</h4>
    <div className='footerLinks flex items-center justify-center md:px-5'>
      <a className="md:px-3 px-2 text-lg md:text-2xl" href="https://linkedin.com/in/asif-tahir-198044275" target='_blank' rel='noreferrer'><FaLinkedin/></a>
      <a className="md:px-3 px-2 text-lg md:text-2xl" href="https://youtube.com/" target='_blank' rel='noreferrer'><FaYoutube/></a>
      <a className="md:px-3 px-2 text-lg md:text-2xl" href="https://wa.me/03041504475" target='_blank' rel='noreferrer'><FaWhatsapp/></a>
      <a className="md:px-3 px-2 text-lg md:text-2xl" href='mailTo:electricvehiclesquare@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
    </div>
  </footer> 
   )
}

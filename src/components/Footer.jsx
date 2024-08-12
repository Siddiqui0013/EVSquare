import React from 'react'
import {FaYoutube,FaWhatsapp, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

export default function Footer() {
  return (
    <footer className='p-3 flex justify-around bg-black border-t-2 border-green-500'>
    <h4 className='text-2xl'>EV Square &copy;</h4>
    <div className='footerLinks flex items-center justify-center px-5'>
      <a className="px-3 text-2xl" href="https://linkedin.com/in/asif-tahir-198044275" target='_blank' rel='noreferrer'><FaLinkedin/></a>
      <a className="px-3 text-2xl" href="https://youtube.com/" target='_blank' rel='noreferrer'><FaYoutube/></a>
      <a className="px-3 text-2xl" href="https://wa.me/03041504475" target='_blank' rel='noreferrer'><FaWhatsapp/></a>
      <a className="px-3 text-2xl" href='mailTo:electricvehiclesquare@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
    </div>
  </footer> 
   )
}

import React from 'react';
import Image1 from '../assets/image1.png';
import MessageImage from '../assets/message.png';
import Image2 from '../assets/image2.png';
import PadlockImage from '../assets/padlock.png';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Beranda = () => {
  return (
    <div className="container">
      {/*  */}
      <div className="flex justify-evenly items-center -z-20 h-screen relative">
        <img src={Image1} alt="Image1" className="absolute -z-10 lg:w-screen" />
        <div className="z-20">
          <img src={MessageImage} className="h-96 w-lg mt-30 z-20 relative" />
        </div>
        <div className="size-120 lg:w-2xl mt-12 pt-15 z-20 relative">
          <h1 className="text-5xl font-bold font-inter">Saatnya membahas topik yang menarik dengan orang lain secara anonymous!!</h1>
          <p className="mt-10 text-2xl font-inter">
            Dengan menggunakan platform kami, anda dapat berbicara dengan orang lain secara face to face untuk membahas berbagai topik yang menarik untuk anda dan lawan bicara anda secara anonymous, tanpa mengetahui identitas masing
            masing!!
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-between lg:h-120 lg:w-full lg:-mt-1 bg-[#D5D7FF] relative">
        <div className="lg:w-110 lg:h-60 z-10 lg:mt-30 lg:ml-20  ">
          <h1 className="font-inter font-bold text-3xl">Tentunya Identitas anda selalu aman !</h1>
          <p className="mt-3 text-2xl">Seperti halnya kamu tidak mengetahui siapa lawan bicara mu, lawan bicaramu demikian, kamu bebas mengekspresikan apapun opini kamu !</p>
        </div>
        <img src={PadlockImage} alt="Padlock Image" className="h-45 lg:mr-40 lg:mt-35 drop-shadow-2xl" />
      </div>

      {/*  */}
      <div className="lg:h-110 lg:w-full relative text-center flex flex-col justify-center items-center gap-5">
        {/* <div className="bg-zinc-400 h-40 w-40 absolute left-50 top-0"></div> */}
        <h1 className=" lg:w-xl text-2xl  text-center">EKSPRESIKAN PENDAPAT ANDA SEKARANG JUGA !</h1>
        <Link to="/fitur1">
          <button className="h-30  text-2xl lg:w-2xl rounded-2xl  font-bold text-white bg-linear-to-b from-[#55A4FF] to-[#18317E] z-10 cursor-pointer">MULAI MEMAINKAN</button>
        </Link>
      </div>

      <div className="lg:w-full bg-[#3F394F] lg:h-48">
        <h1 className="text-white text-5xl lg:mt-10 lg:pt-10 ml-40 font-inter">LOKALIN</h1>
        <div className="w-40 h-14 ml-40 mt-1 flex justify-around text-5xl cursor-pointer">
          <FaInstagram />
          <FaGithub />
          <FaDiscord />
        </div>
      </div>
    </div>
  );
};

export default Beranda;

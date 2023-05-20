import React from 'react';
import imgAbout from '../../Assets/img-about.svg';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import ScrollButton from '../atoms/ScrollButton';
import listTeam from "../../ApiFake/dataAboutStatic"

function AboutPage() {

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div>
          <div className=" bg-gradient-to-b from-[#EF8F00] to-[#EF5B00] py-20 px-10 mt-16 w-full lg:px-32 lg:py-16 ">
            <div className="relative">
              <img src={imgAbout} alt="about" className="mx-auto md:w-6/12" />
              <div className="absolute shadow-md w-full  2xl:top-64 inset-x-0 md:w-2/3 left-1/2 transform -translate-x-1/2 border-2 border-gray-300 p-7 bg-white rounded-xl">
                <p className="font-semibold font-poppins text-xl text-green-700  text-center">
                  Tentang CodeIn
                </p>
                <p className="font-medium text-center text-xs md:text-md mt-2">
                  CodeIn merupakan platform IT yang memiliki tujuan untuk
                  membantu para developer untuk menjadi lebih baik dan lebih
                  baik, dengan menyediakan berbagai macam layanan yang dapat
                  diakses oleh para developer seperti forumIn dan BlogIn.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-40 md:mt-32 flex-col items-center justify-center ">
            <div className="font-semibold font-poppins text-xl text-green-700  text-center">
              Tim CodeIn
            </div>
            <hr className="border-2 w-32 mx-auto border-orange-500 rounded-md mt-1" />
            <div className="flex flex-row mb-10 flex-wrap items-center justify-center gap-5 mt-5 max-w-6xl">
              {listTeam.map((item, index) => {
                return (
                  <div key={index} className="border-2 gap-3 flex flex-col items-center justify-center w-72 bg-[#f2f2f2] border-gray-300 rounded-md shadow-lg font-poppins px-3 py-10 ">
                    <img
                      className="w-28 h-28 drop-shadow-md rounded-full border-2 border-slate-300 object-cover object-top"
                      src={item?.image}
                      alt="gambar"
                    />
                    <div className=" flex flex-col items-center justify-center">
                      <p className="font-poppins font-semibold text-sm">
                        {item?.name}
                      </p>
                      <p className="font-poppins text-xs">{item?.role}</p>
                    </div>
                    <div className="flex flex-row">
                      <a href={item?.linkGithub}>
                        <img
                          src={item?.github}
                          className="w-10 h-10 drop-shadow-md"
                          alt="gambar"
                        />
                      </a>
                      <a href={item?.linkLinkedin}>
                        <img
                          src={item?.linkedin}
                          className="w-10 h-10 drop-shadow-md"
                          alt="gambar"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;

import React from 'react';
//import styles from "../../Assets/Sliders/HomePage.module.css"
import ScrollButton from '../atoms/ScrollButton';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import { Link } from 'react-router-dom';
import gambar from '../../Assets/gambarUtama.png';
import gambar2 from '../../Assets/forumin.png';
import gambar3 from '../../Assets/blogin.png';
import gambar4 from '../../Assets/comment2.png';
import { faqList } from '../../ApiFake/dataFaqStatic';
import RightIcons from '../../Assets/righticon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

function HomePage() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" className=" bg-gradient-to-b from-[#233A5A] to-[#111924] py-20 px-10 mt-16 w-full lg:px-32 lg:py-16 flex flex-col items-center md:justify-around md:flex-row">
          <div className=" flex flex-col items-start gap-5 text-center md:text-left">
            <p className="text-white font-quicksand text-5xl font-bold leading-tight" data-aos="fade-right" data-aos-offset="200" data-aos-delay="500">
              Platform untuk membantu{' '}
              <span className="text-red-500">Programmer</span> menjadi lebih
              baik👋
            </p>
            <p data-aos="fade-right" data-aos-offset="200" data-aos-delay="600" className="text-gray-400 text-xl md:max-w-5xl font-poppins">
              Platform ini dibuat untuk memberikan kemudahan bagi Programmer
              Indonesia untuk Tanya Jawab ataupun memberikan informasi yang
              bermanfaat bagi programmer lainnya.
            </p>
            <div className=" w-full md:w-64">
              <Link to="/">
                <button data-aos="fade-right" data-aos-delay="800" className="shadow-md w-full  px-20 mt-4 py-2 bg-orange-500 rounded-3xl border-neutral-700 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-white">
                  Tentang
                </button>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="800" data-aos-easing="ease-in-out" className="">
            <img src={gambar} alt="" />
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center pt-20">
          <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="800" className="text-center font-poppins">
            <p className="text-green-800 text-3xl font-semibold">Produk</p>
            <p className="text-gray-900 text-base font-medium">
              Memberikan Manfaat Untuk Anda
            </p>
          </div>
          <div className="mt-12 md:mt-20 mx-8 flex flex-col gap-12 md:gap-28">
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="500"  data-aos-easing="ease-in-out" className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-28">
              <img
                className="w-4/5 md:w-full max-w-lg shadow-md rounded-lg border-2 border-orange-200"
                src={gambar2}
                alt=""
              />
              <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="600"  className="px-6 md:px-0 flex flex-col gap-1 text-center md:text-left">
                <p className="font-semibold text-2xl drop-shadow-md">
                  Produk Forum Tanya Jawab
                </p>
                <p className="max-w-lg drop-shadow-md">
                  Produk Forum Tanya Jawab merupakan sebuah platform Programmer
                  untuk Tanya jawab seputar dunia programming.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="500" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col md:flex-row-reverse justify-between items-center gap-5 md:gap-28">
              <img
                className="w-4/5 md:w-full max-w-lg shadow-md rounded-lg border-2 border-orange-200"
                src={gambar3}
                alt=""
              />
              <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="600" data-aos-duration="500" data-aos-easing="ease-in-out" className="px-6 md:px-0 flex flex-col gap-1 text-center md:text-right">
                <p className="font-semibold text-2xl drop-shadow-md">
                  Produk Blog
                </p>
                <p className=" md:max-w-lg drop-shadow-md">
                  Produk Blog merupakan sebuah platform Programmer untuk bisa
                  membuat informasi atau melihat informasi seputar dunia
                  programming.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#EF8F00] to-[#EF5B00] flex flex-col justify-center items-center mt-28 py-32">
          <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="600" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-32">
            <img
              className="w-4/5 md:w-full max-w-2xl rounded-lg "
              src={gambar4}
              alt=""
            />
            <div className="px-6 w-4/5 md:px-0 flex flex-col gap-1 text-center lg:text-left">
              <p data-aos="fade-left" data-aos-offset="200" data-aos-delay="700" data-aos-duration="500" data-aos-easing="ease-in-out" className="font-semibold text-xl text-green-800 drop-shadow-md">
                Testimonial
              </p>
              <p data-aos="fade-left" data-aos-offset="200" data-aos-delay="750" data-aos-duration="500" data-aos-easing="ease-in-out" className="font-semibold max-w-lg text-2xl drop-shadow-md">
                Apa yang pelanggan katakan,tentang pengalaman mereka bersama
                kami 🤔
              </p>
              <p data-aos="fade-left" data-aos-offset="200" data-aos-delay="800" data-aos-duration="500" data-aos-easing="ease-in-out" className="max-w-lg text-white drop-shadow-md">
                Mereka mengatakan apa yang mereka rasakan, kebanyakan dari
                mereka mengatakan bahwa mereka sangat puas, apalagi puas karena
                mereka mendapakan jawaban yang memuaskan serta mendapatkan
                informasi yang update tentang perkembangan Teknologi.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col md:flex-row justify-center md:gap-28 items-center my-28 ">
          <div className="flex flex-col max-w-md md:max-w-lg text-center items-center justify-center">
            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-delay="400" data-aos-duration="500" data-aos-easing="ease-in-out" className="text-3xl font-bold mb-4 text-green-800">
              FaQ CodeIn
            </h1>
            <h1 data-aos="zoom-in" data-aos-offset="200" data-aos-delay="500" data-aos-duration="500" data-aos-easing="ease-in-out" className="text-sm font-medium w-10/12">
              Punya pertanyaan seputar produk dan layanan CodeIn? Temukan
              Jawaban yang telah dicantumkan.
            </h1>
          </div>
          <div className="px-10 pt-10 max-w-lg items-center text-sm">
            {faqList.map((faq) => (
              <div
                data-aos="zoom-in" data-aos-offset="200" data-aos-delay="700" data-aos-duration="500" data-aos-easing="ease-in-out"
                key={faq?.question}
                className="relative w-full overflow-hidden border-b-2 border-grey-500 py-6"
              >
                <input
                  type="checkbox"
                  className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer jus"
                />
                <div className=" h-5 w-10/12  flex items-center">
                  <h1 className="text-lg font-semibold">{faq?.question}</h1>
                </div>
                <div className="absolute top-3 right-3 mt-2 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 ">
                  <img src={RightIcons} alt="righticon" />
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                  <div className="p-4">
                    <p>{faq?.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

import React from 'react';
import RightIcons from '../../Assets/righticon.svg';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import { faqList } from '../../ApiFake/dataFaqStatic';
import ScrollButton from '../atoms/ScrollButton';

function FaqPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white flex flex-col md:flex-row justify-center md:gap-28 items-center my-28 md:my-72 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center max-w-md md:max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-green-800">FaQ CodeIn</h1>
          <h1 className="text-sm font-medium w-10/12">
            Punya pertanyaan seputar produk dan layanan CodeIn? Temukan Jawaban
            yang telah dicantumkan.
          </h1>
        </div>
        <div className="px-10 pt-10 max-w-lg items-center text-sm">
          {faqList.map((faq) => (
            <div
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
      <ScrollButton/>
      <Footer />
    </>
  );
}

export default FaqPage;

import React from 'react';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import gambar from '../../Assets/404.png';
import ScrollButton from '../atoms/ScrollButton';
function NotFound() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full h-full mt-40 overflow-x-hidden">
            <img className=" w-10/12 md:w-1/3 mx-auto" src={gambar} alt="404" />
        </div>
        <ScrollButton/>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;

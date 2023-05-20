import React from 'react';
import logo from '../../Assets/logo-white.svg';
import fb from '../../Assets/fb-icon.svg';
import twitter from '../../Assets/twitter-icon.svg';
import insta from '../../Assets/insta-icon.svg';
import linkedin from '../../Assets/linkedin-icon.svg';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className='bg-slate-700 mt-12 pt-12 pb-5 border-t-8 border-orange-500'>
        <div className='container max-w-full'>
          <div className='flex flex-col  md:flex-row md:justify-around mx-5'>
            <div className='w-full px-4 mb-12 md:w-2/3'>
              <img src={logo} alt='logo' className='w-52'/>
              <p className='text-white text-base ml-3 mt-1'>Platform ini dibuat untuk memberikan kemudahan bagi Programmer Indonesia untuk Tanya Jawab ataupun memberikan informasi yang bermanfaat bagi programmer lainnya.  </p>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3'>
              <h3 className='font-semibold text-xl text-white mb-3'>Fitur</h3>
              <ul className='text-slate-200'>
                <li>
                  <Link to='/forum' className='inline-block text-base hover:text-orange-500 mb-2'>Forum CodeIn</Link>
                </li>
                <li>
                  <Link to='/blog' className='inline-block text-base hover:text-orange-500 mb-2'>Blog CodeIn</Link>
                </li>
                <li>  
                  <Link to='/about' className='inline-block text-base hover:text-orange-500 mb-2'>About CodeIn</Link>
                </li>
                <li>  
                  <Link to='/faq' className='inline-block text-base hover:text-orange-500 mb-2'>FaQ CodeIn</Link>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3 '>
              <h3 className='font-semibold text-xl text-white mb-3'>Pusat Bantuan</h3>
              <ul className='text-slate-200'>
                <li>
                <Link to='/' className='inline-block text-base hover:text-orange-500 mb-2'>Temukan Produk</Link>
                </li>
                <li>  
                <Link to='/' className='inline-block text-base hover:text-orange-500 mb-2'>Kenapa Kami</Link>
                </li>
                <li>  
                <Link to='/' className='inline-block text-base hover:text-orange-500 mb-2'>FAQ</Link>
                </li>
                <li>  
                <Link to='/' className='inline-block text-base hover:text-orange-500 mb-2'>Panduan Penggunaan</Link>
                </li>
              </ul>
            </div>
            <div className='w-full px-4 mb-12 md:w-1/3 ml-3 '>
              <h3 className='font-semibold text-xl text-white mb-3'>Info Kontak</h3>
              <ul className='text-slate-200'>
                <li>
                  <p className='inline-block text-base mb-2'>Nomer: +62423424234</p>
                </li>
                <li>
                  <p className='inline-block text-base mb-2'>Email: CodeIn@email.com</p>
                </li>
                <li>
                  <p className='inline-block text-base mb-2'>Lokasi:  West Tebet, Tebet, South Jakarta City, Jakarta</p>
                </li>
                <li className='flex flex-row mt-4'>
                  <Link to='/'><img href='#' src={fb} alt='fb' className='w-7' /></Link>
                 <Link to="/"><img src={insta} alt='fb' className='w-7 ml-5' /></Link>
                 <Link to="/"><img src={twitter} alt='fb' className='w-7 ml-5' /></Link>
                 <Link to="/"><img src={linkedin} alt='fb' className='w-7 ml-5' /></Link>
                </li>
              </ul>
            </div>

          </div>
          <div className='w-full pt-5 mt-5 border-t border-white'>
            <p className='text-white text-center'>
              © 2022 CodeIn | Semua hak dilindungi undang-undang
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;

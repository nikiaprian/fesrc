import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PencilAltIcon } from '@heroicons/react/solid';
import useAuthStore from '../store/AuthStore';

function Head(props) {
  const [input, setInput] = useState('');
  const { isLoggedIn } = useAuthStore();
  let key = window.localStorage.getItem('ACCESS_KEY');

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = (event) => {
    props.setFilter(input);
  };
  return (
    <>
      <div className=" w-full h-full flex justify-center items-start gap-6 flex-col md:items-center md:justify-between md:flex-row ">
        <div className="flex flex-col md:gap-2 ">
          <p className="font-poppins font-semibold text-3xl">
            {props?.titleHead}
          </p>
          <p className="text-md md:text-md font-poppins text-slate-800">
            {props?.contentHead}
          </p>
        </div>

        <button className="shadow-md flex flex-row items-center gap-3  px-6 py-1.5 bg-orange-500 rounded-lg border-neutral-300 border-2 text-white font-bold hover:bg-orange-600 hover:text-white ">
          <Link
            to={
              isLoggedIn || key ? props.path : `/login?redirect=${props?.path}`
            }
          >
            <div className="flex flex-row items-center gap-3">
              <p>{props?.nameButton}</p>
              <PencilAltIcon className="w-5 h-5" />
            </div>
          </Link>
        </button>
      </div>
      <div className=" flex gap-5 items-center w-full justify-end">
        <input
          type="text"
          placeholder="Cari berdasarkan Tag"
          className="shadow-md font-poppins rounded-3xl text-xs md:text-lg px-3 border-2 w-full max-w-md border-slate-300 bg-transparent h-9"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="px-6 py-1.5 shadow-lg bg-orange-500 rounded-3xl border-neutral-300 border-2 text-white font-bold hover:bg-orange-600 hover:text-white"
        >
          Telusuri
        </button>
      </div>
    </>
  );
}

export default Head;

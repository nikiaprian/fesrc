import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackSubmit(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => navigate(-1)}
          className="shadow-lg px-4 py-1.5 bg-white rounded-md border-orange-500 border-2 text-orange-500 font-bold hover:bg-orange-600 hover:text-white hover:border-neutral-700"
        >
          Kembali
        </button>
        <button onClick={props?.handleClick} className="shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-orange-500 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
          Kirim
        </button>
      </div>
    </>
  );
}

export default BackSubmit;

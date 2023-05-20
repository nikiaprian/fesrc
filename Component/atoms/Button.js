import React from 'react';

const Button = (props) => {
  console.log(props);
  return (
    <>
      <button className="shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-neutral-700 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500">
        Kirim
      </button>
    </>
  );
};

export default Button;

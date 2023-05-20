import React from 'react';

function InputJudul(props) {
  return (
    <>
      <div className="">
        <label
          htmlFor="name_judul"
          className="block mb-2 text-sm text-gray-900 font-bold"
        >
          {props?.label}
        </label>
        <input
          id="name_judul"
          placeholder={props?.placeholder}
          type="text"
          className="border-2 bg-[#f2f2f2] border-gray-300 shadow-md font-poppins rounded-lg text-lg px-3 w-full  bg-transparent h-9"
          onChange={(e) => {
            props.setInputJudul(e.target.value);
          }}
          required
        />
      </div>
    </>
  );
}

export default InputJudul;

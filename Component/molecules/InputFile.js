import React from 'react';

function InputFile(props) {
  const handleChange = (e) => {
    props?.input(e.target.files[0]);
  };

  return (
    <>
      <div className="">
        <label
          className="block mb-2 text-sm text-gray-900 font-bold"
          htmlFor="file_input"
        >
          {props?.type === 'createBlog' ? 'Upload Image Banner Blog' : null}
        </label>
        <div className="flex justify-center items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="border-2 bg-[#f2f2f2] border-gray-300 shadow-md flex flex-col justify-center items-center w-full h-64  rounded-lg   cursor-pointer  hover:bg-gray-100 "
          >
            <div className="flex flex-col justify-center items-center px-6 pt-5 pb-6">
              <svg
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 ">
                PNG, JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default InputFile;

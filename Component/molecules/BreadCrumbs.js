import React from 'react';
import { useNavigate } from 'react-router-dom';

function BreadCrumbs(props) {
  let navigate=useNavigate();
  return (
    <>
      <div>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <div className="flex items-center">
                <div
                  className="text-md font-medium text-orange-500 hover:text-gray-900 cursor-pointer"
                  onClick={()=>navigate(-1)}
                >
                  {props?.prev}
                </div>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-md font-medium text-gray-900 md:ml-2">
                  {props?.current}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default BreadCrumbs;

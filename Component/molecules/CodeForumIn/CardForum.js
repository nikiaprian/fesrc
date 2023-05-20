import React from 'react';
import ViewTag from '../ViewTag';
import { Link } from 'react-router-dom';
import gambar from '../../../Assets/fotoProfil.png';
import { HeartIcon, ChatAltIcon } from '@heroicons/react/solid';
function CardForum(props) {
  return (
    <>
      <div className="border-2 px-5 bg-[#f2f2f2] border-gray-300 w-full rounded-md shadow-lg flex flex-col gap-3 hover:bg-[#E9E8E8]">
        <Link to={`/forum/detailforum/${props.id}`}>
          <div className="flex mt-2 ml-2 gap-2  pr-8 md:pr-0">
            <div className="flex flex-col pt-10 pr-5">
              <div className="flex flex-col items-center ">
                <p className="font-bold text-xl text-black">{props?.like}</p>
                <HeartIcon className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-xl text-black">{props?.answer}</p>
                <ChatAltIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="w-10/12 xl:w-full pt-10  flex flex-col gap-2">
              <p className="font-bold text-md md:text-lg font-poppins w-10/12">
                {props.title}
              </p>
              <p
                className="text-sm font-poppins break-words text-ellipsis overflow-hidden max-h-10 w-10/12 "
                dangerouslySetInnerHTML={{ __html: props?.content }}
              ></p>
              <div className="">
                <ViewTag tags={props?.tags} />
              </div>
            </div>
          </div>
          <div className="flex mb-5 mr-5 justify-end gap-3 items-center font-poppins mt-4">
            <div className="flex flex-col text-right">
              <p className="text-md font-semibold">{props?.user}</p>
              <p className="text-xs">{props?.date}</p>
            </div>
            <img
              className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
              src={props?.profileImg === null ? gambar : props?.profileImg}
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardForum;

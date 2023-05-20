import React from 'react';
import { Link } from 'react-router-dom';
import ViewTag from '../ViewTag';
import gambar from '../../../Assets/fotoProfil.png';

function CardBlog(props) {
  return (
    <>
      <div className="border-2 p-3 bg-[#f2f2f2] border-gray-300 w-full rounded-md shadow-md flex flex-col gap-3 hover:bg-[#E9E8E8]">
        <Link to={`/blog/detailblog/${props?.id}`}>
          <div className="flex flex-col  md:flex-row  m-2 gap-2 ">
            <div className="w-50 mr-3 shadow-md md:max-h-28">
              <img
                src={props?.img}
                className="rounded-md shadow-md object-cover w-full md:w-48 h-full"
                alt="gambar"
              />
            </div>
            <div className="w-11/12 md:w-10/12 flex flex-col gap-2">
              <p className="font-bold text-md md:text-lg font-poppins">
                {props?.title}
              </p>
              <p
                className="text-sm font-poppins break-words text-ellipsis overflow-hidden max-h-10 w-11/12"
                dangerouslySetInnerHTML={{ __html: props?.content }}
              ></p>
              <div className="">
                <ViewTag tags={props?.tags} />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 items-center font-poppins mt-4">
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

export default CardBlog;

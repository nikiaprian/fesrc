import React from 'react';
import LikeUnlike from '../../molecules/DetailForum/LikeUnlikeAnswer';
import CheckedCard from './CheckedCard';
import gambar from '../../../Assets/fotoProfil.png';
import DeleteAnswer from './DeleteAnswer';
function CardViewForum(props) {
  return (
    <>
      <div className="flex flex-col gap-6 rounded-md shadow-lg font-poppins border-2 bg-[#f2f2f2] border-gray-300 p-4">
        <div className="flex justify-between items-center font-poppins">
          <div className="flex gap-3 items-center">
            <img
              className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
              src={props?.profileImg === null ? gambar : props?.profileImg}
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold">{props?.user}</p>
              <p className="text-xs">{(props?.date).substring(0, 10)}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-3">
              <LikeUnlike
                id={props?.id}
                status_like={props?.status_like}
                total_like={props?.total_like}
              />
              <CheckedCard checked={props?.checked} id={props?.id} />
              <DeleteAnswer
                userId={props?.userId}
                id={props?.id}
              />
            </div>
          </div>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: props?.comment }}
        ></div>
      </div>
    </>
  );
}

export default CardViewForum;

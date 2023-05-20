import React from 'react';
import profile from '../../../Assets/fotoProfil.png';
import LikeUnlike from '../LikeUnlike';
import { useForumStore } from '../../store/ProductStore';
import DeleteContent from '../DeleteContent';
function HeadContentForum() {
  const forum = useForumStore((state) => state.forumId);
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex gap-3 items-center font-poppins">
          <img
            className="w-10 h-10 object-cover border-2 border-orange-500 rounded-full shadow-md"
            src={forum?.user?.photo===null?profile:forum?.user?.photo}
            alt=""
          />
          <div className="">
            <p className="text-md font-semibold">{forum?.user?.username}</p>
            <p className="text-xs">Dibuat {(forum?.created_at)?.substring(0, 10)}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <LikeUnlike type="likeForum" />
            <DeleteContent type="deleteForum"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadContentForum;

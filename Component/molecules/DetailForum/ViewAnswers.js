import React from 'react';
import CardViewForum from './CardViewForum';
import { useForumStore } from '../../store/ProductStore';
function ViewAnswers(props) {
  const answers = useForumStore((state) => state.answers);
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="block mb-2 text-lg text-gray-900 font-bold">
          {props?.deskripsi} ({answers != null ? answers?.length : 0})
        </p>
        <div className="my-3 flex flex-col gap-5 ">
          {answers &&
            answers.map((data, index) => (
              <CardViewForum
                key={data?.id}
                date={data?.created_at}
                comment={data?.comment}
                user={data?.user?.username}
                userId={data?.user?.id}
                checked={data?.is_answer}
                id={data?.id}
                status_like={data?.is_you_like}
                total_like={data?.total_likes}
                profileImg={data?.user?.photo}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ViewAnswers;

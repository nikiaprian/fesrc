import React, { useEffect, useState } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import axios from 'axios';
function LikeUnlikeAnswer(props) {
  const [state, setState] = useState({});
  let key = window.localStorage.getItem('ACCESS_KEY');
  useEffect(() => {
    setState(props);
    //eslint-disable-next-line
  }, [props]);

  const handleLike = async () => {
    if (state?.status_like) {
      await axios
        .delete(`http://be.codein.myportfolio.studio/like/forum/comment/${state?.id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
        })
        .then((res) => {
          setState({
            ...state,
            status_like: false,
            total_like: state?.total_like - 1,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
        .post(
          `http://be.codein.myportfolio.studio/like/forum/comment/${state?.id}`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${key}`,
            },
          }
        )
        .then((res) => {
          setState({
            ...state,
            status_like: true,
            total_like: state.total_like + 1,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      {state?.status_like ? (
        <div className="flex items-center gap-2">
          <HeartIconSolid
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-base wl-8 font-medium font-poppins">
            {state?.total_like}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <HeartIconOutline
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-base wl-8 font-medium font-poppins">
            {state?.total_like}
          </p>
        </div>
      )}
    </>
  );
}

export default React.memo(LikeUnlikeAnswer);

import React, { useEffect, useState } from 'react';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useForumStore, useBlogStore } from '../store/ProductStore';
import axios from 'axios';
function LikeUnlike(props) {
  const [state, setState] = useState({});
  let key = window.localStorage.getItem('ACCESS_KEY');
  const forumsId = useForumStore((state) => state.forumId);
  const blogId = useBlogStore((state) => state.blogId);

  useEffect(() => {
    if (props?.type === 'likeForum') {
      setState(forumsId);
    } else if (props?.type === 'likeBlog') {
      setState(blogId);
    }
    //eslint-disable-next-line
  }, [forumsId, blogId]);

  let tempApi;
  if (props?.type === 'likeForum') {
    tempApi = forumsId;
  } else if (props?.type === 'likeBlog') {
    tempApi = blogId;
  }

  const handleLike = async () => {
    if (props?.type === 'likeForum') {
      if (state?.is_you_like) {
        await axios
          .delete(`http://52.87.178.223/like/forum/${tempApi?.id}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${key}`,
            },
          })
          .then((res) => {
            setState({
              ...state,
              is_you_like: false,
              total_likes: state.total_likes - 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await axios
          .post(
            `http://52.87.178.223/like/forum/${tempApi?.id}`,
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
              is_you_like: true,
              total_likes: state.total_likes + 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else if (props.type === 'likeBlog') {
      if (state?.is_you_like) {
        await axios
          .delete(`http://52.87.178.223/like/blog/${tempApi?.id}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${key}`,
            },
          })
          .then((res) => {
            setState({
              ...state,
              is_you_like: false,
              total_likes: state.total_likes - 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await axios
          .post(
            `http://52.87.178.223/like/blog/${tempApi?.id}`,
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
              is_you_like: true,
              total_likes: state.total_likes + 1,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  return (
    <>
      {state?.is_you_like ? (
        <div className="flex items-center gap-2">
          <HeartIconSolid
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-base wl-8 font-medium font-poppins">
            {state?.total_likes}
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <HeartIconOutline
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={key && handleLike}
          />
          <p className="text-base wl-8 font-medium font-poppins">
            {state?.total_likes}
          </p>
        </div>
      )}
    </>
  );
}

export default LikeUnlike;

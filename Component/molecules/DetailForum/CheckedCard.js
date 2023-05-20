import React, { useState, useEffect } from 'react';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/solid';
import axios from 'axios';
import { useForumStore } from '../../store/ProductStore';
function CheckedCard(props) {
  let key = window.localStorage.getItem('ACCESS_KEY');
  let idUser = window.localStorage.getItem('idUser');
  const [checked, setChecked] = useState('');
  const forum = useForumStore((state) => state.forumId);
  // console.log(props)

  useEffect(() => {
    setChecked(props?.checked);
  }, [props.checked]);

  const getApI = async (checked) => {
    console.log(checked);
    await axios
      .patch(
        `http://52.87.178.223/forum/comment/${props?.id}/selected-answer`,
        { is_answer: checked },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChecked = () => {
    if (checked && forum?.user?.id === +idUser && key) {
      setChecked(false);
      getApI(!checked);
    } else if (!checked && forum?.user?.id === +idUser && key) {
      setChecked(true);
      getApI(!checked);
    }
  };
  return (
    <>
      <div className="flex items-center gap-1">
        {checked ? (
          <CheckCircleIconSolid
            className="h-6 w-6 text-teal-700 cursor-pointer"
            onClick={handleChecked}
          />
        ) : (
          <CheckCircleIconSolid
            className={`h-6 w-6 text-gray-400 cursor-pointer ${
              forum?.user?.id === +idUser ? 'block' : 'hidden'
            }`}
            onClick={handleChecked}
          />
        )}
      </div>
    </>
  );
}

export default CheckedCard;

import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function DeleteComment(props) {
  const [state, setState] = useState({});
  let key = window.localStorage.getItem('ACCESS_KEY');
  const navigate = useNavigate();
  let idUser = window.localStorage.getItem('idUser');

  useEffect(() => {
    setState(props);
  }, [props]);

  const handleDelete = async () => {
    if (state?.userId === +idUser) {
      await axios
        .delete(`http://be.codein.myportfolio.studio/comments/${state?.id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`,
          },
        })
        .then((res) => {
          Swal.fire('Berhasil!', 'Anda Telah Berhasil Menghapus!', 'success');
          navigate(`/blog`);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Gagal!',
            text: 'Gagal Menghapus!',
            icon: 'error',
            confirmButtonText: 'ya, saya mencoba kembali',
          });
        });
    }
  };
  return (
    <>
      <div className="flex items-center gap-2">
        {state?.userId === +idUser ? (
          <TrashIcon
            className="h-6 w-6 text-red-600 cursor-pointer"
            onClick={key && handleDelete}
          />
        ) : null}
      </div>
    </>
  );
}

export default DeleteComment;

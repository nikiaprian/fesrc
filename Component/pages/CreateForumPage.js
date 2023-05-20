import React, { useState } from 'react';
import BackSubmit from '../molecules/BackSubmit';
import BreadCrumbs from '../molecules/BreadCrumbs';
import InputJudul from '../molecules/InputJudul';
import InputMarkdown from '../molecules/InputMarkdown';
import InputTags from '../molecules/InputTags';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import PreviewMarkdown from '../molecules/PreviewMarkdown';
import ScrollButton from '../atoms/ScrollButton';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateForumPage() {
  const [inputTag, setInputTag] = useState([]);
  const [inputJudul, setInputJudul] = useState('');
  const [inputMarkdowon, setInputMarkdown] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('ACCESS_KEY');

  const handleClick = async (e) => {
    let data = new FormData();
    data.append('title', inputJudul);
    data.append('content', inputMarkdowon);
    inputTag.forEach((tag) => data.append('tags', tag?.text));

    await axios
      .post('http://52.87.178.223/forums/new', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        Swal.fire('Berhasil!', 'Anda Telah Berhasil membuat Pertanyaan', 'success');
        navigate('/forum');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.localStorage.removeItem('ACCESS_KEY')
          window.localStorage.removeItem("idUser")
          navigate('/')
        }
        Swal.fire({
          title: 'Gagal!',
          text: 'Anda Tidak Berhasil membuat Pertanyaan',
          icon: 'error',
          confirmButtonText: 'ya, saya mencoba kembali',
        });
      });
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4 ">
          <BreadCrumbs prev="ForumIn" current="Buat Pertanyaan" />
          <div className="my-10 flex flex-col gap-6 ">
            <InputJudul
              setInputJudul={setInputJudul}
              label="Judul Pertanyaan"
              placeholder="Masukkan judul pertanyaan"
            />
            <InputTags tag={inputTag} setTags={setInputTag} />
            <InputMarkdown
              deskripsi="Deskripsi"
              setEditorState={setInputMarkdown}
              mode="wysiwyg"
              placeholder="Tulis deskripsi anda disini"
              type="createForum"
            />
            <PreviewMarkdown editorState={inputMarkdowon} />
            <BackSubmit handleClick={handleClick} />
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default CreateForumPage;

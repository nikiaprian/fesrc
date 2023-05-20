import React, { useState } from 'react';
import BackSubmit from '../molecules/BackSubmit';
import BreadCrumbs from '../molecules/BreadCrumbs';
import InputFile from '../molecules/InputFile';
import InputJudul from '../molecules/InputJudul';
import InputMarkdown from '../molecules/InputMarkdown';
import InputTags from '../molecules/InputTags';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import PreviewMarkdown from '../molecules/PreviewMarkdown';
import ScrollButton from '../atoms/ScrollButton';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//import { useBlogStore } from '../store/ProductStore';
import axios from 'axios';
function CreateBlogPage() {
  //const fetchCreateBlog = useBlogStore((state) => state.fetchCreateBlog);
  const [inputTag, setInputTag] = useState([]);
  const [inputJudul, setInputJudul] = useState('');
  const [inputFile, setInputFile] = useState('');
  const [inputMarkdowon, setInputMarkdown] = useState('');

  const navigate = useNavigate();

  const token = localStorage.getItem('ACCESS_KEY');
  const handleClick = async (e) => {
    let data = new FormData();
    data.append('file', inputFile);
    data.append('title', inputJudul);
    data.append('content', inputMarkdowon);
    inputTag.forEach((tag) => data.append('tags', tag?.text));

    await axios
      .post('http://be.codein.myportfolio.studio/blogs/new', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        Swal.fire('Berhasil!', 'Anda Telah Berhasil membuat Blog', 'success');
        navigate('/blog');
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          window.localStorage.removeItem('ACCESS_KEY')
          window.localStorage.removeItem("idUser")
          navigate('/')
        }
        Swal.fire({
          title: 'Gagal!',
          text: 'Anda Tidak Berhasil membuat Blog',
          icon: 'error',
          confirmButtonText: 'ya, saya mencoba kembali',
        });
      });
  };

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4">
          <BreadCrumbs prev="BlogIn" current="Buat Blog" />
          <div className="my-10 flex flex-col gap-6 ">
            <InputJudul
              setInputJudul={setInputJudul}
              label="Judul Blog"
              placeholder="Masukkan judul Blog"
            />
            <InputTags tag={inputTag} setTags={setInputTag} />
            <InputFile input={setInputFile} type="createBlog" />
            <InputMarkdown
              setEditorState={setInputMarkdown}
              deskripsi="Deskripsi"
              mode="wysiwyg"
              placeholder="Tulis deskripsi anda disini"
              type="createBlog"
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

export default CreateBlogPage;

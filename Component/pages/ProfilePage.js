import React, { useEffect, useState } from 'react';
import ScrollButton from '../atoms/ScrollButton';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
//eslint-disable-next-line
import { CubeIcon } from '@heroicons/react/outline';
import gambarUser from '../../Assets/fotoProfil.png';
import axios from 'axios';
import InputFile from '../molecules/InputFile';
import Swal from 'sweetalert2';
import { useBlogStore, useForumStore } from '../store/ProductStore';
import Spiner from '../../Assets/Spinners/Spiner';
import CardForum from '../molecules/CodeForumIn/CardForum';
import CardBlog from '../molecules/CodeBlogIn/CardBlog';

function ProfilePage() {
  const [isForum, setIsForum] = useState(true);
  const [buttonUpdate, setButtonUpdate] = useState(false);
  const [profile, setProfile] = useState({});
  const [inputFile, setInputFile] = useState('');
  const token = localStorage.getItem('ACCESS_KEY');
  const idUser = localStorage.getItem('idUser');

  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);
  const blog = useBlogStore((state) => state.blogs);

  const fetchForums = useForumStore((state) => state.fetchForums);
  const forum = useForumStore((state) => state.forums);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://52.87.178.223/user/profile', {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { username, photo } = res.data.data;
          setProfile({ photo: photo, username: username });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchBlogs('http://52.87.178.223/blogs', token);
    fetchForums('http://52.87.178.223/forums', token);
    fetchData();
  }, [token, fetchBlogs, fetchForums]);

  //console.log(forum)

  const handleClickForum = () => {
    setIsForum(!isForum);

    if (isForum) {
      setIsForum(true);
    }
  };
  let activeStyle = {
    color: 'orange',
    textDecoration: 'underline',
  };
  const handleClickBlog = () => {
    setIsForum(isForum);

    if (isForum) {
      setIsForum(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', inputFile);
    data.append('username', profile?.username);

    await axios
      .patch('http://52.87.178.223/user/update-profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { username, photo } = res?.data?.data;
        setProfile({ photo: photo, username: username });
        Swal.fire(
          'Berhasil!',
          'Anda Telah Berhasil Update Profile',
          'success'
        ).then((isConfirmed) => {
          if (isConfirmed) setButtonUpdate(false);
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          title: 'Gagal!',
          text: 'Anda Tidak Berhasil update Profile',
          icon: 'error',
          confirmButtonText: 'ya, saya mencoba kembali',
        });
      });
  };
  if (Object.keys(profile).length === 0) {
    return <Spiner />;
  }
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className="  mt-40 w-7/12  mx-auto flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="rounded-md bg-white">
                <form>
                  <div className="flex flex-col gap-3 items-center px-5 py-4">
                    <img
                      className="rounded-full w-32 h-32 object-cover border-2 border-orange-600"
                      src={
                        profile?.photo === null ? gambarUser : profile?.photo
                      }
                      alt=""
                    />
                    <h4 className="text-lg font-medium mt-2">
                      {profile.username}
                    </h4>
                    {buttonUpdate ? (
                      <>
                        <button
                          onClick={() => setButtonUpdate(false)}
                          className="py-2 px-4  bg-orange-600 rounded-full"
                        >
                          X
                        </button>
                        <InputFile
                          title="Image Profile Picture"
                          input={setInputFile}
                          type="profilUpdate"
                        />
                        <button
                          onClick={handleSubmit}
                          className=" mt-2 shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-orange-500 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500"
                        >
                          Kirim
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setButtonUpdate(true)}
                        className=" mt-2 shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-orange-500 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500"
                      >
                        Update Foto
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-screen h-full">
            <div className="flex flex-col md:p-12 md:flex-row mt-0 pt-0">
              <div className="w-11/12 md:w-7/12 mx-auto flex flex-col gap-4">
                <div className="text-center flex flex-row justify-center mb-6 ">
                  <button
                    style={isForum ? activeStyle : null}
                    className="mr-10 text-2xl hover:text-orange-500 active:text-orange-500 active:border-b-2 active:border-orange-400"
                    onClick={() => handleClickForum()}
                  >
                    ForumIn
                  </button>
                  <button
                    style={!isForum ? activeStyle : null}
                    className="text-2xl cursor-pointer hover:text-orange-500 active:text-orange-500 active:border-b-2 active:border-orange-400"
                    onClick={() => handleClickBlog()}
                  >
                    BlogIn
                  </button>
                </div>
                <div className="border-t-2 border-gray-200 max-w-120"></div>
                <div className="mt-6">
                  {isForum ? (
                    <div className="flex w-11/12 flex-col gap-4 mx-auto">
                      {forum &&
                        forum
                          .filter((data) => data?.user?.id === +idUser)
                          .map((data, index) => (
                            <CardForum
                              key={index}
                              id={data.id}
                              title={data.title}
                              content={data.content}
                              date={data.created_at.substring(0, 10)}
                              answer={data?.total_comment}
                              like={data?.total_likes}
                              profileImg={data?.user?.photo}
                              user={data.user.username}
                              tags={data.tag}
                            />
                          ))}
                    </div>
                  ) : (
                    <div className="flex w-11/12 flex-col gap-4 mx-auto">
                      {blog &&
                        blog
                          .filter((data) => data?.user?.id === +idUser)
                          .map((data, index) => (
                            <CardBlog
                              key={index}
                              id={data.id}
                              title={data.title}
                              content={data.content}
                              date={data.created_at.substring(0, 10)}
                              img={data.photo}
                              profileImg={data?.user?.photo}
                              user={data.user.username}
                              tags={data.tag}
                            />
                          ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default React.memo(ProfilePage);

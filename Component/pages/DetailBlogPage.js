import React, { useState, useEffect } from 'react';
import Navbar from '../molecules/Navbar';
import BreadCrumbs from '../molecules/BreadCrumbs';
import ViewTag from '../molecules/ViewTag';
import HeadContentBlog from '../molecules/DetailBlog/HeadContentBlog';
import InputMarkdown from '../molecules/InputMarkdown';
import ViewComments from '../molecules/DetailBlog/ViewComment';
import Footer from '../molecules/Footer';
import ScrollButton from '../atoms/ScrollButton';
import { useParams } from 'react-router-dom';
import { useBlogStore } from '../store/ProductStore';
function DetailBlogPage() {
  let { idblog } = useParams();
  const [inputMarkdown, setInputMarkdown] = useState({});
  const key = window.localStorage.getItem('ACCESS_KEY');

  const fetchBlogId = useBlogStore((state) => state.fetchBlogId);
  const blog = useBlogStore((state) => state.blogId);
  const fetchSetComment = useBlogStore((state) => state.fetchSetComment);
  const fetchCommentInput = useBlogStore((state) => state.fetchCommentInput);
  useEffect(() => {
    fetchBlogId(`http://52.87.178.223/blogs/${idblog}`,key);
    fetchSetComment(idblog);
    //eslint-disable-next-line
  }, [idblog, fetchBlogId, key]);

  const handleClick = async () => {
    fetchCommentInput(idblog, inputMarkdown, key);
  };

  return (
    <>
      <div>
        <div className="w-screen h-screen overflow-x-hidden">
          <Navbar />
          <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4 ">
            <BreadCrumbs prev="BlogIn" current="Detail Blog" />
            <div className="my-10 flex flex-col gap-6 ">
              <div className="">
                <img
                  src={blog.photo}
                  alt="gambarBanner"
                  className="rounded-t-3xl w-full md:h-96 md:object-cover md:object-top "
                />
              </div>
              <p className="font-semibold text-3xl">{blog?.title}</p>
              <HeadContentBlog/>
              <ViewTag tags={blog?.tag} />
              <div
                className="border-2 overflow-x-auto bg-[#f2f2f2] border-gray-300 p-4 font-poppins rounded-md shadow-lg"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              ></div>
              <ViewComments deskripsi="Komentar" />
              {key && key ? (
                <div>
                  <InputMarkdown
                    deskripsi="Tulis Komentar Di sini"
                    mode="markdown"
                    placeholder="Tulis Komentar anda disini"
                    setEditorState={setInputMarkdown}
                    type="comment"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleClick}
                      className="shadow-lg px-6 py-1.5 bg-orange-500 rounded-md border-neutral-300 border-2 text-white font-bold hover:bg-orange-600 hover:text-white hover:border-orange-500"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <ScrollButton />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DetailBlogPage;

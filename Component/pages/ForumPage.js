import React, { useState, useEffect } from 'react';
import ScrollButton from '../atoms/ScrollButton';
import ContentForum from '../molecules/CodeForumIn/ContentForum';
//eslint-disable-next-line
import Footer from '../molecules/Footer';
import Head from '../molecules/Head';
import Navbar from '../molecules/Navbar';
import { useForumStore } from '../store/ProductStore';
function ForumPage() {
  let key = window.localStorage.getItem('ACCESS_KEY');
  const [filter, setFilter] = useState('');
  const fetchForums = useForumStore((state) => state.fetchForums);
  useEffect(() => {
    fetchForums(key);
  }, [fetchForums, key]);
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className=" mt-40 w-10/12 md:w-8/12 mx-auto flex flex-col gap-4">
          <Head
            titleHead="Code ForumIn"
            contentHead="Tempat berkomunikasi para programmer dengan cara mengajukan dan menjawab sebuah pertanyaan"
            nameButton="Buat Pertanyaan"
            path="/forum/createforum"
            setFilter={setFilter}
          />
          <ContentForum filter={filter} />
        </div>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default ForumPage;

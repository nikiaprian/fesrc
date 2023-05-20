import React, { useState, useEffect } from 'react';

function ViewTag(props) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(props?.tags);
  }, [props?.tags]);
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-3 flex-wrap">
        {tags &&
          tags.map((tag) => {
            return (
              <div
                key={tag?.id}
                className="bg-orange-500 w-25  text-xs md:text-sm font-poppins  opacity-90 text-white px-2 py-1.5 rounded-md shadow-md"
              >
                #{tag?.tag}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ViewTag;

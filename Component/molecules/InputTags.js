import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { KEYIT } from '../../Assets/keyTag/key';
import '../../Assets/keyTag/TagInput.css';

const suggestions = KEYIT.map((key) => {
  return {
    id: key,
    text: key,
  };
});
const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

function InputTag(props) {
  const [tags, setTags] = React.useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
    props?.setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    props?.setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  return (
    <>
      <div className="">
        <p className="block mb-2 text-sm text-gray-900 font-bold">Tags</p>
        <div className="z-50 ">
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            placeholder="Add a tag"
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            autocomplete
          />
        </div>
      </div>
    </>
  );
}

export default InputTag;

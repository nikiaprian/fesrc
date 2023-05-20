import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
///codeSyntaxHighlight
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
///colorPicker
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function InputMarkdown(props) {
  const editorRef = React.createRef(props);
  //eslint-disable-next-line
  //const [editorState, setEditorState] = useState({ html: '', md: '' });

  const handleChange = (e) => {
    //const getMark = editorRef.current.getInstance().getMarkdown();
    const getHtml = editorRef.current.getInstance().getHTML();
    //setEditorState({ html: getHtml, md: getMark });
    if (props?.type === 'comment' || props?.type === 'answer') {
      props?.setEditorState(JSON.stringify({ comment: getHtml }));
    } else if (props?.type === 'createBlog' || props?.type === 'createForum') {
      props?.setEditorState(getHtml);
    }
  };

  return (
    <>
      <div className="">
        <p className="block mb-2 text-sm text-gray-900 font-bold">
          {props?.deskripsi}
        </p>
        <div className="border-2 bg-[#f2f2f2] border-gray-300 p-0 font-poppins rounded-md shadow-lg">
          <Editor
            ref={editorRef}
            initialValue="Tutorial Penggunaan silahkan copy link dibawah ini: 
            https://github.com/Fahmiady11/Tutorial_markdown"
            placeholder={props.placeholder}
            previewStyle="tab"
            height="600px"
            initialEditType={props.mode}
            useCommandShortcut={true}
            onChange={handleChange}
            plugins={[
              [colorSyntax],
              [codeSyntaxHighlight, { highlighter: Prism }],
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default InputMarkdown;

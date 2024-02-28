/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useMemo } from 'react';
import ReactQuill from 'react-quill';

const layout = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const textEditorLayout = css`
  position: absolute;
  top: 100px;
  width: 900px;
  height: 700px;
`;

const btn = css`
  position: absolute;
  top: 8px;
  right: 10px;
  padding: 2px;
  background-color: white;
  border: 1px solid #dbdbdb;
  &:hover{
    background-color: #eee;
  }
  &:active{
    background-color: #ddd;
  }
`

function BoardEx() {

  // Quill에디터의 이벤트객체는 value만 들어옴.
  // 실제 데이터는 html 태그임-> 하이퍼링크(a태그), 이미지첨부(img태그), 볼드체(strong태그), 글자크기(h태그)
  const handleQuillChange = (value) => {
    console.log(value);
  }

  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'underline', 'strike'],        // toggled buttons
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']                                         // remove formatting button
    ]
  }), []);

  return (
    <div css={layout}>
      <div css={textEditorLayout}>
        <ReactQuill style={{ height: "100%" }} onChange={handleQuillChange} modules={modules} />
        <button css={btn}>작성완료</button>
      </div>
    </div>
  );
}

export default BoardEx;
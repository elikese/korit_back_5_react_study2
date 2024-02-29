/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/quillModules';
import { useMaxLengthValidateInput } from '../../hooks/inputHook';
import { useQuillInput } from '../../hooks/quillHook';
import { useNavigate } from 'react-router-dom';
import { useLoadListFromLocalStorage } from '../../hooks/boardListHook';

const layout = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 120px;
  border: 1px solid #dbdbdb;
  padding: 50px 0px;
`;

const headerTitle = css`
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

const boardTitle = css`
  box-sizing: border-box;
  margin-bottom: 10px;
  outline: none;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
`;

const submitBtn = css`
  box-sizing: border-box;
  margin-top: 50px;
  width: 90%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    background-color: #eee;
  }
`;

function BoardWrite() {
  const navigate = useNavigate();

  //Custom Hook 사용
  const [inputValue, handleInputChange] = useMaxLengthValidateInput(20);
  const [quillValue, handleQuillValueChange] = useQuillInput();
  const { boardList, lastId } = useLoadListFromLocalStorage();

  const handleSubmitClick = () => {
    let newBoardList = [];

    for (let i = 0; i < 200; i++) {
      const board = {
        boardId: i + 1,
        boardTitle: inputValue + (i + 1),
        boardContent: quillValue
      };
      console.log(i + "번째")
      newBoardList = [...newBoardList, board];
    }
    localStorage.setItem("boardList", JSON.stringify(newBoardList));
    alert("글작성 완료!");
    navigate("/board/list");
  }

  return (
    <div css={layout}>
      <h1 css={headerTitle}>글 작성하기</h1>
      <input onChange={handleInputChange}
        value={inputValue}
        css={boardTitle}
        type="text"
        placeholder='제목을 입력하세요' />
      <ReactQuill onChange={handleQuillValueChange}
        value={quillValue}
        style={{ width: "90%", height: "400px" }}
        modules={QUILL_MODULES} />
      <button css={submitBtn} onClick={handleSubmitClick}>작성완료</button>
    </div>
  );
}

export default BoardWrite;
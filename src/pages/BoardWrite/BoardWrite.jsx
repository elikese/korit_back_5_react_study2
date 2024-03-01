/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/quillModules';
import { useMaxLengthValidateInput } from '../../hooks/inputHook';
import { useQuillInput } from '../../hooks/quillHook';
import { useNavigate } from 'react-router-dom';
import { useLoadListFromLocalStorage } from '../../hooks/boardListHook';

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
    navigate("/board/list?page=1");
  }

  return (
    <div css={S.layout}>
      <h1 css={S.headerTitle}>글 작성하기</h1>
      <input onChange={handleInputChange}
        value={inputValue}
        css={S.boardTitle}
        type="text"
        placeholder='제목을 입력하세요' />
      <ReactQuill onChange={handleQuillValueChange}
        value={quillValue}
        style={{ width: "90%", height: "400px" }}
        modules={QUILL_MODULES} />
      <button css={S.submitBtn} onClick={handleSubmitClick}>작성완료</button>
    </div>
  );
}

export default BoardWrite;
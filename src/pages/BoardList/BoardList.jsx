/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { Link } from 'react-router-dom';
import { useLoadListFromLocalStorage } from '../../hooks/boardListHook';
import { useRef, useState } from "react";

function BoardList() {
  const { boardList } = useLoadListFromLocalStorage();
  const [showModal, setShowModal] = useState(false);
  const [clickedBoard, setClickedBoard] = useState({
    boardId : 0,
    boardTitle: "",
    boardContent:""
  });
  
  const handleboardClick = (board) => { 
    new Promise((resolve) => {
      setClickedBoard(board);
      resolve();
    }).then(() => {
      setShowModal(true); 
    });
  }

  const modal = useRef();
  
  const handleClickOutside = e => {
    if(e.target !== modal.current){
      setShowModal(false);
    }
  }

  const StringToHtml = (string) => {
    return(
      <div dangerouslySetInnerHTML={{ __html: string }}/>
    );
  }

  return (
    <div css={S.layout} onClick={handleClickOutside}>
      <div css={S.modalLayout(showModal)} >
        <h1 css={S.modalTitle}>{clickedBoard.boardTitle}</h1>
        <div css={S.modalContent} ref={modal}>{StringToHtml(clickedBoard.boardContent)}</div>
        <button css={S.modalOutBtn} onClick={()=>{setShowModal(false)}}>나가기</button>
      </div>      
      <h1 css={S.headerTitle}>게시글 목록</h1>
      <ul css={S.boardListLayout}>
        <li css={S.boardListHead}>
          <div>번호</div>
          <div>제목</div>
        </li>
        {
          boardList.map(board => {
            return (
              <Link onClick={()=>{handleboardClick(board)}} css={S.boardListItem}>
                <li key={board.boardId}>
                  <div>{board.boardId}</div>
                  <div>{board.boardTitle}</div>
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  );
}

export default BoardList;
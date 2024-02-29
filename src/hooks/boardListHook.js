import { useMemo } from "react";

/**
 * 로컬 스토리지에 key "boardList" 에 해당하는 value로 JS객체가 들어있는 List반환.
 * @returns 반환되는 List의 size, 0번째 index객체의 Id값, 마지막 index객체의 Id값 반환.
 */
export function useLoadListFromLocalStorage() {
  const boardList = useMemo(() => {
    const isBoardList = localStorage.getItem("boardList");
    return !isBoardList ? [] : JSON.parse(localStorage.getItem("boardList"));
  }, [localStorage.getItem("boardList")]);

  const lastIndex = boardList.length - 1;
  const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
  const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
  const size = boardList.length;

  return { boardList, size, firstId, lastId };
}
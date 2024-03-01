import { useMemo } from "react";

export function useLoadListFromLocalStorage() {
  const boardList = useMemo(() => {
    const lsBoardList = localStorage.getItem("boardList");
    return !lsBoardList ? [] : JSON.parse(localStorage.getItem("boardList"));
  }, [localStorage.getItem("boardList")]);

  const lastIndex = boardList.length - 1;
  const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
  const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
  const size = boardList.length;

  return { boardList, size, firstId, lastId };
}

export function useA(page) {
  const loadBoardList = useMemo(() => {
    const lsBoardList = localStorage.getItem("boardList");
    const loadBoardList = !lsBoardList ? [] : JSON.parse(lsBoardList);
    return loadBoardList;
  }, [page]);

  const boardList = loadBoardList.filter((board, index) => index > (page * 10) - 11 && index < page * 10)

  const size = boardList.length;
  const totalPageCount = Math.floor(size % 10 === 0 ? size / 10 : (size / 10) + 1);
  const startPageNumber = page % 5 === 0 ? page - 4 : (page - (page % 5)) + 1
  const endPageNumber = startPageNumber + 4 <= totalPageCount ? startPageNumber + 4 : totalPageCount;

  let pageNumbers = useMemo(() => {
    let newPageNumbers = [];

    for (let i = startPageNumber; i <= endPageNumber; i++) {
      newPageNumbers = [...newPageNumbers, i];
    }

    return newPageNumbers;
  }, [startPageNumber]);

  return { boardList, size, pageNumbers, totalPageCount }
}

export function useB(page) {
  const loadBoardList = useMemo(() => {
    const lsBoardList = localStorage.getItem("boardList");
    const loadBoardList = !lsBoardList ? [] : JSON.parse(lsBoardList);
    return loadBoardList;
  }, [page]);

  const boardList = loadBoardList.filter((board, index) => index > (page * 10) - 11 && index < page * 10);

  const size = loadBoardList.length;

  const totalPageCount = Math.floor(size % 10 === 0 ? size / 10 : (size / 10) + 1);
  const startPageNumber = page % 5 === 0 ? page - 4 : (page - (page % 5)) + 1
  const endPageNumber = startPageNumber + 4 <= totalPageCount ? startPageNumber + 4 : totalPageCount;

  let pageNumbers = useMemo(() => {
    let newPageNumbers = [];

    for (let i = startPageNumber; i <= endPageNumber; i++) {
      newPageNumbers = [...newPageNumbers, i];
    }

    return newPageNumbers;
  }, [startPageNumber]);

  return { boardList, size, pageNumbers, totalPageCount };
}
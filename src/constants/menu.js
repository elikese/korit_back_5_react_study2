import BoardList from "../pages/BoardList/BoardList";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import ImageEx from "../pages/ImageEx/ImageEx";
import Mypage from "../pages/Mypage/Mypage";

export const MENUS = [
    {
        id: 1,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <>게시판</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <>공지</>
    },
    {
        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element: <ImageEx />
    },
    {
        id: 5,
        path: "/board/write",
        name: "게시글 작성",
        element: <BoardWrite />
    },
    {
        id: 6,
        path: "/board/list",
        name: "게시글 목록",
        element: <BoardList />,
        params: {
            page: 1
        }
    }
];
export type Author = {
    userId: string;
    nickName: string;
    profileImage : string;
}

export type ArticleItem = {
    postId: number;
    title: string;
    category: string;
    createdAt: string;
    content: {
        __html: string;
    };
    commentCount: number;
    likeCount: number;
    answerCount: number;
    likeType: boolean;
    author: Author;
}

// export type List = {
//     posts: ArticleItem[],
//     pageInfo?: {
//         pageIndex: number;
//         done: boolean;
//     }
// }
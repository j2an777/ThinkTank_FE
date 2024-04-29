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
}

export type List = {
    article: ArticleItem;
    author: Author;
}

export type Page = {
    pageInfo: {
        pageIndex: number;
        done: boolean;
    }
}


export type Item = {
    nickname: string;
    createdAt: string;
    title : string;
    content: {
        __html: string;
    };
    like: number;
    comment: number;
    check: number;
};
export type List = {
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
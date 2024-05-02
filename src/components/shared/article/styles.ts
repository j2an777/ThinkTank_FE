import styled from "@emotion/styled";

export const ArticleContainer = styled.div`
    width : 100%;
    height : 380px;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    background-color : white;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius : 20px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    gap : 10px;
`;

export const ArTopBox = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const ArTitleBlock = styled.p`
    font-size : 28px;
    font-weight : 500;
    color : black;
`;

export const ArContentBlock = styled.p`
    width : 100%;
    height : 200px;
    font-size : 16px;
    font-weight : 500;
    color : black;
`;

export const ArDataBlock = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 15px;
`;
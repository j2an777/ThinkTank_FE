import styled from "@emotion/styled";
import { colors } from "../../../styles/colorPalette";


export const MeContainer = styled.div`
    position : sticky;
    top : 0;
    left : 0;
    width : 350px;
    height : 100%;
    padding : 30px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
    gap : 30px;
`;

export const SearchBox = styled.div`
    width : 100%;
    height : 40px;
    border-radius : 999px;
    background-color : ${colors.gray50};
    display : flex;
    align-items : center;
    justify-content : flex-start;
    padding : 5px 15px;
    box-sizing : border-box;

    input {
        width : 100%;
        height : 100%;
        border : none;
        outline : none;
        background-color : transparent;
        font-size : 16px;
        font-weight : 500;
        color : ${colors.gray300};
        padding : 0 10px;
        box-sizing : border-box;

        &::placeholder {
            color : ${colors.gray};
        }
    }
`;

export const SearchImgBlock = styled.svg`
    width : 24px;
    height : 24px;
    object-fit : contain;
    fill : ${colors.gray};
`;

export const MeBox = styled.div`
    width : 100%;
    height : auto;
    margin : 0 0 30px 0;
    padding : 0 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const MeTitleBlock = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 10px;

    img {
        width : 28px;
        height : 28px;
        object-fit : contain;
    }

    p {
        font-family : 'pretendard';
        font-size : 28px;
        font-weight : 700;
        color : black;
    }
`;

export const MeContentBlock = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    gap : 10px;

    p {
        font-family : 'pretendard';
        font-size : 18px;
        font-weight : 600;
        color : ${colors.gray300};
    }
`;
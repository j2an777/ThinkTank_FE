import emotionStyled from "@emotion/styled";
import { colors } from "../../../styles/colorPalette";

export const MlWrapper = emotionStyled.div`
    width : auto;
    flex-grow : 1;
    height : 100%;
    margin : 0;
    padding : 0 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-left : 1px solid ${colors.gray50};
    border-right : 1px solid ${colors.gray50};
`;

export const MlItemBox = emotionStyled.div`
    width : 100%;
    max-height : 500px;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 30px;
`;

export const MlUser = emotionStyled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const MlProfile = emotionStyled.img`
    width : 50px;
    height : 50px;
    object-fit : contain;
    border-radius : 50%;
    border : 3px solid ${colors.gray};
`;

export const MlInfo = emotionStyled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;

    h3 {
        font-size : 20px;
        font-weight : 500;
        color : black;
    }

    p {
        font-size : 16px;
        font-weight : 500;
        color : ${colors.gray200};
    }
`;

export const MlArticle = emotionStyled.div`
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

export const MlTitle = emotionStyled.p`
    font-size : 28px;
    font-weight : 500;
    color : black;
`;

export const MlContent = emotionStyled.p`
    width : 100%;
    height : 200px;
    font-size : 16px;
    font-weight : 500;
    color : black;
`;

export const MlData = emotionStyled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 15px;
`;

export const MlDataBox = emotionStyled.div`
    width : auto;
    height : 100%;
    marign : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 10px;

    img {
        width : 30px;
        height : 30px;
        object-fit : contain;
    }

    p {
        font-size : 20px;
        font-weight : 500;
        color : ${colors.gray300};
    }
`;
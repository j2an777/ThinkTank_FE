import styled from "@emotion/styled";
import { colors } from "../../../styles/colorPalette";

export const MlContainer = styled.div`
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

export const MlItemBox = styled.div`
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

export const MlUserBlock = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const MlProfile = styled.img`
    width : 50px;
    height : 50px;
    object-fit : contain;
    border-radius : 50%;
    border : 3px solid ${colors.gray};
`;

export const MlInfo = styled.div`
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

export const MlData = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 15px;
`;

export const MlDataWrap = styled.div`
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
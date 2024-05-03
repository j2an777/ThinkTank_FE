import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";


export const MltContainer = styled.div`
    width : 100%;
    max-height : 500px;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 30px;
`;

export const MlUserBox = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const AvatarBlock = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    border : 2px solid ${colors.gray};
    border-radius : 50%;
`;

export const MlProfile = styled.img`
    width : 50px;
    height : 50px;
    object-fit : contain;
    border-radius : 50%;
    border : 3px solid ${colors.gray};
`;

export const MlInfoBlock = styled.div`
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
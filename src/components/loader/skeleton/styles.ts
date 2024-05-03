import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

export const UserBox = styled.div`
    width : 100%;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
    margin: 30px 0 0 0;
`;

export const AvatarBlock = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    border : 2px solid ${colors.gray};
    border-radius : 50%;
`;

export const InfoBlock = styled.div`
    width : 100%;
    height : 50px;
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

export const ContentBox = styled.div`
    margin : 30px 0 0 0;
`;
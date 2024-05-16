import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

export const MltContainer = styled.div`
    width : 100%;
    min-height : 500px;
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
    height : 110px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
`;

export const AvatarBlock = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    border : 3px solid ${colors.gray};
    border-radius : 50%;
    padding : 5px;
    box-sizing : border-box;
`;

export const MlInfoBlock = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`;
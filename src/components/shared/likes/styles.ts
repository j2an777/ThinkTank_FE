import { colors } from "@/styles/colorPalette";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";


export const Container = styled.div`
    width : auto;
    height : 100%;
    marign : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 10px;

    p {
        font-size : 20px;
        font-weight : 500;
        color : ${colors.gray300};
    }
`;

const jellyAnimation = keyframes`
    0%,100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
`;

export const ActiveBox = styled.div`
    width : 30px;
    height : 30px;
    display : flex;
    align-items : center;
    justify-content : center;
    transition : all 0.3s ease;

    img {
        width : 100%;
        height : 100%;
        object-fit : contain;
    }

    &:hover {
        transform : scale(1.1);
        cursor : pointer;
    }

    &:active {
        transform : scale(0.9);
    }

    &.jelly {
        animation: ${jellyAnimation} 0.5s ease;
    }

`;
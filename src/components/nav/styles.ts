import styled from "@emotion/styled";
import { colors } from "../../styles/colorPalette";


export const NavContainer = styled.div`
    position : sticky;
    top : 0;
    left : 0;
    width : 400px;
    height : 100%;
    padding : 50px 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
    gap : 50px;
`;

export const NavLogoBox = styled.div`
    width : 100%;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;

    img {
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
`;

export const NavItemBox = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 30px;
    background-color : white;

    a {
        text-decoration : none;
        width : 100%;
        height : 50px;
        padding : 0 0 0 30px;
        box-sizing : border-box;
        display : flex;
        align-items : center;
        justify-content : flex-start;
        gap : 20px;
        transition : all 0.1s ease;

        p {
            font-size : 36px;
            font-weight : 700;
            color : black;
        }

        &:hover {
            cursor : pointer;
            background-color : ${colors.gray50};
        }
    }
`;

export const NavPostBtn = styled.button`
    width : 100%;
    height : 60px;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${colors.yellow};
    border : none;
    border-radius : 999px;

    a {
        color : white;
        font-size : 36px;
        font-weight : bold;
    }

    &:hover {
        cursor: pointer;
        background-color : ${colors.yellowHover};
    }
`;
import emotionStyled from "@emotion/styled";
import { colors } from "../../styles/colorPalette";


export const NavWrapper = emotionStyled.div`
    position : sticky;
    top : 0;
    left : 0;
    width : 400px;
    height : 100%;
    margin : 0;
    padding : 50px 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
    gap : 50px;
`;

export const NavLogo = emotionStyled.div`
    width : 100%;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;

    img {
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
`;

export const NavItemBox = emotionStyled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 30px;
    background-color : white;
`;

export const NavItem = emotionStyled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0 0 0 30px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 20px;
    transition : all 0.3s ease;

    img {
        width : 40px;
        height : 40px;
        object-fit : contain;
    }

    p {
        font-family : 'pretendard', sans-serif;
        font-size : 28px;
        font-weight : 700;
        color : black;
    }

    &:hover {
        cursor : pointer;
        background-color : ${colors.gray50};
    }
`;

export const NavPostBtn = emotionStyled.button`
    width : 100%;
    height : 60px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : ${colors.yellow};
    color : white;
    border : none;
    border-radius : 999px;
    font-size : 36px;
    font-weight : bold;

    &:hover {
        cursor: pointer;
        background-color : ${colors.yellowHover};
    }
`;
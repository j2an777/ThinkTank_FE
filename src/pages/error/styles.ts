import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";


export const ErrorContainer = styled.div`
    width : 100%;
    height : 100vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;

    img {
        width : 500px;
        height : 500px;
        object-fit : contain;
    }

    @media (max-width : 950px) {
        width : 90vw;

        img {
            width : 300px;
            height : 300px;
        }
    }

    @media (max-width : 768px) {
        
        img {
            width : 200px;
            height : 200px;
        }
    }

    @media (max-width : 300px) {
        img {
            width : 120px;
            height : 120px;
        }
    }
`;

export const ErrorTopBox = styled.div`
    width : auto;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 10px;
`;

export const ErrorPBlock = styled.p`
    font-size : 20rem;
    font-family : 'pretendard';
    font-weight : 700;
    color : ${colors.yellow};

    @media (max-width : 950px) {
        font-size : 15rem;
    }

    @media (max-width : 768px) {
        font-size : 7rem;
    }

    @media (max-width : 300px) {
        font-size : 5rem;
    }
`;

export const ErrorP2 = styled.p`
    font-size : 20rem;
    font-family : 'pretendard';
    font-weight : 700;
    color : #03d100;

    @media (max-width : 950px) {
        font-size : 15rem;
    }

    @media (max-width : 768px) {
        font-size : 7rem;
    }

    @media (max-width : 300px) {
        font-size : 5rem;
    }
`;

export const ErrorBottomBox = styled.div`
    width : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;
    gap : 40px;

    a {
        text-decoration : none;
        width : 150px;
        height : 50px;
        display : flex;
        align-items : center;
        justify-content : center;
        margin : 0;
        padding : 0;
        border : none;
        border-radius : 20px;
        background-color : ${colors.yellow};
        color : white;
        font-size : 24px;
        font-family : 'pretendard';
        font-weight : 500;
        transition : all 0.3s ease;

        &:hover {
            background-color : ${colors.yellowHover};
        }

        &:active {
            transform : scale(0.9);
        }

        @media (max-width : 768px) {
            width : 120px;
            height : 40px;
            font-size : 18px;
        }
    }
`;

export const ErrorContentBlock = styled.p`
    font-size : 3rem;
    font-family : 'Poppins';
    font-weight : 700;
    color : ${colors.yellow};

    @media (max-width : 768px) {
        font-size : 2rem;
    }

    @media (max-width : 300px) {
        font-size : 1.4rem;
    }
`;
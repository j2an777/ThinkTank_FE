import styled from "@emotion/styled";
import { colors } from "@/styles/colorPalette";
import { typographyMap } from "@/styles/typography";


export const MeContainer = styled.div`
    position : sticky;
    top : 0;
    left : 0;
    width : 380px;
    height : 100%;
    padding : 50px 30px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : flex-start;
    gap : 30px;

    @media (max-width: 1300px) {
        display : none;
    }
`;

export const SearchBox = styled.div`
    width : 100%;
    height : 50px;
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
        ${typographyMap.t5};
        ${typographyMap.regular};
        color : ${colors.gray300};
        padding : 0 10px;
        box-sizing : border-box;

        &::placeholder {
            color : ${colors.gray};
        }
    }
`;

export const MeBox = styled.div`
    width : 100%;
    height : auto;
    margin : 50px 0 30px 0;
    padding : 0 5px;
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

`;

export const MeContentBlock = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    gap : 10px;
`;
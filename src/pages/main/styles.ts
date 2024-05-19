import styled from "@emotion/styled";


export const MainContainer = styled.div`
    width : 100%;
    min-height : 100vh;
    display : flex;
    justify-content : center;
    align-items : flex-start;
    margin : 0;
    padding : 0;

    @media (max-width : 570px) {
        flex-direction : column;
        align-items : center;
    }
`;
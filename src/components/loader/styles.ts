import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

export const LoadContainer = styled.div`
    width : auto;
    flex-grow : 1;
    height : 100%;
    padding : 30px 100px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-left : 1px solid ${colors.gray50};
    border-right : 1px solid ${colors.gray50};
`;


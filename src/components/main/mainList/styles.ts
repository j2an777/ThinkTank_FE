import styled from "@emotion/styled";
import { colors } from "../../../styles/colorPalette";

export const MlContainer = styled.div`
    width : 700px;
    flex-grow : 1;
    height : 100%;
    padding : 0 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-left : 1px solid ${colors.gray50};
    border-right : 1px solid ${colors.gray50};
`;
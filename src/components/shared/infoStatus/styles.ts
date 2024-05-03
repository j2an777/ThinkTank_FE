import { colors } from "@/styles/colorPalette";
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

interface ActiveBoxProps {
  value: string;
}

export const ActiveBox = styled.div<ActiveBoxProps>`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        transform: ${({ value }) => (value === 'nolike' || value === 'yeslike')  ? 'scale(1.1)' : 'none'};
        cursor: ${({ value }) => (value === 'nolike' || value === 'yeslike') ? 'pointer' : 'default'};
    }

    &:active {
        transform: ${({ value }) => (value === 'nolike' || value === 'yeslike')  ? 'scale(0.9)' : 'none'};
    }
`;
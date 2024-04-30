import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 170px;
`;

export const Blank = styled.div`
  position: relative;
  margin: 25px;
`;

export const Form = styled.form`
  width: 600px;
  margin: 80px 0;
`;

export const Label = styled.div<{ isFocus: boolean }>`
  color: ${(props) => (props.isFocus ? `${colors.yellow}` : `${colors.gray100}`)};
`;

export const TextArea = styled.textarea<{ isFocus: boolean }>`
  width: 100%;
  height: 220px;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 1em;
  border: 1px solid
    ${(props) => (props.isFocus ? `${colors.yellow}` : `${colors.gray100}`)};
  outline: none;
  resize: none;
  ::placeholder {
    color: ${colors.gray100};
  }
`;

export const TextLimit = styled.div`
  position: sticky;
  color: ${colors.gray100};
  bottom: 280px;
  text-align: right;
  margin-right: 15px;
  font-size: 15px;
`;

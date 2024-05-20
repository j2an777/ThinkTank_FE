import { colors } from "@/styles/colorPalette";
import { layoutMap } from "@/styles/layout";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  ${layoutMap.shadowBox}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  background-color: white;
  align-items: center;
`;

export const ButtonBox = styled.div`
  width : 200px;
  height : 100px;
  display : flex;
  align-items : center;
  justify-content : center;
  cursor : pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width : 200px;
  height : 1px;
  background-color : ${colors.gray50};
`;

export const CancelBox = styled.div`
  position : absolute;
  top : 50px;
  right : 50px;
`;
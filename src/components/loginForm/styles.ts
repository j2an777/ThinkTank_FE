import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import { layoutMap } from '@/styles/layout';
import { buttonSizeMap } from '@/styles/button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftBox = styled.div`
  flex: 1;
  border-right: 1px solid ${colors.gray100};
  height: 100%;
`;

export const RightBox = styled.div`
  flex: 1;
  ${layoutMap.flexCenter};
  width: 700px;
`;

export const Form = styled.form`
  width: 70%;
  margin-top: 65px;
`;

export const Image = styled.img`
  width: 700px;
  height: 100%;
`;

export const Blank = styled.div`
  margin: 25px;
`;

export const Signup = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
  color: ${colors.gray300};

  p {
    color: ${colors.yellow};
  }
`;

export const Social = styled.div`
  ${layoutMap.flexCenter}
  gap: 25px;
  margin: 20px 0;
  width: 70%;
  color: ${colors.gray300};

  p {
    margin-left: 15px;
  }
`;

export const KakaoButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.kakao};
  border-radius: 2em;
  border: 1px solid ${colors.kakao};
  ${buttonSizeMap.medium}
`;

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  border: 1px solid ${colors.gray};
  ${buttonSizeMap.medium}
`;

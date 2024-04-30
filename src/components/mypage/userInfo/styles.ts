import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 50px 80px;
  width: 100%;
  min-height: 320px;
`;

export const LeftBox = styled.div`
  flex: 2;
`;

export const RightBox = styled.div`
  flex: 5;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid ${colors.gray};
  border-radius: 10em;
`;

export const UserName = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const UserEmail = styled.div`
  font-size: 20px;
  color: ${colors.gray200};
`;

export const UserIntro = styled.div`
  margin-top: 50px;
  font-size: 25px;
  color: ${colors.gray300};
`;

export const Edit = styled.button`
  position: absolute;
  right: 60px;
  padding: 5px 25px;
  background-color: ${colors.gray100};
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
`;

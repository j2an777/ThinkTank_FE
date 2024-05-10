import { colors } from '@/styles/colorPalette';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 50px 150px;
  width: 100%;
  min-height: 300px;
`;

export const LeftBox = styled.div`
  flex: 1;
`;

export const RightBox = styled.div`
  flex: 4;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid ${colors.gray};
  border-radius: 10em;
`;

export const UserName = styled.div`
  ${typographyMap.t1}
  ${typographyMap.bold}
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 20px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserEmail = styled.div`
  ${typographyMap.t3}
  color: ${colors.gray};
`;

export const UserIntro = styled.div`
  margin-top: 28px;
  ${typographyMap.t2}
  color: ${colors.gray300};
`;

export const Edit = styled.button`
  display: relative;
  position: absolute;
  right: 150px;
`;

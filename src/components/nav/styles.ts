import styled from '@emotion/styled';
import { colors } from '../../styles/colorPalette';
import { typographyMap } from '@/styles/typography';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 420px;
  height: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  ${typographyMap.t1}

  @media (max-width : 1050px) {
    flex-direction: row;
    padding : 20px 50px;
    background-color: ${colors.white};
    border-radius : 0 0 30px 30px;
    box-shadow : 0 15px 20px rgba(0, 0, 0, 0.05);
    width : 100%;
    height : 150px;
    z-index : 999;
  }
`;

export const NavLogoBox = styled.div`
  width : 100%;
  height : 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width : 1050px) {
    display : none;
  }
`;

export const NavItemBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  a {
    text-decoration: none;
    width: 100%;
    height: 50px;
    padding: 0 0 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    transition: all 0.1s ease;

    &:hover {
      cursor: pointer;
      background-color: ${colors.gray50};
    }
  }

  @media (max-width : 1050px) {
    flex-direction: row;

    a {
      display : flex;
      flex-direction: column;
      width : 100%;
      height : 100%;

      p {
        ${typographyMap.t4};
      }

      &:hover {
        background-color : transparent;
      }
    }
  }
`;

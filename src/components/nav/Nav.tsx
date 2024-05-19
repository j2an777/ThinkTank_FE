import { Icon, StyledButton, Text } from '@/components/shared';
import { navItems } from '@/consts/navItems';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { useEffect, useState } from 'react';
import { ButtonSize } from '@/styles/button';

const Nav = () => {
  const [iconSize, setIconSize] = useState(48);
  const [buttonSize, setButtonSize] = useState<ButtonSize>("large");
  const [buttonContent, setButtonContent] = useState('post');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 570) {
        setIconSize(36);
        setButtonSize("medium");
        setButtonContent('+');
      } else if (window.innerWidth <= 900) {
        setIconSize(48);
        setButtonSize("medium");
        setButtonContent('+');
      } else {
        setIconSize(48);
        setButtonSize("large");
        setButtonContent('post');
      }
    };

    window.addEventListener('resize', handleResize);

    // 초기 크기 설정
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.NavContainer>
      <S.NavLogoBox>
        <Icon value="logo" size={250} $active={false} />
      </S.NavLogoBox>
      <S.NavItemBox>
        {navItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <Icon value={item.icon} size={iconSize} />
            <Text typography="t2" bold="bold" color="black">
              {item.label}
            </Text>
          </Link>
        ))}
      </S.NavItemBox>
      <Link to="/post">
        <StyledButton size={buttonSize} width='300px' resize='50px'>
          {buttonContent}
        </StyledButton>
      </Link>
    </S.NavContainer>
  );
};

export default Nav;

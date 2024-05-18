import { Icon, StyledButton, Text } from '@/components/shared';
import { navItems } from '@/consts/navItems';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Nav = () => {
  return (
    <S.NavContainer>
      <S.NavLogoBox>
        <Icon value="logo" size={250} $active={false} />
      </S.NavLogoBox>
      <S.NavItemBox>
        {navItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <Icon value={item.icon} size={48} />
            <Text typography="t1" bold="bold" color="black">
              {item.label}
            </Text>
          </Link>
        ))}
      </S.NavItemBox>
      <Link to="/post">
        <StyledButton size="large">
          Post
        </StyledButton>
      </Link>
    </S.NavContainer>
  );
};

export default Nav;

import { Icon, StyledButton, Text } from '@/components/shared';
import { navItems } from '@/consts/navItems';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Nav = () => {
  return (
    <S.NavContainer>
      <S.NavLogoBox>
        <Link to="/">
          <Icon value="logo" size={250} $active={false} />
        </Link>
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
      <StyledButton size="large">
        <Link to="/post">Post</Link>
      </StyledButton>
    </S.NavContainer>
  );
};

export default Nav;

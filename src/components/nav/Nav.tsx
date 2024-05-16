import { Icon, StyledButton } from '@/components/shared';
import { navItems } from '@/consts/navItems';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Nav = () => {
  return (
    <S.NavContainer>
      <S.NavLogoBox>
        <Link to="/">
          <Icon value="logo" size={250} />
        </Link>
      </S.NavLogoBox>
      <S.NavItemBox>
        {navItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <Icon value={item.icon} size={48} />
            <p>{item.label}</p>
          </Link>
        ))}
      </S.NavItemBox>
      <StyledButton size='large'>
        <Link to="/post">Post</Link>
      </StyledButton>
    </S.NavContainer>
  );
};

export default Nav;

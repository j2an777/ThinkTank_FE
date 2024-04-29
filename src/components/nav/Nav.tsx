import { navItems } from "./navItems";
import { Icon } from "../shared";
import { Link } from "react-router-dom";

import * as S from './styles';

const Nav = () => {
    return (
        <S.NavContainer>
            <S.NavLogoBox>
                <Link to="/">
                    <Icon value="logo" />
                </Link>
            </S.NavLogoBox>
            <S.NavItemBox>
                {navItems.map(item => (
                    <Link to={item.path} key={item.label}>
                        <Icon value={item.icon} />
                        <p>{item.label}</p>
                    </Link>
                ))}
            </S.NavItemBox>
            <S.NavPostBtn>
                <Link to="/post">Post</Link>
            </S.NavPostBtn>
        </S.NavContainer>
    )
}

export default Nav;
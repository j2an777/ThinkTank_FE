import { NavItemBlock, NavItemBox, NavLogoBox, NavPostBtn, NavContainer } from "./NavStyles";
import Logo from '../../assets/images/shared/logo.svg';
import { navItems } from "./navItems";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = () => {

    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState('a');

    const onHandleNavigate = (path: string) => {
        // 로그인 유무에 따져서 true면 navigate, 아니면 /login으로 이동
        if (loginUser) {
            navigate(`${path}/${loginUser}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <NavContainer>
            <NavLogoBox>
                <img src={Logo} />
            </NavLogoBox>
            <NavItemBox>
                {navItems.map(item => (
                    <NavItemBlock key={item.label} onClick={() => onHandleNavigate(item.path)}>
                        <img src={item.icon} alt={item.label} />
                        <p>{item.label}</p>
                    </NavItemBlock>
                ))}
            </NavItemBox>
            <NavPostBtn>Post</NavPostBtn>
        </NavContainer>
    )
}

export default Nav;
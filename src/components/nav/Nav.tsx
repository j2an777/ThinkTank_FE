import { NavItem, NavItemBox, NavLogo, NavPostBtn, NavWrapper } from "./NavStyles";
import Logo from '../../assets/images/shared/logo.svg';
import Home from '../../assets/images/nav/home.svg';
import Search from '../../assets/images/shared/search.svg';
import Problem from '../../assets/images/nav/file.svg';
import Profile from '../../assets/images/nav/profile.svg';
import Setting from '../../assets/images/nav/threedot.svg';

const Nav = () => {
  return (
    <NavWrapper>
        <NavLogo>
            <img src={Logo} />
        </NavLogo>
        <NavItemBox>
            <NavItem>
                <img src={Home} />
                <p>Home</p>
            </NavItem>
            <NavItem>
                <img src={Search} />
                <p>Search</p>
            </NavItem>
            <NavItem>
                <img src={Problem} />
                <p>Problem</p>
            </NavItem>
            <NavItem>
                <img src={Profile} />
                <p>Profile</p>
            </NavItem>
            <NavItem>
                <img src={Setting} />
                <p>Settings</p>
            </NavItem>
        </NavItemBox>
        <NavPostBtn>Post</NavPostBtn>
    </NavWrapper>
  )
}

export default Nav;
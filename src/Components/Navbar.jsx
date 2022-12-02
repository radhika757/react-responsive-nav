import { React, useState } from "react";
import { StyledNav } from "../styles/Navbar.styles";
import { RightNav } from "../styles/Navbar.styles";
import { LeftNav } from "../styles/Navbar.styles";
import {
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkContainer,
  Navbarlink,
  NavbarlinkRight,
  OpenLinksButton,
} from "../styles/Navbar.styles";

const Navbar = () => {
  const [exNavbar, setExNavbar] = useState(true);

  return (
    <StyledNav>
      <NavInnerContainer>
        <LeftNav>
          <NavLinkContainer>
            <Navbarlink to="/">Home</Navbarlink>

            <Navbarlink to="About">About</Navbarlink>
            <Navbarlink to="Blogs">Blogs</Navbarlink>
            <Navbarlink to="Contactus">Contact</Navbarlink>
            <OpenLinksButton
              onClick={() => {
                setExNavbar((curr) => !curr);
              }}
            >
              {exNavbar ? <> &#10005; </> : <> &#8801;</>}
            </OpenLinksButton>
          </NavLinkContainer>
        </LeftNav>
        <RightNav>
          <NavLinkContainer>
            <NavbarlinkRight to="Leh">Leh</NavbarlinkRight>
          </NavLinkContainer>
        </RightNav>
      </NavInnerContainer>
      <NavExtendedContainer>
        <Navbarlink to="/">Home</Navbarlink>
        <Navbarlink to="About">About</Navbarlink>
        <Navbarlink to="Blogs">Blogs</Navbarlink>
        <Navbarlink to="Contactus">Contact</Navbarlink>
      </NavExtendedContainer>
    </StyledNav>
  );
};

export default Navbar;

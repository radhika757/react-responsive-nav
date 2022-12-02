import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledNav = styled.nav`
width: 100%;
height: 80px;
background-color: #D3E0DC;
display: flex;
flex-direction: column;

`;

export const LeftNav = styled.div`

flex: 30%;
display: flex;
align-items: center;
padding-left: 5%;
/* background-color:saddlebrown ; */

`;

export const RightNav = styled.div`
display: flex;
flex: 70%;
justify-content: flex-end;
padding-right: 50px;
/* background-color: salmon; */
`;

export const NavInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex
;
`;

export const NavLinkContainer = styled.div`
display: flex;
`;

export const Navbarlink = styled(Link)`
text-decoration: none;
color:black;
font-weight: bold;
margin-right: 50px;
/* margin-top: 20px; */

@media (max-width: 700px){
 display: none;
}
`;

export const NavbarlinkRight = styled(Link)`
text-decoration: none;
color:black;
font-weight: bold;
margin-right: 50px;
margin-top: 30px;
`;

export const OpenLinksButton = styled.button`
width: 70px;
width: 50px;
color:black;
font-weight: bold;
cursor: pointer;
background: none;
border: none;
font-size: 20px;

@media (min-width: 700px){
 display: none;
}

`;

export const NavExtendedContainer = styled.div``;


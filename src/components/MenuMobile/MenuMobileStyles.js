import styled from "styled-components";
import Link from "next/link";


export const NavMobile = styled.nav`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-color: #333;
  width:100vw;
  height: 100vh;
  color:#F2F6F8;
  gap: 20px;
  

`

export const NavIcon = styled(Link)`
  height: 10px;
  cursor: pointer;

`;

export const TopBarNav = styled.div`
  background-color: #F2F6F8;
  color: #333;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  height: 100%;
  margin-top: 5%;
  position: fixed;
  top: ${({menuMobileOpened}) => (menuMobileOpened ? '0' : '-130%' )};
  transition: 350ms;
  z-index: 10;
  gap:20px;
  
`;

export const TopBarWrap = styled.div`
  display:flex;
  flex-direction: column;
  /* justify-content: space-between; */
  & svg{
    margin-bottom: 10px;
  }
`;

export const TopBarMenu = styled.div`

`;
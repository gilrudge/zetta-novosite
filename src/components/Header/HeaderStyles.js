import styled from 'styled-components'


export const HeaderStyles = styled.div`
  background-color:#F2F6F8;
  z-index:10;  
`;
export const HeaderContactInfo = styled.div`
  display:flex;
  justify-content: space-between;
  color: #FFEFEB;
  box-sizing: border-box;
  line-height:50px;    
  background-color:#EC7A5C;
  padding: 0px 5%; 
  @media screen and (max-width: 1086px){
      justify-content:center;

    }   
`;
export const VerticalLine = styled.div`
  height: 100%;
  border-left: 1px solid;
  
  &#primeira-linha-vertical{
    margin-left: 10px;
    margin-right:10px;
       
  }
  &#segunda-linha-vertical{
    margin-left: 10px;
  }
  
    @media screen and (max-width: 1086px){
      display: none;
    }  
`;
export const MailPhoneInfo = styled.ul`
  display:flex;
  list-style: none;
  
  @media screen and (max-width: 1086px){
    flex-direction:column;
    line-height: 25px;
    margin: 10px;   
  }  
`;
export const MailPhoneContainer = styled.div`
  display:flex;
  #envelope-icon svg{
    margin-right: 1vw;
  }
  #phone-icon svg{
    margin-right: 1vw;
  }
  @media screen and (max-width: 1086px){
    justify-content:center;    
  } 
`;
export const ShiftSocialMediaInfo = styled.ul`
  display:flex;
  list-style: none;
  #clock-icon svg{
    margin-right: 1vw;;
  }

  @media screen and (max-width: 1086px){
    display:none;
  }  
`;
export const Dash = styled.li`
  margin: 0px 5px;  
  @media screen and (max-width: 1200px){
    display:none;
  }
`;
export const ShiftEmergency = styled.li`
  @media screen and (max-width: 1200px){
    display:none;
  }
`;
export const SocialMediaIcons = styled.li`
    margin-left: 10px;
  @media screen and (max-width: 1086px){
    display:none;
  }
`;
export const HeaderMenu = styled.nav`
  padding-top: 15px;
  padding-bottom: 15px;
  display:flex;
  justify-content: space-between;  
  padding: 1.5% 5%;    
`;
export const OptionMenu = styled.ul`
  display:flex;
  justify-content: flex-end;
  gap:4%;
  width:80%;
  padding: 15px 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }  
`;
export const ItemMenu = styled.li`
 position:relative;
 :hover{
    .menu-dropdown{
      transform: translateX(-20%) rotate(0);
      opacity:1;
      transition-timing-function: ease-out;    
    }
  }  
`;
export const TitleMenuDropDown = styled.span`
  :hover{
      color:#EC7A5C;
      cursor: pointer;
    }   
`;
export const MenuDropDown = styled.ul`
  background-color:#EC7A5C;
  border-radius: 5px;
  color: #FFEFEB;
  padding: 5px;
  position: absolute;
  margin-top:49%;
  width:16rem;          
  left:50%;
  transform:translateX(-20%) rotateX(-90deg);
  transform-origin: top center;          
  transition-timing-function: ease-in;
  transition-delay: 80ms;
  opacity: 0.25;
  transition-duration: 300ms;  
`;
export const MenuDropDownSubmenuItem = styled.li`
  margin: 15px;  
  :hover{    
    font-weight: bold;
  }
`;


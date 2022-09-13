import {
        HeaderStyles, HeaderContactInfo,
        VerticalLine, MailPhoneInfo, ShiftSocialMediaInfo,
        HeaderMenu, OptionMenu, ItemMenu,
        TitleMenuDropDown, MenuDropDown,
        MenuDropDownSubmenuItem, Bars, ShiftEmergency,
        SocialMediaIcons, Dash, MailPhoneContainer } from './HeaderStyles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
          facebookIcon, instagramIcon, clockIcon,
          phoneIcon, envelopeIcon, shift,
          contactValue, headerMenu, barMenu } from '../../globalData.js'

import Hamburguer from '../Hamburguer/Hamburguer'

export default function Header(props){  

 
  
  const [menuEmpresa, setEmpresa] = useState(`${headerMenu[1].menu} +`)
  const [menuServicos, setServicos] = useState(`${headerMenu[2].menu} +`)
  

  const logoLoader = ({src, width, quality}) =>{
    return `images/logo/${src}?w=${width}&q=${quality || 75}`
  }
  
  const logoZetta = (props) =>{
    return(
      <Image
        loader={logoLoader}
        src={props}
        alt='zetta-logo'
        width={150}
        height={50 }        
      />
    )
  }
  
  const [subMenu, setSubMenu] = useState(true); 


  return(

   <HeaderStyles>
    <HeaderContactInfo>
      <MailPhoneInfo className='mail-phone-info'>
        <MailPhoneContainer>
          <div id='envelope-icon'>{envelopeIcon}</div>
          <li>{contactValue.email}</li>
        </MailPhoneContainer>
        <VerticalLine id='primeira-linha-vertical'></VerticalLine>
        <MailPhoneContainer>
          <li id='phone-icon'>{phoneIcon}</li>
          <li>{contactValue.phone}</li>
        </MailPhoneContainer>
      </MailPhoneInfo>
      <ShiftSocialMediaInfo className='shift-socialMedia-info'>
        <li id='clock-icon'>{clockIcon}</li>
        <li className='shift-hours'>{shift.hours}</li>
        <Dash className='dash'> - </Dash>
        <ShiftEmergency className='shift-emergency'>{shift.emergency}</ShiftEmergency>
        <VerticalLine id='segunda-linha-vertical'></VerticalLine>
        <SocialMediaIcons className='facebook-icon'><Link href="/"><a>{facebookIcon}</a></Link></SocialMediaIcons>
        <SocialMediaIcons className='instagram-icon'><Link href="/"><a>{instagramIcon}</a></Link></SocialMediaIcons>        
      </ShiftSocialMediaInfo>
    </HeaderContactInfo>
    <HeaderMenu className='header-menu container'>
      <span className='logo'>{logoZetta('LogoCinza300x100.png')}</span>
      <OptionMenu className='option-menu'>
        <ItemMenu className='item-menu'><Link href="/"><a>{headerMenu[0].menu}</a></Link></ItemMenu>
        <ItemMenu className='item-menu'>
          <TitleMenuDropDown className='title-menu-dropdown' onMouseOver={() => setEmpresa(`${headerMenu[1].menu} -`)} onMouseOut={()=>setEmpresa(`${headerMenu[1].menu} +`)}>{menuEmpresa}</TitleMenuDropDown>
            <MenuDropDown className='menu-dropdown'>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[1].subMenu[0].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[1].subMenu[1].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[1].subMenu[2].subPage}</a></Link></MenuDropDownSubmenuItem>
            </MenuDropDown>
        </ItemMenu>
        <ItemMenu className='item-menu'>
          <TitleMenuDropDown className='title-menu-dropdown' onMouseOver={() => setServicos(`${headerMenu[2].menu} -`)} onMouseOut={() => setServicos(`${headerMenu[2].menu} +`)}>{menuServicos}</TitleMenuDropDown>
            <MenuDropDown className='menu-dropdown'>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[0].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[1].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[2].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[3].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[4].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[5].subPage}</a></Link></MenuDropDownSubmenuItem>
              <MenuDropDownSubmenuItem><Link className='menu-dropdown-submenu-link' href="/"><a>{headerMenu[2].subMenu[6].subPage}</a></Link></MenuDropDownSubmenuItem>
            </MenuDropDown>
        </ItemMenu>
        <ItemMenu className='item-menu'><Link href="/"><a>{headerMenu[3].menu}</a></Link></ItemMenu>
        <ItemMenu className='item-menu'><Link href="/"><a>{headerMenu[4].menu}</a></Link></ItemMenu>
        <ItemMenu className='item-menu'><Link href="/"><a>{headerMenu[5].menu}</a></Link></ItemMenu>
      </OptionMenu>
      <Hamburguer
        subMenuIsVisible={subMenu}
        setSubMenuIsVisible={setSubMenu}
      />
     
    </HeaderMenu>    
   </HeaderStyles>
    
  )

};
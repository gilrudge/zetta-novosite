import {
        NavMobile, CloseIcon, NavIcon, TopBarNav,
        TopBarWrap, TopBarMenu} from './MenuMobileStyles'
import {headerMenu, plusIcon, minusIcon, barMenu, xMark} from '../../globalData'
import Hamburguer from '../Hamburguer/Hamburguer'
import { forwardRef, useState } from 'react'
import Link from 'next/link'
import {faXmark, faPlus, faMinus, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ForwardedRef } from 'react';
import SubMenu from './Submenu'



export default function MenuMobile(){

  const[menuMobileOpened, setMEnuMobileOpened] = useState(false)

  const menuMobileIsOpen = () =>{
    setMEnuMobileOpened(!menuMobileOpened)
    console.log('ta rodando')
  }

  

  return(
    <>
      <NavMobile>
        <NavIcon href="/">
          <FontAwesomeIcon icon={faBars} onClick={menuMobileIsOpen}/>
          {/* <Hamburguer onClick={menuMobileIsOpen}/> */}
        </NavIcon>
       <TopBarNav menuMobileOpened={menuMobileOpened}>
        <TopBarWrap>
          <NavIcon href="/">
            <FontAwesomeIcon icon={faXmark} onClick={menuMobileIsOpen}/>
            {/* <Hamburguer onClick={menuMobileIsOpen}/> */}
          </NavIcon>
          {/* <TopBarMenu>
            {headerMenu.map((item, index)=>{
              return(
                <li key={index}>{item.menu}</li>
              )
            })}
          </TopBarMenu> */}
          {headerMenu.map((item, index)=>{
            return <SubMenu item={item} key={index}/>
          })}
        </TopBarWrap>
       </TopBarNav>
      </NavMobile>
    </>
  )
}
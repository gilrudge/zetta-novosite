import Link from 'next/link';
import {SubMenuLink, SubMenuLabel} from './SubMenuStyles'
import {headerMenu} from '../../globalData'

export default function SubMenu({item}){
  return(
    <>
      <SubMenuLink href={item.path}>

        <SubMenuLabel>{item.menu}</SubMenuLabel>
      </SubMenuLink>
    </>
  )
}